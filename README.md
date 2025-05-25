# E-commerce Application

A full-stack e-commerce platform built with modern technologies.

## 🚀 Features

- User Authentication & Authorization
- Product Catalog Management
- Shopping Cart Functionality
- Order Processing
- Payment Integration
- Admin Dashboard
- Responsive Design

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux for state management
- Material-UI for UI components
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- RESTful API design

## 📋 Prerequisites

- Node.js (v20 or higher)
- MongoDB
- Docker

## 🚀 Installation

### Using Docker (Recommended)

1. Install Docker and Docker Compose
2. Run the following command:

   docker-compose up --build

### Manual Installation

1. Clone the repository:
   git clone https://github.com/sunil18051998/EcommerceApp.git
   cd EcommerceApp

2. Install frontend dependencies:
   cd frontend
   npm install

3. Install backend dependencies:
   cd ../backend
   npm install


4. Create environment files:
   - Create `.env` in backend directory with necessary configurations
   - Create `.env` in frontend directory with API endpoints

5. Start the development servers:
   # Start backend
   cd backend
   npm run dev

   # In a new terminal, start frontend
   cd frontend
   npm start

## 📖 Project Structure

```
EcommerceApp/
├── backend/          # Backend API server
│   ├── src/         # Source code
│   ├── config/      # Configuration files
│   └── ...          
├── frontend/         # React frontend application
│   ├── src/         # Source code
│   ├── public/      # Static files
│   └── ...          
└── docker-compose.yml # Docker configuration
```

## 🛡️ Security

- JWT-based authentication
- Password hashing
- Input validation
- Rate limiting
- CORS configuration

## 📝 API Documentation

Detailed API documentation is available in the backend directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Sunil Kumar Maurya

## 🔗 Links

- [Live Demo](https://ecommerce-app-pi-henna.vercel.app/)
