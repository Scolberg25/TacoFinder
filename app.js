const express = require('express');
const app = express();
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/info.html');
});

server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});