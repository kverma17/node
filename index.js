const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = {
    "users":[{
        "user":"admin",
        "pass":"password",
        "id":1
    },{
        "user":"admin1",
        "pass":"password1",
        "id":2
    }]
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/html'));

app.get('/users',function(req,res){
    res.send(data);
})
app.post('/users',function(req,res){
    req.body.id = data.users.length + 1;
    console.log(req.body);
    data.users.push(req.body);
    res.send('POST SEND');
})
app.get('/users/:id',function(req,res){
    res.send(getRow(req.params.id));
})
app.put('/users/:id',function(req,res){
    let temp = data.users.indexOf(getRow(req.params.id));
    if(temp){
        req.body.id = req.params.id;
        data.users[temp] = req.body;
        res.write('Updated id ',req.params.id);
    }else{
        res.write('Id ',req.params.id,' not found');
    }
    res.send();
})
app.delete('/users/:id',function(req,res){
    console.log(req.params);
    let temp = data.users.indexOf(getRow(req.params.id));
    if(temp){
        data.users.splice(temp,1);
        res.write('Deleted id ',req.params.id);
    }else{
        res.write('Id ',req.params.id,' not found');
    }
    res.send();
})

app.listen(3000);
console.log('Server running at localhost:3000');

function getRow(id){
    for(let element of data.users){
        console.log(element);
        if(element.id == id){
            return element;
        }
    }
    return false;
}