var express = require('express');
var app=express();
const myrouter = require('./myrouter');
app.use(express.static('pages'));
app.get('/sample1',myrouter);
app.get('/sample2',myrouter);
app.get('/sample3',myrouter);
app.get('/',myrouter);
app.listen(4000);