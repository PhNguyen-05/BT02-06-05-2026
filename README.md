# TOEIC Practice Website

Website luyện thi TOEIC được xây dựng bằng **NodeJS, ExpressJS, ReactJS, MongoDB (Mongoose)** và **Bootstrap CSS**.  
Hệ thống hỗ trợ đăng ký tài khoản, xác thực OTP qua email và phân quyền người dùng.

---

# Công nghệ sử dụng

## Backend
- NodeJS
- ExpressJS
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Nodemailer
- Express Validator
- Express Rate Limit

## Frontend
- ReactJS
- Bootstrap 5
- Axios

---

# Chức năng hiện tại

- Đăng ký tài khoản
- Xác thực OTP qua email
- JWT Authentication
- Authorization User/Admin
- Rate Limiting chống spam API
- Validate dữ liệu đầu vào

---

# Cấu trúc thư mục

```bash
BT02-06-05-2026
│
├── node_modules
├── public
│
├── src
│   ├── config
│   │   ├── db.js
│   │   └── mailer.js
│   │
│   ├── controllers
│   │   └── authController.js
│   │
│   ├── middlewares
│   │   ├── authenticate.js
│   │   ├── authorize.js
│   │   ├── rateLimiter.js
│   │   └── validate.js
│   │
│   ├── models
│   │   └── User.js
│   │
│   ├── routes
│   │   └── authRoutes.js
│   │
│   ├── services
│   │   └── authService.js
│   │
│   ├── utils
│   │   └── otpGenerator.js
│   │
│   └── views
│       ├── auth
│       │   ├── register.ejs
│       │   └── verify-otp.ejs
│       │
│       ├── layouts
│       └── partials
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json


# Cài đặt project

## 1. Clone project
git clone https://github.com/your-username/your-repository.git
```

## 2. Di chuyển vào thư mục project

```bash
cd BT02-06-05-2026
```

## 3. Cài đặt dependencies

```bash
npm install
```

## 4. Tạo file `.env`

```env
PORT=3000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

---

# Chạy project

```bash
npm start
```

Hoặc:

```bash
nodemon src/server.js
```

Server chạy tại:

```bash
http://localhost:3000
```

---

# API Authentication

## Đăng ký tài khoản

### Request

```http
POST /register
```

### Body

```json
{
  "name": "Nguyen Van A",
  "email": "testuser@gmail.com",
  "password": "Abc@123456",
  "confirmPassword": "Abc@123456",
  "gender": "male",
  "dateOfBirth": "2000-05-15"
}
```

### Response Success

```json
{
  "success": true,
  "message": "Đăng ký thành công. Vui lòng xác thực OTP."
}
```

---

# Xác thực OTP

### Request

```http
POST /verify-otp
```

### Body

```json
{
  "email": "testuser@gmail.com",
  "otp": "123456"
}
```

### Response Success

```json
{
  "success": true,
  "message": "Xác thực OTP thành công"
}
```

---

# Validation đăng ký

- Email đúng định dạng
- Email chưa tồn tại
- Password tối thiểu 8 ký tự
- Có chữ hoa, chữ thường, ký tự đặc biệt
- Confirm Password phải khớp
- OTP hết hạn sau thời gian quy định

---

# Middleware bảo mật

## Rate Limiter

Giới hạn số lần gọi API để chống spam.

## JWT Authentication

Xác thực người dùng bằng token.

## Authorization

Phân quyền:

- User
- Admin

---

# Giao diện

## Trang đăng ký

- Form đăng ký tài khoản
- Validate dữ liệu
- Bootstrap UI

## Trang xác thực OTP

- Nhập mã OTP
- Xác thực email

---

# Test API bằng Postman

Project có collection Postman để test API:

- Register success
- Register thiếu dữ liệu
- Password không khớp
- Password yếu
- Email đã tồn tại
- Verify OTP thành công
- Verify OTP sai

---


