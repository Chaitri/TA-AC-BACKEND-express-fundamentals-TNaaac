let express = require('express');

let app = express();
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello! =D');
})