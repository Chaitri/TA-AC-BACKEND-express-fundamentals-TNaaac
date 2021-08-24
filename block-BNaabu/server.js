const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.use((req, res, next) => {
    if(req.url === '/admin') next('You are unauthorized to view this page!');
    else next();
});

app.get('/', (req, res) => {
    res.send('Hey, you\'ve reached Index Page');
});

app.get('/about', (req, res) => {
    res.send('Hey, you\'ve reached About Page');
});

app.use((req, res, next) => {
    res.send('404: Page Not Found');
});

app.use((err, req, res, next) => {
    res.send(err);
});