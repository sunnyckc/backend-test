import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! This is version 1');
});

app.listen( 80 , () => {
    console.log('Example app listening on port 80!');
});
