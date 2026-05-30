const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Bladeoski Dashboard</title>
      <style>
        body { font-family: Arial, sans-serif; background: #0f172a; color: #e2e8f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .card { background: #1e293b; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
        h1 { color: #38bdf8; }
        .badge { background: #0ea5e9; padding: 4px 12px; border-radius: 99px; font-size: 12px; margin: 4px; display: inline-block; }
        .status { color: #4ade80; font-size: 14px; margin-top: 1rem; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Bladeoski Dashboard</h1>
        <p>Running inside a Docker container on AWS EC2</p>
        <div>
          <span class="badge">Docker</span>
          <span class="badge">Node.js</span>
          <span class="badge">Express</span>
          <span class="badge">AWS EC2</span>
        </div>
        <p class="status">✅ Server is running on port 3000</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Server running on port 3000'));