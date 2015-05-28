var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/app/css')));
app.use('/js', express.static(path.join(__dirname, '/app/js')));
app.set('port', (process.env.PORT || 3001))

app.get('/', function(request, response) { 
  response.render("index");
});

http.createServer(app).listen(app.get('port'), function(request, response) {
  console.log("Node app is running at localhost:" + app.get('port'));
});
