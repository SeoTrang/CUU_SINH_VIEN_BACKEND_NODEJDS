const userRepository = require("../models/user/userRepository");

const userService = {
    create: async(data)=> {
        return await userRepository.create(data);
    },
    findByPhone: async(data)=> {
        return await userRepository.findByPhone(data);
    },
    findByEmail: async(data)=> {
        return await userRepository.findByEmail(data);
    },
    findById: async(id) => {
        return await userRepository.findById(id);
    },
    search: async(user_name) => {
        return await userRepository.search(user_name);
    },

    getAllUsers: async() => {
        return await userRepository.getAllUsers();
    },

    update: async(data,user_id) => {
        return await userRepository.update(data,user_id);
    },

    getImgLibrary: async(items_per_page,skip_items,user_id) => {
        return await userRepository.getImgLibrary(items_per_page,skip_items,user_id);
    },
    getMyImgLibrary: async(items_per_page,skip_items,user_id) => {
        return await userRepository.getMyImgLibrary(items_per_page,skip_items,user_id);
    },
    verifyEmail: async(user_id) => {
        return await userRepository.verifyEmail(user_id);
    },
    saveNewPass: async(data) => {
        return await userRepository.saveNewPass(data);
    }

    
    
}

module.exports = userService;