const express = require('express');

const app = express();
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});

function logger(req, res, next) {
    console.log(`Url: ${req.url} , Method: ${req.method}`);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hi, there!');
})