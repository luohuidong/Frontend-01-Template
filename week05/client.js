const net = require('net')

const client = net.createConnection({ 
  host: '127.0.0.1',
  port: 8088 
}, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('GET / HTTP/1.1\r\n')
  client.write('Content-Type: application/x-www-form-urlencoded\r\n')
  client.write('Content-Length: 11\r\n')
  client.write('\r\n')
  client.write('name=winter')
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});