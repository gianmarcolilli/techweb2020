const express = require('express');
const https = require('https');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log('server partito porta 3000');
});

app.get('/',function(request,response){
  response.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response){
  var persone = request.body.persone;
  var eta = request.body.eta;

  response.write('<h1>il numero di persone è '+persone+' di età '+eta+'<br></h1>');
  response.send();
});
