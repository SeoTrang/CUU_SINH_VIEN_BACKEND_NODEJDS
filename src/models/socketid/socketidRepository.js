const Socketid = require("./socketid");

const socketidRepository = {
    create: async (data) => {
        try {
            // Kiểm tra xem socketid đã tồn tại hay không
            const existingRecord = await Socketid.findOne({
              where: { socketid: data.socketid },
            });
      
            if (existingRecord) {
              // Nếu tồn tại, không chèn mới
            //   console.log('Socket ID already exists. Do something here if needed.');
              return existingRecord;
            }
      
            // Nếu không tồn tại, chèn mới
            const result = await Socketid.create(data);
            // console.log('Socket ID created:', result.toJSON());
            return result;
          } catch (error) {
            console.error('Error finding or creating socket ID:', error);
            throw error;
          }
    },
    delete: async (id) => {
        try {
            let result = await Socketid.destroy({
                where:{
                    socketid: id
                }
            })
            return true;
        } catch (error) {
            console.log(error);
        }
    },

    getByUserId: async (id) => {
        try {
            let result = await Socketid.findAll({
                where:{
                    user_id: id
                }
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = socketidRepository;