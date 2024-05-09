const RefreshTokenRepository = require("../models/refreshToken/refreshToken.repository")

const refreshTokenService = {
    create: async (data) => {
        return await RefreshTokenRepository.create(data);
    },
    delete: async (refreshToken) => {
        return await RefreshTokenRepository.delete(refreshToken);
    }
}

module.exports = refreshTokenService;