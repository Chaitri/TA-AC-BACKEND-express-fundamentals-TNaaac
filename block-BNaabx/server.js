const express = require('express');

const app = express();

function logger(req, res, next) {
    let time = new Date().toLocaleTimeString().split(' ')[0];
    console.log(req.method, req.url, time);
    next();
}

function processJson(req, res, next) {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', () => {
        let parsedData = JSON.parse(data);
        req.body = parsedData;
        next();
    });
}

function processStaticFiles(req, res, next) {
    let filePath = __dirname + '/public' + req.url;
    res.sendFile(filePath);
}

app.use(logger);
app.use(processJson);
app.use(processStaticFiles);

app.post('/', (req, res) => {
    res.json(req.body);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})