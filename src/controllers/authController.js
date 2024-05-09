const userService = require('../services/userService');
const { generateAccesstoken, generateRefreshtoken } = require("../auth/auth");
const refreshTokenService = require("../services/refreshTokenService");
const bcrypt = require('../util/bcrypt');
const addressService = require('../services/addressService');
const autController = {
    register: async (req,res) => {
        try {
            addressService.getAll();
            // console.log(req.body);
            let user = req.body.data;
            if(!user) return res.status(400).json('missing data')
            if(user.phone){
                let user_temp = await userService.findByPhone(user.phone);
                // console.log(user_temp);
                if(user_temp) return res.status(409).json("Phone đã tồn tại")
            }

            // console.log("test 123");
            const listAvatar = [
                '/img/avatar_default/avatar_default.jpg',
                '/img/avatar_default/avatar_1.jpg',
                '/img/avatar_default/avatar_2.jpg',
                '/img/avatar_default/avatar_3.jpg',
                '/img/avatar_default/avatar_4.jpg',
                '/img/avatar_default/avatar_5.jpg',
                '/img/avatar_default/avatar_6.jpg',
                '/img/avatar_default/avatar_7.jpg',
                '/img/avatar_default/avatar_8.jpg',
                '/img/avatar_default/avatar_9.jpg',
                '/img/avatar_default/avatar_10.jpg',
                '/img/avatar_default/avatar_11.jpg',
                '/img/avatar_default/avatar_12.jpg',
                '/img/avatar_default/avatar_13.jpg',
                '/img/avatar_default/avatar_14.jpg',
                '/img/avatar_default/avatar_15.jpg',
                '/img/avatar_default/avatar_16.jpg',
                '/img/avatar_default/avatar_17.jpg',
                '/img/avatar_default/avatar_18.jpg',
                '/img/avatar_default/avatar_19.jpg',
                '/img/avatar_default/avatar_20.jpg',
                '/img/avatar_default/avatar_21.jpg',
                '/img/avatar_default/avatar_22.jpg',
                '/img/avatar_default/avatar_23.jpg',
                '/img/avatar_default/avatar_24.jpg',
            ]
            // Generate a random index within the range of the array length
            const randomIndex = Math.floor(Math.random() * listAvatar.length);

            // Get the random avatar URL using the random index
            const randomAvatar = listAvatar[randomIndex];

            const encodePass = await bcrypt.hash(user?.pass);

            user.pass = encodePass;
            user.avatar = randomAvatar;

            const result = await userService.create(user);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when insert to database');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    login: async (req, res) => {
        try {
            const data = req.body.data;
            const user = await userService.findByPhone(data.phone);
            if(!user) {
                return res.status(404).json("not found");
            }
            if(!await bcrypt.compare(data.pass,user.pass)) return res.status(404).json('phone or pass invalid');
            let accessToken;
            let refreshToken;
            if (user) {
                accessToken = await generateAccesstoken(user);
                refreshToken = await generateRefreshtoken(user);
            }
            if(refreshToken && accessToken){
                const data = {
                    refreshToken: refreshToken,
                    user_id: user.id
                }
                const resultAddRefreshToken = refreshTokenService.create(data);
                if(resultAddRefreshToken) return res.status(200).json({
                    refreshToken:refreshToken,
                    accessToken:accessToken
                })
            }
            return res.status(500).json('server error');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    },
    logout: async (req,res) => {
        try {
            const refreshToken = req.headers.authorization.split(' ')[1];
            // console.log(refreshToken);
            if(!refreshToken) return res.status(403).json('unauthorized')
            const result = await refreshTokenService.delete(refreshToken);
            if(result) return res.status(200).json('success');
            return res.status(400).json('error when deleting refresh token');
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error');
        }
    }
}

module.exports = autController;