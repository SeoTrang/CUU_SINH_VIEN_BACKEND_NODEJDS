const OTPModel = require("./OTP");
const { Op } = require("sequelize");

const OTPRepository = {
    create: async (data) => {
        try {
            const result = await OTPModel.create(data);
            if (result) return { success: result };
        } catch (error) {
            console.log(error);
            return { error: error.message };
        }
    },

    getByEmailAndNotExpired: async (data) => {
        try {
            const {email, otp} = data;
            const result = await OTPModel.findOne({
                where: {
                    email: email,
                    otp: otp,
                    exp: {
                        [Op.gt]: new Date() // Sử dụng toán tử so sánh của Sequelize
                    }
                }
            });
            if (result) return { success: result };
            return { error: "OTP not found or expired" };
        } catch (error) {
            console.log(error);
            return { error: error.message };
        }
    },

    deleteOpt: async (data) => {
        try {
            const {email, otp} = data;
            const result = await OTPModel.destroy({
                where:{
                    email: email,
                    otp: otp
                }
            });
            if (result) return { success: result };
        } catch (error) {
            console.log(error);
            return { error: error.message };
        }
    }
}

module.exports = OTPRepository;
