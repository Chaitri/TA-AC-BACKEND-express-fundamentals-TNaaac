const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res) => {
    console.log(req.body);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
});

