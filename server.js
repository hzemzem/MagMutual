var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './routes/routes'))(app);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, function() {
    console.log('app is listening on PORT: ' + PORT);
});