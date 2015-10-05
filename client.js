var net = require('net')

var client = new net.Socket();
client.connect(5555, '127.0.0.1', function () {
  process.stdout.write("Connected to server\n");
  var i = 1;
  // ~4 requests/second
  setInterval(function () {
    var valueToSend = randomInt().toString() + randomOp() + randomInt().toString() + "\n";
    process.stdout.write("Sending request #" + i + "  to server: " + valueToSend);
    client.write(valueToSend);
    i++;
  }, 250);
});

client.on('data', function (data) {
  process.stdout.write("Recieved Response: " + data.toString());
});

client.on('close', function () {
  process.stdout.write("Remote host closed the connection\n");
});

function randomInt() {
  return Math.floor(Math.random() * 100) + 1
}

function randomOp() {
  var r = Math.floor(Math.random() * 4) + 1;
  switch (r) {
    case 1:
      return "+";
    case 2:
      return "-";
    case 3:
      return "*";
    case 4:
      return "/";
    default:
      return "+";
  }
}
