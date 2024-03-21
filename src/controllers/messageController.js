const messageContentService = require("../services/messageContentService");
const messageService = require("../services/messageService");

const messageController = {
    create: async(req, res) => {
        try {
            const tempData = req.body.data;
            console.log(req.body.decode);
            console.log(tempData);
            // return res.json('hello world')
            if(!tempData) return res.status(400).json('missing data');
            
            const data = {
                'conversation_id': tempData.conversation_id,
                'user_id': req.body.decode.id,
                'reply_to': tempData.reply_to,
                'type': tempData.type
            }

            const message_id = await messageService.create(data);
            if(!message_id.success) throw new Error(message_id.error)

            const listContent = tempData.content;
            let dataContent = listContent.map((content) => {return {"content": content, message_id:message_id.success }})
            let result = await messageContentService.createMultiple(dataContent);
            // if(!result.success) throw new Error(result.error);
            return res.status(200).json("success");
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getMessageFromConversation: async(req,res) => {
        try {
            const conversation_id = req.params.conversation_id;
            const messages = await messageService.getMessageFromConversation(conversation_id);
            messages.success.sort((a,b) => a.id - b.id);
            
            return res.status(200).json(messages.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    },
    getMessageReverseFromConversation: async(req,res) => {
        try {
            const conversation_id = req.params.conversation_id;
            const messages = await messageService.getMessageReverseFromConversation(conversation_id);
            
            return res.status(200).json(messages.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error});
        }
    }
}

module.exports = messageController;