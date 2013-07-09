var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data){
      if (err) throw err;
      var buffer = new Buffer(16);
      buffer.write(data, "utf-8");
      response.send(data.toString());
  });
  // response.send('Hello world 2!');     
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
