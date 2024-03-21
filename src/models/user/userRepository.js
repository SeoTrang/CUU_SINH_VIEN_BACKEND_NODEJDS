const { Op } = require('sequelize');
const User = require("./user");
const userRepository = {
    create: async (data) => {
        try {
            let result = await User.create(data);
            if(result?.id) return true;
            throw new Error('Could not create');
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    },
    findByPhone: async (data) => {
        try {
            const user = await User.findOne({
                where: {
                    phone: data
                }
              });

              if(user) return user;
              return false;
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    },
    findById: async (id) => {
        try {
            const user = await User.findByPk(id);

              if(user) return  user;
              return false;
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    },

    search: async(search) => {
        try {
            const user = await User.findAll({
                attributes:['id','user_name','phone','avatar'],
                where:{
                    [Op.or]: [
                        {
                          user_name: {
                            [Op.like]: `%${search}%`,
                          },
                        },
                        {
                          phone: search,
                        },
                      ],
                }
            });

            if(user) return {success: user};
            return false;
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    },

    getAllUsers: async () => {
        try {
            let result = await User.findAll();
            if(result) return {success: result};
            
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    }
}

module.exports = userRepository;