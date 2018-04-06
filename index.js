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
    }
    ]
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/html'));

app.get('/users',function(req,res){
    console.log(req.body);
    res.send('GET SEND');
})
app.post('/users',function(req,res){
    req.body.id = data.users.length + 1;
    console.log(req.body);
    data.users.push(req.body);
    res.send('POST SEND');
    console.log(data);
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
console.log('Server running at localhost:3000');
