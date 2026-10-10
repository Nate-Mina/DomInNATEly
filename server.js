import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Azure App Service assigns PORT via process.env.PORT (typically 8080 on Linux)
const PORT = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Check if the Vite production build exists. If not, build it automatically.
if (!fs.existsSync(indexPath)) {
  console.log('[azure-server] dist/index.html not detected. Running "npm run build"...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('[azure-server] Production build completed.');
  } catch (err) {
    console.error('[azure-server] Failed to run production build:', err);
  }
}

// Health check endpoint for Azure App Service probes & container pings
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from Vite dist directory
app.use(express.static(distPath, {
  maxAge: '1h',
  etag: true,
}));

// SPA fallback: Route all other GET requests to index.html
app.get('*', (req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(503).send(
      '<h1>Application build in progress</h1><p>Please refresh in a few moments.</p>'
    );
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[azure-server] Application listening on http://0.0.0.0:${PORT}`);
});
