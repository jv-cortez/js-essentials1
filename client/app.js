const socket = io();

$('form').on('submit', function () { 
    let name = $('#initials').val();
    let text = $('#message').val();
    socket.emit('message', name + ' says: ' + text);
    $('#initials').val(name);  
    $('#message').val('');
    return false;
});

socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');    
});

