const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/blog.html', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
});

app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio.html', (req, res) => {
    res.sendFile(__dirname + '/portfolio.html');
});

app.get('/pricing.html', (req, res) => {
    res.sendFile(__dirname + '/pricing.html');
});

app.get('/services.html', (req, res) => {
    res.sendFile(__dirname + '/services.html');
});

app.get('/single.html', (req, res) => {
    res.sendFile(__dirname + '/single.html');
});

app.use((req, res, next) => {
    res.sendFile(__dirname + '/404error.html');
});

app.use((err, req, res, next) => {
    res.send(err);
});