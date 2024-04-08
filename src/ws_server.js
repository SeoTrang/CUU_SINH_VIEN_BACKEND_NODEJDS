const { WebSocketServer } = require('ws');

const sockserver = new WebSocketServer({ noServer: true });

sockserver.on('connection', ws => {
    console.log('New client connected!'+ws.id);
    ws.send('connection established');
    
    ws.on('close', () => console.log('Client has disconnected!'));
    
    ws.on('message', data => {
        const message = JSON.parse(data);
        if (message.type === 'user-info') {
            console.log('User info:', message.data);
        }
    });

    ws.onerror = function () {
        console.log('websocket error');
    };
});

const httpServer = require('http').createServer();
httpServer.on('upgrade', (request, socket, head) => {
    sockserver.handleUpgrade(request, socket, head, (ws) => {
        sockserver.emit('connection', ws, request);
    });
});

httpServer.listen(8080, () => {
    console.log('WebSocket server is running on port 8080');
});
