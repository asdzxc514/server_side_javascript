var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}));

app.locals.pretty = true; // pug 템플릿 소스보기에서 정렬되서 보게해줌
app.set('views', './views_file');  // views_file 으로 설정
app.set('view engine', 'pug');  // pug 템플릿 엔진 세팅과 express를 연결하는 코드



app.get('/topic/new', function(req, res){
    res.render('new');
});

app.get('/topic', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log('err');
            res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files});
    });
    
});

app.get('/topic/:id', function(req, res){
    var id = req.params.id;

    fs.readdir('data', function(err, files){
        if(err){
            console.log('err');
            res.status(500).send('Internal Server Error');
        }
        fs.readFile('data/'+ id, 'utf8', function(err, data){
            if(err){
                console.log('err');
                res.status(500).send('Internal Server Error');
            }
            res.render('view', {topics:files, title:id, description:data});
        });
    });
});

app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/' + title, description, function(err){
        if(err){
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
    
});

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});