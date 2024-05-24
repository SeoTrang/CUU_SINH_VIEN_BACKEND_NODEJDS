const OTPRepository = require("../models/OTP/OTPRepository");

const OTPService = {
    create: async (data) => {
        return await OTPRepository.create(data);
    },

    getByEmailAndNotExpired: async (data) => {
        return await OTPRepository.getByEmailAndNotExpired(data);
    },

    deleteOpt: async (data) => {
        return await OTPRepository.deleteOpt(data);
    }
}

module.exports = OTPService;