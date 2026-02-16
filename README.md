# 🏆 Sports Buddy Web Application

## 📌 Overview

Sports Buddy is a full-stack web application designed to manage and organize sports events efficiently. The platform allows users to register, log in, view available sports events, and join events. Administrators can create and delete events. The system uses Firebase Authentication for secure user management and Firestore as a real-time database.

This project demonstrates real-world implementation of authentication, CRUD operations, database integration, and deployment.

---

## 🎯 Objectives

- Provide a platform for users to discover and join sports events
- Allow administrators to manage events
- Implement authentication and database integration
- Demonstrate CRUD operations using Firebase
- Deploy a production-ready web application

---

## 🚀 Features

### 👤 User Module
- User Registration
- User Login
- Logout functionality
- View all sports events
- Join sports events
- Prevent duplicate joining of events

### 👨‍💼 Admin Module
- Add new sports events
- Delete existing events
- View all events

### 🔐 Security Features
- Firebase Authentication
- Dashboard route protection
- Session-based authentication
- Secure Firestore integration

### 🧠 System Capabilities
- Real-time database updates
- Logging of user actions
- Responsive and modern UI
- Deployed on live hosting platform

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6 Modules)

### Backend & Database
- Firebase Authentication
- Firebase Firestore

### Deployment
- Vercel

### Version Control
- Git
- GitHub

---

## 🏗 System Architecture

```
Frontend (HTML / CSS / JavaScript)
          ↓
Firebase Authentication → User Management
          ↓
Firebase Firestore → Events Collection
                          ↓
                    Joins Collection
```

---

## 📂 Project Structure

```
sports-buddy/
│
├── index.html        (Login Page)
├── register.html     (Registration Page)
├── dashboard.html    (User Dashboard)
├── admin.html        (Admin Panel)
├── style.css         (Styling)
├── app.js            (Main JavaScript Logic)
├── firebase.js       (Firebase Configuration)
└── README.md
```

---

## ⚙️ Setup Instructions (Local Environment)

1. Clone the repository:

   ```
   git clone https://github.com/harshrajmane/sports-buddy.git
   ```

2. Navigate into the project folder:

   ```
   cd sports-buddy
   ```

3. Run a local server:

   ```
   python3 -m http.server 5500
   ```

4. Open in browser:

   ```
   http://localhost:5500
   ```

5. Configure Firebase credentials in `firebase.js`.

---

## 🌐 Live Deployment

The project is deployed on Vercel:

👉 https://sports-buddy-byharsh.vercel.app

---

## 🧪 Test Cases

1. User can register successfully.
2. User can login with valid credentials.
3. User cannot login with invalid credentials.
4. User can view all available events.
5. User can join an event.
6. User cannot join the same event twice.
7. Admin can add a new event.
8. Admin can delete an event.
9. Logout redirects user to login page.

---

## 📊 Logging

The system logs the following actions in console:

- User Registration
- User Login
- Event Creation
- Event Joining
- Event Deletion
- User Logout

---

## 🔮 Future Enhancements

- Update event feature
- Role-based admin authorization
- Event participant counter
- Dashboard analytics
- Email notifications
- UI animations and enhancements
- Prevent overbooking of events

---

## 🌐 Live Demo

Live Application: https://sports-buddy-byharsh.vercel.app  

GitHub Repository: https://github.com/harshrajmane/sports-buddy

---

## 👨‍💻 Author

Harshwardhan Rajmane  

GitHub: https://github.com/harshrajmane  

---

## 📜 License

This project is developed for educational and internship purposes.
