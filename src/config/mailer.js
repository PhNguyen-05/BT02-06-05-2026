const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"TOEIC Luyện Thi" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Mã OTP kích hoạt tài khoản TOEIC',
    html: `
      <h2>Xin chào,</h2>
      <p>Mã OTP của bạn là: <strong style="font-size:28px;color:#007bff;">${otp}</strong></p>
      <p>Mã này sẽ hết hạn sau 10 phút.</p>
      <p>Trân trọng,<br>Đội ngũ TOEIC Luyện Thi</p>
    `
  });
};

module.exports = { sendOTPEmail };