// server.js

const http = require('http');
const WebSocket = require('ws');

// require("dotenv").config();

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// console.log(process.env.DB_PORT)
// console.log(process.env.DB_NAME);
// require("./db/configDB");



// const messageContentService = require('./services/messageContentService');
// const messageService = require('./services/messageService');
// const seenService = require('./services/seenService');
// const socketService = require('./services/socketService');


// Xử lý yêu cầu handshake của WebSocket và chấp nhận mọi nguồn


server.on('upgrade', (request, socket, head) => {
    // Thiết lập tiêu đề CORS để cho phép tất cả các origin
    socket.write('HTTP/1.1 101 Switching Protocols\r\n' +
                 'Upgrade: websocket\r\n' +
                 'Connection: Upgrade\r\n' +
                 'Sec-WebSocket-Accept: ' + acceptKey + '\r\n' +
                 'Access-Control-Allow-Origin: *\r\n' + // Cho phép tất cả các origin
                 '\r\n');
    socket.pipe(socket); // Truyền dữ liệu giữa client và server
});

wss.on("connection", (ws) => {
    console.log("A user connected ", ws.id);

    // add socketid to db
    // ws.on('message', async (userInfo) => {
    //     console.log(ws.id + ' with info : ');
    //     console.log(userInfo);
    //     if (userInfo) {
    //         const data = {
    //             socketid: ws.id,
    //             user_id: userInfo.id
    //         }
    //         try {
    //             let result = await socketService.create(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    // });

    // // Real-time event handling here

    // ws.on("close", () => {
    //     console.log("User disconnected");
    //     try {
    //         socketService.delete(ws.id);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // });

    // // join room
    // ws.on('join-room', (room) => {
    //     ws.join(room);
    //     console.log(`User ${ws.id} joined room: ${room}`);
    // });

    // ws.on("room-message", async (data) => {
    //     // console.log(data);
    //     const { room, message, user, type, userIds } = data;
    //     // insert message into database
    //     // console.log(user);
    //     let dataInsertMessage = {
    //         'conversation_id': room,
    //         'user_id': user.id,
    //         'reply_to': null,
    //         'type': type
    //     }
    //     let message_id = await messageService.create(dataInsertMessage);
    //     let dataContent = message.map((content) => { return { "content": content, message_id: message_id.success } })
    //     await messageContentService.createMultiple(dataContent);

    //     // let dataInsertSeen = {
    //     //   user_id: user.id,
    //     //   message_id: message_id.success,
    //     //   conversation_id: room
    //     // }

    //     let data_mess = {
    //         sender: ws.id,
    //         id: message_id.success,
    //         content_messages: [...dataContent],
    //         type: type,
    //         user: user,
    //         room_id: room,
    //         sent: '08:30 15/12/2023'
    //     }

    //     wss.to(room).emit(`room-message`, { data_mess });

    //     for (let index = 0; index < userIds.length; index++) {
    //         const user = await socketService.getByUserId(userIds[index].id);
    //         // console.log(user);
    //         for (let index = 0; index < user.length; index++) {
    //             wss.to(user[index].socketid).emit(`notify-room-message`, { data_mess });

    //         }


    //     }

    // })

    // ws.on('leave-room', (room) => {
    //     ws.leave(room);
    //     console.log(`User ${ws.id} left room: ${room}`);
    // });

    // ws.on('seen', async (data) => {
    //     // console.log(data);
    //     if (!data) return;
    //     let resultInsert = await seenService.create(data);
    //     // console.log(result);
    //     let resultGetUserSeen = await seenService.getAllUserSeen(data.conversation_id); //
    //     wss.to(data.conversation_id).emit('seen', resultGetUserSeen);
    // })
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
