const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./helper/data.js');
const data = db.data;


app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/html'));

app.get('/users',function(req,res){
    res.send(data);
})
app.post('/users',function(req,res){
    req.body.id = Math.floor(Date.now());
    console.log(req.body);
    data.users.push(req.body);
    res.send('POST SEND');
})
app.get('/users/:id',function(req,res){
    res.send(db.getRow(req.params.id));
})
app.put('/users/:id',function(req,res){
    let temp = db.getId(data.users,req.params.id);
    if(temp != -1){
        req.body.id = req.params.id;
        data.users[temp] = req.body;
        res.write('Updated id ',req.params.id);
    }else{
        res.write('Id not found');
    }
    res.send();
})
app.delete('/users/:id',function(req,res){
    let temp = db.getId(data.users,req.params.id);
    if(temp != -1){
        data.users.splice(temp,1);
        res.write('Deleted id ',req.params.id);
    }else{
        res.write('Id ',req.params.id,' not found');
    }
    res.send();
})

app.listen(3000);
console.log('Server running at localhost:3000');
