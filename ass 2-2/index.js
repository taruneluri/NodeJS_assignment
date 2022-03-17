const express=require('express');
const session=require('express-session');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({secret:'123'}))
app.get('/home',function(req,res){
    if(req.session.visited)
    {
        res.sendFile(__dirname+'/home.html');
    }
    else{
        res.send('cant enter home without login');
    }
})
app.get('/',function(req,res){
    if(req.session.visited)
    {
        res.send('already loged in');
    }
    else{
        res.sendFile(__dirname+'/index.html');
    }
})
app.post('/loginreq',function(req,res){
    if(req.body.username=='tarun' && req.body.password=='123')
    {
        req.session.visited=true;
        res.redirect('/home')
    }
    else{
        res.write('invalid credentials');
    }
})
app.get('/logout',function(req,res){
    req.session.visited=false;
    res.sendFile(__dirname+'/index.html');
})
app.listen(5005);