// socketManager.js

const messageContentService = require("../services/messageContentService");
const messageService = require("../services/messageService");
const seenService = require("../services/seenService");
const socketService = require("../services/socketService");

const socketManager = (io) => {
    io.on("connection", (socket) => {
      console.log("A user connected ",socket.id);

      // add socketid to db
      socket.on('user-info', async (userInfo) => {
        console.log(socket.id+ ' with info : ');
        console.log(userInfo);
        if(userInfo){
          const data = {
            socketid : socket.id,
            user_id: userInfo.id
          }
          try {
            let result = await socketService.create(data);
          } catch (error) {
            console.log(error);
          }
        }
        
      });
  
      // Real-time event handling here
  
      socket.on("disconnect", () => {
        console.log("User disconnected");
          try {
            socketService.delete(socket.id);
          } catch (error) {
            console.log(error);
          }
        
      });

      // join room
      socket.on('join-room', (room) => {
        socket.join(room+"");
        console.log(`User ${socket.id} joined room: ${room}`);
      });

      socket.on("delete-message",async (data)=>{
        const {message_id, room, userId} = data;
        io.to(room+"").emit(`delete-message`, JSON.parse(JSON.stringify({ message_id })));

        const userSocketid = await socketService.getByUserId(userId);
        const lastestMessageRoom = await messageService.getLatestMessageByConversationId(room);
        console.log(userSocketid);
        for (let index = 0; index < userSocketid.length; index++) {
          io.to(userSocketid[index].socketid).emit(`update-room-message`, { lastestMessageRoom, room: room });
          
        }
      })

      socket.on("room-message",async (data)=>{
        console.log("data sent from client : ");
        console.log(data);
        const { room, message, user, type, userIds } = data;
        // insert message into database
        // console.log(user);
        let dataInsertMessage = {
          'conversation_id': room,
          'user_id': user.id,
          'reply_to': null,
          'type': type
        }
        
        let message_id = await messageService.create(dataInsertMessage);
        let dataContent = message.map((content) => {return {"content": content, message_id:message_id.success,"createdAt": "2024-04-24T08:33:09.000Z","updatedAt": "2024-04-24T08:33:09.000Z" }})
        await messageContentService.createMultiple(dataContent);

        // let dataInsertSeen = {
        //   user_id: user.id,
        //   message_id: message_id.success,
        //   conversation_id: room
        // }

        

        let data_mess = {
          sender: socket.id, 
          id: message_id.success,
          content_messages: [...dataContent],
          type: type,
          user: user,
          room_id: room,
          reply_to: null,
          createdAt: "2024-04-24T08:33:09.000Z",
          updatedAt: "2024-04-24T08:33:09.000Z",
          conversation_id: room,
          user_id: user?.id*1

        }

        // console.log("data_mess : ");
        // console.log(data_mess);

        // console.log('to room : ');
        // console.log(room+"");
       
        io.to(room+"").emit(`room-message`, JSON.parse(JSON.stringify({ ...data_mess })));

        for (let index = 0; index < userIds.length; index++) {
          const user = await socketService.getByUserId(userIds[index].id);
          console.log(user);
          for (let index = 0; index < user.length; index++) {
            io.to(user[index].socketid).emit(`notify-room-message`, { ...data_mess });
            
          }
          
          
        }
        
      })

      socket.on('leave-room', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room: ${room}`);
      });

      socket.on('seen',async(data)=>{
        // console.log(data);
        if(!data) return;
        let resultInsert = await seenService.create(data);
        // console.log(result);
        let resultGetUserSeen = await seenService.getAllUserSeen(data.conversation_id); //
        io.to(data.conversation_id).emit('seen',resultGetUserSeen);
      })




    });
  };
  
  module.exports = socketManager;
  