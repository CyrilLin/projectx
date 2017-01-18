let io = require('socket.io');
let ot = require('ot');


class SocketService {
    constructor(server) {
        SocketService.init(server);
    }

    static init(server) {
        io = io.listen(server);
    }

    start() {
        io.on('connection', socket =>{
            console.log("New Client connected...");
            socket.emit('welcome', {data: 'welcome!'});

            editorServer.addClient(socket);
            editorServer.setName(socket, socket.id);
            socket.mayEdit = true;

            socket.on('disconnect', () => console.log('A Client disconnected...'));
        });
    }
}

let editorServer = new ot.EditorSocketIOServer('welcome', [], 'demo', (socket, cb) => cb(socket.mayEdit));
module.exports = SocketService;
