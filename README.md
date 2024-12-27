# Startupsprint 

## Overview
Startupsprint is a minimalistic, startup-oriented social platform build using **Mern Stack** that enables users to create and manage startup profiles, interact through posts and messages, and search for startup-related information. The platform is designed to be modular and scalable to accommodate future requirements.

## Backend Documentation

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/ayeshag7/startupsprint.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the backend folder.
   - Add the following:
     ```env
     PORT=3000
     MONGODB_CONNECT="<MongoDB connection string>"
     ACCESS_TOKEN_SECRET="<Your access token secret>"
     REFRESH_TOKEN_SECRET="<Your refresh token secret>"
     SECURE="development"
     PASSWORD="<Your email password>"
     USER="<Your email address>"
     ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

### API Routes
Each API route is documented below:

#### Authentication
1. **Register**
   - **Endpoint**: `POST /api/auth/register`
   - **Request Body**:
     ```json
     {
       "Name": "string",
       "email": "string",
       "password": "string",
       "gender": "string"
     }
     ```
  #### Response
- **Response**:
  ```json
  {
    "code": 201,
    "success": true,
    "message": "User created successfully",
    "data": {
      "_id": "unique id",
      "username": "your name",
      "email": "your email",
      "profilephoto": "https://avatar.iran.liara.run/public/boy?username=abc",
      "role": "User"
    },
    "tokens": {
      "accessToken": "Access Token",
      "refreshToken": "Refresh Token"
    }
  }


2. **Login**
   - **Endpoint**: `POST /api/auth/login`
   - **Request Body**:
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "accessToken": "string",
       "refreshToken": "string"
     }
     ```

... Additional routes go here ...

### Folder Structure
```
backend/
├── middleware/
├── routes/
├── utils/
├── models/
├── controllers/
├── config/
├── app.js
└── server.js
```

---

## Frontend Documentation

### Installation and Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the frontend folder.
   - Add the following:
     ```env
     VITE_BASE_URL='http://localhost:3000/'
     ```
4. Start the frontend server:
   ```bash
   npm run dev
   ```

### Folder Structure
```
frontend/
├── components/
├── pages/
├── context/
├── elements/
├── styles/
├── App.jsx
└── main.jsx
```

### Features Implemented
- **Authentication**: User login and signup integrated with the backend.
- **Reusable Components**: Modular React components for scalability.

### Extending the Frontend
- **Adding New Pages**:
  1. Create a new file in the `pages/` directory.
  2. Define your page component.
  3. Add a route for the new page in `App.jsx`.
- **Adding New Components**:
  1. Create a new file in the `components/` directory.
  2. Define your component logic and styles.
  3. Import and use the component wherever needed.

---

## Methodology to Run the Project

### Prerequisites
- Node.js and npm installed
- MongoDB connection string

### Steps to Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayeshag7/startupsprint.git
   ```
2. **Set up the backend**:
   - Navigate to the backend directory.
   - Install dependencies and configure environment variables as per the backend setup.
   - Start the backend server.

3. **Set up the frontend**:
   - Navigate to the frontend directory.
   - Install dependencies and configure environment variables as per the frontend setup.
   - Start the frontend development server.

4. **Access the application**:
   - Open a browser and navigate to `http://localhost:5173/` to view the frontend.
   - The frontend will communicate with the backend at `http://localhost:3000/`.

---



