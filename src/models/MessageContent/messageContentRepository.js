const MessageContent = require("./messageContent");

const messageContentRepository = {
    create: async (data) => {
        try {
            const result = await MessageContent.create(data);
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    createMultiple: async (data) => {
        try {
            // console.log(data);
            const result = await MessageContent.bulkCreate(data);
            if(result) return {success: result.id};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
}

module.exports = messageContentRepository;