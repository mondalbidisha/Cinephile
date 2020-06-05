const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, 'build')));

app.set('port', port);

server.listen(port, () => console.log(`Running on localhost:${port}`));