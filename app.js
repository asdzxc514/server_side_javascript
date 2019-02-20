var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('views', './views');  // 기본값이기 때문에 생략가능
app.set('view engine', 'pug');  // pug 템플릿 엔진 세팅과 express를 연결하는 코드
app.use(express.static('public'));

app.get('/topic', function(req, res){
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var str = `
        <a href="/topic?id=0">JavaScript</a><br>
        <a href="/topic?id=1">Nodejs</a><br>
        <a href="/topic?id=2">Express</a>
    `;
    var outer = str + topics[req.query.id]
    res.send(output);
});

app.get('/template', function(req, res){
    res.render('template', {time:Date(), title:'Pug'}); // 파일명 입력(확장자는 생략)
});


// get을 라우터(route) 라고 부르고, 하는일은 라우팅(routing)!
app.get('/', function(req, res){
    res.send('Hello home page!');
});


app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title></title>
    </head>
    <body>
        <h1>Hello, Dynamic !</h1>
        <ul>${lis}</ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
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

