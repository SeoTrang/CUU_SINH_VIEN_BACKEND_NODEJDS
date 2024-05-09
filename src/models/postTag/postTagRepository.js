const User = require("../user/user");
const PostTag = require("./postTag");

const postTagRepository = {
    createMultiple: async (data) => {
        try {
            let result = await PostTag.bulkCreate(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    deleteUserTagsByPostId: async (post_id) => {
        try {
            const result = await PostTag.destroy({
                where: {
                    post_id: post_id
                }
            });
            if (result) {
                return { success: true };
            } 
            throw new Error('Không tìm thấy user tags để xóa')
        } catch (error) {
            console.log(error);
            return { error: error };
        }
    },
    getUserIdByPostId : async (post_id) =>{
        try {
            let result =  await PostTag.findAll({
                where:{
                    post_id: post_id
                },
                attributes: [],
                include:[
                    {
                        model: User
                    }
                ]
            });
            // console.log('posttag');
            // console.log(result);
            const test = result.map((value)=> {
                return {
                    ...value.user.dataValues
                }
            })

            // console.log(test);
            if(result) return {success: test}
            return null;
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    
}

module.exports = postTagRepository;