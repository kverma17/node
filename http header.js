console.log('Hello World!');

const http = require('http');
const data = {name:'Karan',age:23};
const site = http.createServer(function (req,res){
    console.log(req.headers);
    console.log('in server!');
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(data));
    res.end();
})

site.listen(3000);