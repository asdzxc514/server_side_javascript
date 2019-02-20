var express = require('express');
var app = express();
app.use(express.static('public'));

// get을 라우터(route) 라고 부르고, 하는일은 라우팅(routing)!
app.get('/', function(req, res){
    res.send('Hello home page!');
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/img.jpg"');
});

app.get('/login', function(req, res){
    res.send('Login please~');
});

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});

