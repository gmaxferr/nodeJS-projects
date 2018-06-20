const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/about', (req, res) => {

    res.send('About Page');

});


app.get('/bad', (req, res) => {

    res.send({
        error: "Bad Request."
    })
})

app.listen(8080);