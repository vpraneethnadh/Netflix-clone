# Netflix Clone 🎬  

👉 **Live Demo:** [https://netflix-iota-pearl.vercel.app/](https://netflix-iota-pearl.vercel.app/)  

This is a **Netflix Clone** built from scratch using **React + Vite**. It includes user authentication with Firebase, movie data fetched from **TMDB API**, and a clean, responsive UI.  

---

## 🚀 Features  
- 🔥 Built with **React (Vite)** for fast performance  
- 🔑 **Firebase Authentication** (Login & Signup)  
- 🎥 **TMDB API integration** for fetching movies & TV shows  
- 🎭 Netflix-like UI with banners, categories & search  
- ✅ Toast notifications with **react-toastify**  

---

## 📦 Installation & Setup  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
2. Install Dependencies
Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Additional packages used:

bash
Copy code
npm install react-router-dom firebase react-firebase-hooks react-toastify
3. Firebase Setup
Go to Firebase Console

Create a new project

Enable Authentication (Email/Password)

Copy your Firebase config and paste it into src/firebase.js

firebase.js should look like this:

javascript
Copy code
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
📌 Docs: Firebase Web Setup Guide

4. TMDB API Setup
Create an account on The Movie Database (TMDB)

Go to API Section and generate an API key

Update your API key in src/Pages/Pages.jsx

Example:

javascript
Copy code
const API_KEY = "YOUR_TMDB_API_KEY";
▶️ Running the Project
Start the development server:

bash
Copy code
npm run dev
Now open http://localhost:5173 in your browser.

📂 Project Structure
bash
Copy code
src/
 ┣ assets/         # Images & icons
 ┣ Components/     # Navbar, Footer, TitleCards, etc.
 ┣ Pages/          # Home, Player, Login, Signup
 ┣ firebase.js     # Firebase config
 ┣ App.jsx
 ┗ main.jsx
🌍 Deployment
You can deploy this project easily on Vercel or Netlify.

⚡ Technologies Used
React + Vite

Firebase (Authentication)

TMDB API

React Router DOM

React Firebase Hooks

React Toastify
