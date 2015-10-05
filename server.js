var net = require('net');
var solver = require('./solver');

var port = 5555;

net.createServer(function (socket) {
  socket.setEncoding("utf8");
  socket.write("Connected to math server!\n");

  socket.on('data', function (data) {
    socket.write(solver.solve(data) + "\n");
  });

}).listen(port);

process.stdout.write("Server running on port " + port + "\n");
