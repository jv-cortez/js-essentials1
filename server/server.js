const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

const io = require('socket.io')(server);

let messages = [];
console.log('before sending messages:', messages);                

io.on('connection', function (socket){
    socket.on('message', function (msg){
        messages.push(msg);
        console.log('after sending messages:', messages);
        console.log('should have all the messages', messages);
        io.emit('message', msg);
    });
});

server.listen(8080, function() {
    console.log('chat server is listening at 8080');
})