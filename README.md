# Helmets and Gears - E-commerce Platform

A modern, full-stack e-commerce website specializing in motorcycle helmets and safety gear. Built as a comprehensive semester 3 project showcasing modern web development practices.

## 🚀 Features

- **User Authentication**: Secure login/register system with JWT tokens
- **Product Catalog**: Browse helmets and motorcycle gear with detailed descriptions
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Admin Dashboard**: Comprehensive admin panel for product and order management
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search & Filter**: Advanced product search and filtering capabilities
- **Order Management**: Complete order processing and tracking system
- **User Management**: Admin can manage user accounts and status

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI library
- **Vite** - Fast build tool and development server
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Responsive styling with Flexbox/Grid
- **JWT Decode** - Token handling for authentication
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **PostgreSQL** - Robust relational database
- **Sequelize** - Modern ORM for database operations
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Helmets-and-Gears/
├── frontend/                 # React frontend application
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable components
│   │   ├── Private/         # Admin dashboard pages
│   │   ├── service/         # API service functions
│   │   └── ...
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                 # Node.js backend API
│   ├── src/                 # API source code
│   │   ├── controller/      # Route controllers
│   │   ├── models/          # Database models
│   │   ├── route/           # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── ...
│   ├── uploads/             # File upload directory
│   ├── package.json         # Backend dependencies
│   └── README-ADMIN.md      # Admin setup guide
├── package.json             # Root package configuration
├── README.md                # Project documentation
├── CONTRIBUTING.md          # Contribution guidelines
├── API_DOCUMENTATION.md     # API endpoint documentation
└── CHANGELOG.md             # Version history
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- PostgreSQL database

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rajivg5aht/Helmets-and-Gears-Sem3-Website.git
cd Helmets-and-Gears-Sem3-Website
```

2. **Install root dependencies**
```bash
npm install
```

3. **Setup Backend**
```bash
cd backend
npm install
# Configure your database connection in .env file
# Run database migrations
node update-user-schema.js
# Create admin user
node create-admin.js
npm start
```

4. **Setup Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📖 Documentation

- [Contributing Guidelines](CONTRIBUTING.md)
- [API Documentation](API_DOCUMENTATION.md)
- [Admin Setup Guide](backend/README-ADMIN.md)
- [Frontend Documentation](frontend/README.md)
- [Changelog](CHANGELOG.md)

## 🎯 Development Goals

This project demonstrates:
- Modern React development patterns
- RESTful API design
- User authentication and authorization
- File upload and management
- Responsive web design
- E-commerce functionality
- Admin panel development
- Database design and management

## 🔧 Available Scripts

### Root Directory
- `npm install` - Install all dependencies

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌟 Key Features Implemented

- ✅ User registration and authentication
- ✅ Admin authentication and dashboard
- ✅ Product CRUD operations
- ✅ Order management system
- ✅ User status management
- ✅ File upload for product images
- ✅ Responsive design
- ✅ Search and filtering
- ✅ Shopping cart functionality

## 📝 License

This project is developed for educational purposes as part of Semester 3 coursework.

## 👥 Team

Developed by students as part of their web development curriculum.

---

**Happy Coding!** 🎉
