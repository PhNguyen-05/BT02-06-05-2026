const authService = require('../services/authService');

class AuthController {
  getRegister(req, res) {
    res.render('auth/register', { errors: [], oldData: {} });
  }

  getVerifyOTP(req, res) {
    const { email, message, error } = req.query;
    res.render('auth/verify-otp', {
      email: email || '',
      message: message || null,
      error: error || null,
      success: false
    });
  }

  async postRegister(req, res) {
    try {
      const { name, email, password } = req.body;
      await authService.register(name, email, password);
      
      // Truyền đầy đủ biến để tránh lỗi "success is not defined"
      res.render('auth/verify-otp', { 
        email, 
        message: 'Mã OTP đã được gửi đến email của bạn. Vui lòng kiểm tra hộp thư.',
        error: null,
        success: false 
      });
    } catch (error) {
      res.render('auth/register', { 
        errors: [{ msg: error.message }], 
        oldData: req.body 
      });
    }
  }

  async verifyOTP(req, res) {
    try {
      const { email, otp } = req.body;
      await authService.verifyOTP(email, otp);
      
      res.render('auth/verify-otp', {
        email,
        message: '✅ Xác thực tài khoản thành công!',
        error: null,
        success: true
      });
    } catch (error) {
      res.render('auth/verify-otp', { 
        email: req.body.email || '', 
        message: null, 
        error: error.message,
        success: false 
      });
    }
  }
}

module.exports = new AuthController();