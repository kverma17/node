const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/html'));

app.get('/users',function(req,res){
    console.log(req.body);
    res.send('GET SEND');
})
app.post('/users',function(req,res){
    console.log(req.body);
    res.send('POST SEND');
})
app.get('/users/:id',function(req,res){
    console.log(req.params);
    res.send('GET SEND');
})
app.put('/users/:id',function(req,res){
    console.log(req.params);
    res.send('GET SEND');
})
app.delete('/users/:id',function(req,res){
    console.log(req.params);
    res.send('GET SEND');
})

app.listen(3000);