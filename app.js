var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.locals.pretty = true;
app.set('views', './views');  // 기본값이기 때문에 생략가능
app.set('view engine', 'pug');  // pug 템플릿 엔진 세팅과 express를 연결하는 코드
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href="/topic/0">JavaScript</a><br>
        <a href="/topic/1">Nodejs</a><br>
        <a href="/topic/2">Express</a><br><br>
        ${topics[req.params.id]}
    `;
    res.send(output);
});

// get을 라우터(route) 라고 부르고, 하는일은 라우팅(routing)!
app.get('/', function(req, res){
    res.send('Hello home page!');
});

app.get('/form', function(req, res){
    res.render('form'); // 파일을 불러올땐 render
});

// form 에서 입력 받은 값 보여주기
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ' , ' + description);
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + ' , ' + description)
});

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id + ' , ' + req.params.mode)
});

app.get('/template', function(req, res){
    res.render('template', {time:Date(), title:'Pug'}); // 파일명 입력(확장자는 생략)
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

