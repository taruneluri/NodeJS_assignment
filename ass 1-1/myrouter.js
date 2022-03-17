var express=require('express');
var router=express.Router();
var pathone = __dirname + '/pages/sample1.html';
var pathtwo = __dirname + '/pages/sample2.html';
var paththree = __dirname + '/pages/sample3.html';
var pathhome = __dirname + '/pages/index.html';
router.get('/',function(req,res){
    res.sendFile(pathhome);
});
router.get('/sample1',function(req,res){
    res.sendFile(pathone);
});
router.get('/sample2',function(req,res){
    res.sendFile(pathtwo);
});
router.get('/sample3',function(req,res){
    res.sendFile(paththree);
});
module.exports=router;