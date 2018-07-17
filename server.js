const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
// var io = require('socket.io').listen(server);


server.listen(port, () => {
    console.log('Server started on port '+ port);
})

// io.sockets.on('connection', function(socket){
//     console.log('Socket connected');
//     // Socket event for new message
//       socket.emit('newMessage', newMessage);
//   });