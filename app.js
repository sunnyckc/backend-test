const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync('/path/to/privkey.pem'),
  cert: fs.readFileSync('/path/to/fullchain.pem')
};

https.createServer(options, app).listen(443);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen( 80 , () => {
    console.log('Example app listening on port 80!');
});
