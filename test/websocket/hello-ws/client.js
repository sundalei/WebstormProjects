'use strict';

const WebSocket = require('ws');

let count = 0;

const ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
    count++;
    if(count > 3) {
        ws.send('Goodbye');
        ws.close();
    } else {
        setTimeout(() => {
            ws.send(`Hello, I'm Mr No.${count}!`);
        }, 1000);
    }
});

ws.on('close', function () {
    console.log('[CLIENT] disconnected');
});