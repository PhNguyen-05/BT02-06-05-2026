require('dotenv').config();
const { sendOTPEmail } = require('./src/config/mailer');

async function testEmail() {
  try {
    await sendOTPEmail('your-email@example.com', '123456'); // Thay bằng email thật của bạn
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

testEmail();