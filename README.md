# 🌍 Travel Search - Your Personal Travel Planner

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://travel-search-9y9t.onrender.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)

> **We Care, So You Can Travel Carefree** - Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.

## 🚀 Live Demo

**[Visit Travel Search App](https://travel-search-9y9t.onrender.com)**

Experience the full application with real-time trip planning and booking functionality.

## ✨ Features

- 🎯 **Smart Trip Planning** - Intelligent form-based trip creation
- 🏙️ **Destination Selection** - Choose from 70+ Indian cities
- 💰 **Budget Planning** - Flexible budget options per person
- 👥 **Group Travel** - Support for different traveler counts
- 🎨 **Interest-Based Recommendations** - Personalized suggestions
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔧 **Admin Dashboard** - Comprehensive trip management
- ⚡ **Real-time Updates** - Instant feedback with toast notifications
- 🛡️ **Form Validation** - Robust client and server-side validation

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - Modern React with Hooks
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - Responsive UI framework
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Validator** - Data validation

### Deployment

- **Render.com** - Cloud hosting platform

## 📁 Project Structure

```
travel-search/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── dashboard.tsx
│   │   │   ├── header.tsx
│   │   │   ├── landing.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── tripForm.tsx
│   │   ├── constants/     # App constants
│   │   ├── helper/        # JSON data files
│   │   ├── reducers/      # Redux reducers
│   │   └── util/          # Utility functions
│   └── package.json
├── server/                # Node.js backend
│   ├── config/           # Database & logger config
│   ├── helper/           # Server utilities
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── utils/            # Helper functions
│   ├── validation/       # Input validation
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/travel-search.git
   cd travel-search
   ```

2. **Set up the server**

   ```bash
   cd server
   npm install
   ```

3. **Configure environment variables**

   ```bash
   # Create .env file in server folder
   touch .env
   ```

   Add the following to your `.env` file:

   ```env
   DB_URL=your_mongodb_atlas_connection_string
   PORT=5000
   ```

4. **Set up the client**

   ```bash
   cd ../client
   npm install
   ```

5. **Start the development servers**

   **Terminal 1 - Start the backend:**

   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start the frontend:**

   ```bash
   cd client
   npm start
   ```

6. **Open your browser**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 🌐 API Documentation

### Create Trip

**POST** `/api/trip`

Creates a new trip request with user details and preferences.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "destination": "Mumbai",
  "interest": "Adventure",
  "travelers": "2",
  "budgetPerPerson": "10000-25000",
  "duration": "7",
  "when": "Next Month",
  "stage": "Just browsing"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Trip created successfully",
  "data": { ... }
}
```

## 📱 Pages

| Route        | Component | Description                         |
| ------------ | --------- | ----------------------------------- |
| `/`          | Landing   | Main trip planning interface        |
| `/dashboard` | Dashboard | Admin panel for viewing submissions |

## 🎨 Screenshots

### Landing Page

_The main interface where users can plan their trips_

### Dashboard

_Admin interface for managing trip requests_

> 📸 Screenshots will be added soon!

## 🚀 Deployment

The application is deployed on Render.com with automatic deployments from the main branch.

**Build Commands:**

- **Server**: `npm run server`
- **Client**: `npm run client`
- **Full Deploy**: `npm run deploy`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component and variable names
- Add proper error handling
- Write clean, readable code
- Test your changes thoroughly

## 🔮 Future Improvements

### Server Enhancements

- [ ] Move validation to middleware
- [ ] Implement custom API handler
- [ ] Add authentication system
- [ ] Implement rate limiting
- [ ] Add comprehensive logging

### Client Enhancements

- [ ] Migrate to Next.js for better routing
- [ ] Add loading mechanisms on dashboard
- [ ] Implement server-side rendering
- [ ] Enhanced form validation
- [ ] Multiple select functionality
- [ ] Improved navigation system
- [ ] Add trip editing capabilities
- [ ] Implement user authentication
- [ ] Add trip status tracking

### General Improvements

- [ ] Add comprehensive testing suite
- [ ] Implement CI/CD pipeline
- [ ] Add API documentation with Swagger
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Accessibility enhancements

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Thanks to all contributors who helped shape this project
- Inspired by modern travel planning platforms
- Built with love for travelers worldwide

---

<div align="center">
  <p>Made with ❤️ for travelers by travelers</p>
  <p>
    <a href="https://travel-search-9y9t.onrender.com">Live Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Installation</a> •
    <a href="#-api-documentation">API Docs</a>
  </p>
</div>
