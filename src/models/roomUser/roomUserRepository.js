const RoomUser = require("./roomUser");

const roomUserRepository = {
    create: async (data) => {
        try {
            const result = await RoomUser.create(data);
            if(result) return {success: true}
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    }
}

module.exports = roomUserRepository;