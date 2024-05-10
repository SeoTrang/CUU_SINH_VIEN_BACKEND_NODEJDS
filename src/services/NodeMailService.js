const nodemailer = require("nodemailer");

class NodeMailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            port:465,
            secure: true, // true for 465, false for other ports
            logger: true,
            debug: true,
            secureConnection: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASS,
            },
            tls:{
                rejectUnAuthorized:true
            }
        });
        this.smtpConfig = 
        this.emailPass = process.env.EMAIL_PASS;
        this.emailUserName = process.env.EMAIL_USERNAME;
    }
    
    // Phương thức main sử dụng async-await
    async sendMail(email,otp) {
        try {
            console.log(email);
            // Gửi email với đối tượng transport được xác định
            const info = await this.transporter.sendMail({
                from: '"Cựu Sinh Viên Socical 👻" <maseotrang2020@gmail.com>', // Địa chỉ người gửi
                to: email, // Địa chỉ email người nhận
                subject: "Xác minh tài khoản", // Tiêu đề email
                text: "Hello world?", // Nội dung văn bản thông thường
                html: `<div>Mã xác thực OTP của bạn là : <b>${otp}</b> <em>(Hiệu lực trong 20 phút)</em></div>`, // Nội dung HTML
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

            return info;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error; // Ném ngoại lệ nếu có lỗi
        }
    }
}

module.exports = new NodeMailService();
