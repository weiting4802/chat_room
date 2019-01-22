socket = io.connect('ws://localhost:3001');

let data = {
    name: 'Robby',
    msg: 'Hi~',
};

socket.emit('message', data);
