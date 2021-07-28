const https = require('https');
const fs = require('fs');

require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app)

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

startServer();
