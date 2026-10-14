const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Serve the raw OpenAPI JSON specification
router.get('/openapi.json', (req, res) => {
  const specPath = path.join(__dirname, '../docs/openapi.json');
  if (fs.existsSync(specPath)) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(specPath);
  } else {
    res.status(404).json({ message: 'OpenAPI specification not found' });
  }
});

// Serve Scramble-styled documentation (Powered by Stoplight Elements - the exact engine behind Scramble)
router.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>PTE Tool API Documentation (Scramble Style)</title>
    <!-- Stoplight Elements (Scramble UI Engine) -->
    <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@stoplight/elements/styles.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      :root {
        --font-prose: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        --font-code: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      }
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #0f172a;
        font-family: var(--font-prose);
        color: #f8fafc;
        overflow: hidden;
      }
      .docs-header {
        height: 54px;
        background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      }
      .docs-header .brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .badge-scramble {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: #ffffff;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        padding: 3px 8px;
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .docs-header h1 {
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        color: #f1f5f9;
        letter-spacing: -0.2px;
      }
      .docs-header .links {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .nav-btn {
        background: rgba(255, 255, 255, 0.08);
        color: #cbd5e1;
        font-size: 12px;
        font-weight: 500;
        padding: 6px 12px;
        border-radius: 6px;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .nav-btn:hover {
        background: rgba(255, 255, 255, 0.16);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.25);
      }
      .nav-btn.primary {
        background: #3b82f6;
        color: #ffffff;
        border-color: #60a5fa;
      }
      .nav-btn.primary:hover {
        background: #2563eb;
      }
      .docs-container {
        flex: 1;
        position: relative;
        height: calc(100vh - 54px);
      }
      elements-api {
        width: 100%;
        height: 100%;
        display: block;
      }
    </style>
  </head>
  <body>
    <header class="docs-header">
      <div class="brand">
        <span class="badge-scramble">⚡ Scramble Engine</span>
        <h1>PTE Tool Interactive Backend API Reference</h1>
      </div>
      <div class="links">
        <a href="/api-docs/openapi.json" target="_blank" class="nav-btn">
          <span>{ } Raw OpenAPI</span>
        </a>
        <a href="/docs/scalar" class="nav-btn">
          <span>Scalar UI</span>
        </a>
        <a href="/docs/swagger" class="nav-btn">
          <span>Swagger UI</span>
        </a>
      </div>
    </header>
    <main class="docs-container">
      <elements-api
        apiDescriptionUrl="/api-docs/openapi.json"
        router="hash"
        layout="sidebar"
        tryItCredentialsPolicy="include"
      />
    </main>
  </body>
</html>`);
});

// Serve modern Scalar API Documentation
router.get('/scalar', (req, res) => {
  res.send(`<!doctype html>
<html>
  <head>
    <title>PTE Tool API Documentation - Scalar</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { margin: 0; padding: 0; }
    </style>
  </head>
  <body>
    <script id="api-reference" data-url="/api-docs/openapi.json"></script>
    <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
  </body>
</html>`);
});

// Serve classic Swagger UI
router.get('/swagger', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PTE Tool API - Swagger UI</title>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
  <style>
    body { margin: 0; padding: 0; background-color: #fafafa; }
    .topbar { display: none; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js"></script>
  <script>
    window.onload = () => {
      window.ui = SwaggerUIBundle({
        url: '/api-docs/openapi.json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout"
      });
    };
  </script>
</body>
</html>`);
});

module.exports = router;
