const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || '8000';

app.use(express.static(path.join(__dirname, 'build')));

app.set('port', port);

app.listen(port, () => console.log(`Running on localhost:${port}`));