var net = require('net');
var solver = require('./solver');

net.createServer(function (socket) {
  socket.setEncoding("utf8");
  socket.write("Connected to math server!\n");

  socket.on('data', function (data) {
    socket.write(solver.solve(data) + "\n");
  });

}).listen(5555);

process.stdout.write("Server running on port 5555\n");
