const PostContent = require("./postContent");

const postContentRepository = {
    createMultiple: async (data) => {
        try {
            let result = await PostContent.bulkCreate(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    deleteContentsByPostId: async (post_id) => {
        try {
            const result = await PostContent.destroy({
                where: {
                    post_id: post_id
                }
            });
            if (result) {
                return { success: true };
            } 
            throw new Error('Không tìm thấy content để xóa')
        } catch (error) {
            console.log(error);
            return { error: error };
        }
    },

    getByPostId: async (post_id) => {
        try {
            let result = await PostContent.findAll({
                where:{
                    post_id: post_id
                }
            });
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    }
}

module.exports = postContentRepository;