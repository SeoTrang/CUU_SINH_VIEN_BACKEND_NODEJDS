const User = require("../user/user");
const Seen = require("./seen");

const seenRepository = {
    create: async(data) => {
        try {
            let result = null;
            let existData = await Seen.findOne({
                where: {
                    user_id: data.user_id,
                    conversation_id: data.conversation_id
                }
            });

            if (existData) {
                // Nếu dữ liệu đã tồn tại, cập nhật trường message_id
                existData.message_id = data.message_id;
                await existData.save();
                result = existData;
            } else {
                // Nếu dữ liệu không tồn tại, tạo mới
                result = await Seen.create(data);
            }

            if (result) return result;
        } catch (error) {
            console.log(error);
        }
    },
    getAllUserSeen: async(conversation_id) => {
        try {
            let result = await Seen.findAll({
                where:{
                    conversation_id: conversation_id
                },
                include:[
                    {
                        model: User
                    }
                ]
            })

            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = seenRepository;
