const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, 'client_logo' + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Get current logo
router.get('/logo', (req, res) => {
  const dir = path.join(__dirname, '../uploads');
  const files = ['client_logo.png', 'client_logo.jpg', 'client_logo.jpeg', 'client_logo.svg'];
  let found = null;
  for (let file of files) {
    if (fs.existsSync(path.join(dir, file))) {
      found = file;
      break;
    }
  }
  
  if (found) {
    res.sendFile(path.join(dir, found));
  } else {
    // Send default logo
    const defaultPath = path.join(dir, 'default_logo.jpg');
    if (fs.existsSync(defaultPath)) {
        res.sendFile(defaultPath);
    } else {
        res.status(404).send('Logo not found');
    }
  }
});

// Upload new logo
router.post('/logo', upload.single('logo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Please upload a file' });
  }
  
  // Clean up older logos with different extensions
  const dir = path.join(__dirname, '../uploads');
  const files = ['client_logo.png', 'client_logo.jpg', 'client_logo.jpeg', 'client_logo.svg'];
  for (let file of files) {
    if (file !== req.file.filename && fs.existsSync(path.join(dir, file))) {
      fs.unlinkSync(path.join(dir, file));
    }
  }

  res.json({ message: 'Logo uploaded successfully', logoUrl: `http://localhost:5000/api/settings/logo?t=${Date.now()}` });
});

module.exports = router;
