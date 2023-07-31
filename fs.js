const fs = require('fs');
var http = require('http');

fs.readFile('input.txt', function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('Async data is' + data.toString());
    }
});


var data = fs.readFileSync('input.txt');
console.log('Sync data is ' +  data.toString());
console.log('This is the end');


http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);