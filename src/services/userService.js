const userRepository = require("../models/user/userRepository");

const userService = {
    create: async(data)=> {
        return await userRepository.create(data);
    },
    findByPhone: async(data)=> {
        return await userRepository.findByPhone(data);
    },
    findById: async(id) => {
        return await userRepository.findById(id);
    },
    search: async(user_name) => {
        return await userRepository.search(user_name);
    },

    getAllUsers: async() => {
        return await userRepository.getAllUsers();
    }

    
    
}

module.exports = userService;