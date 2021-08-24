const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.use(logger('dev'));
app.use(cookieParser());

app.use('/about', (req, res, next) => {
    res.cookie('username', 'Jane_A');
    next();
});

app.use((req, res, next) => {
    console.log('Cookies from request: ', req.cookies);
    next();
});

app.get('/', (req, res) => {
    res.send('Server is Up!');
})