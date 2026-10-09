const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const https = require('https');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ptetool';

const diQuestions = [
  {
    title: 'Bar Chart: Population Growth',
    url: "https://quickchart.io/chart?c={type:'bar',data:{labels:['2010','2015','2020'],datasets:[{label:'Population',data:[100,120,150]}]}}",
    keywords: ['population', 'growth', 'bar chart', 'highest', 'lowest', '2010', '2015', '2020', '150', '100', 'increase', 'trend']
  },
  {
    title: 'Pie Chart: Energy Consumption',
    url: "https://quickchart.io/chart?c={type:'pie',data:{labels:['Coal','Solar','Wind','Gas'],datasets:[{data:[40,20,15,25]}]}}",
    keywords: ['pie chart', 'energy', 'consumption', 'coal', 'solar', 'wind', 'gas', 'majority', 'percentage', 'lowest', 'highest', '40', '15']
  },
  {
    title: 'Line Graph: Global Temperature',
    url: "https://quickchart.io/chart?c={type:'line',data:{labels:['Jan','Feb','Mar','Apr','May'],datasets:[{label:'Temp',data:[10,12,15,20,25]}]}}",
    keywords: ['line graph', 'global', 'temperature', 'months', 'january', 'may', 'increase', 'trend', 'rising', 'highest', 'lowest', '25', '10']
  },
  {
    title: 'Doughnut Chart: Market Share',
    url: "https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Company A','Company B','Company C'],datasets:[{data:[50,30,20]}]}}",
    keywords: ['doughnut chart', 'market', 'share', 'company a', 'company b', 'company c', 'half', 'majority', '50', '20', 'percentage']
  },
  {
    title: 'Bar Chart: Student Enrollment',
    url: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Arts','Science','Engineering','Medicine'],datasets:[{label:'Students',data:[300,450,400,200]}]}}",
    keywords: ['bar chart', 'student', 'enrollment', 'arts', 'science', 'engineering', 'medicine', 'highest', 'lowest', '450', '200', 'popular']
  },
  {
    title: 'Line Graph: Company Revenue',
    url: "https://quickchart.io/chart?c={type:'line',data:{labels:['2018','2019','2020','2021'],datasets:[{label:'Revenue',data:[1000,1500,1300,2000]}]}}",
    keywords: ['line graph', 'company', 'revenue', 'years', 'increase', 'decrease', 'fluctuation', 'highest', 'lowest', '2000', '1000', 'trend']
  },
  {
    title: 'Pie Chart: Monthly Expenses',
    url: "https://quickchart.io/chart?c={type:'pie',data:{labels:['Rent','Food','Transport','Entertainment'],datasets:[{data:[45,25,15,15]}]}}",
    keywords: ['pie chart', 'monthly', 'expenses', 'rent', 'food', 'transport', 'entertainment', 'majority', 'budget', '45', '15', 'equal']
  },
  {
    title: 'Radar Chart: Skill Assessment',
    url: "https://quickchart.io/chart?c={type:'radar',data:{labels:['Math','Science','Reading','Writing','Art'],datasets:[{label:'Student',data:[80,70,90,85,60]}]}}",
    keywords: ['radar chart', 'skill', 'assessment', 'math', 'science', 'reading', 'writing', 'art', 'strongest', 'weakest', '90', '60']
  },
  {
    title: 'Bar Chart: Average Rainfall',
    url: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Spring','Summer','Autumn','Winter'],datasets:[{label:'Rainfall',data:[50,20,60,80]}]}}",
    keywords: ['bar chart', 'average', 'rainfall', 'spring', 'summer', 'autumn', 'winter', 'seasons', 'highest', 'lowest', '80', '20', 'wet']
  },
  {
    title: 'Line Graph: Stock Price',
    url: "https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri'],datasets:[{label:'Price',data:[100,105,102,110,108]}]}}",
    keywords: ['line graph', 'stock', 'price', 'days', 'monday', 'friday', 'fluctuation', 'increase', 'highest', '110', '100', 'trend']
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const seedDescribeImages = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const folder = path.join(__dirname, 'uploads', 'questions', 'describe_image');
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    for (let i = 0; i < diQuestions.length; i++) {
      const q = diQuestions[i];
      const filename = `di_seed_${Date.now()}_${i}.png`;
      const filepath = path.join(folder, filename);
      
      console.log(`Downloading image for: "${q.title}"`);
      await downloadImage(q.url, filepath);

      const baseUrl = process.env.LIVE_URL || `http://localhost:${process.env.PORT || 5000}`;
      const imageUrl = `${baseUrl}/uploads/questions/describe_image/${filename}`;

      await Question.create({
        moduleType: 'speaking',
        questionType: 'Describe Image',
        content: q.title,
        imageUrl: imageUrl,
        keywords: q.keywords
      });
      
      console.log(`Saved Describe Image question ${i+1}`);
    }

    console.log('Successfully seeded 10 Describe Image questions!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDescribeImages();
