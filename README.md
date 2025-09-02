# 🎬 Netflix Clone

**Live Demo:** https://netflix-iota-pearl.vercel.app/

A responsive **Netflix-style** frontend built with **React + Vite**, using **Firebase Authentication** and **TMDB** for movie data. Clean UI, banner carousels, categories, search, and toast notifications.

---

## 🔥 Features
- **React (Vite)** for fast development & performance  
- **Firebase Authentication** (Email / Password)  
- **TMDB API** integration for movies & TV data  
- Netflix-like UI: banners, category rows, search & player  
- Toast notifications using **react-toastify**  
- Responsive design (desktop & mobile)

---

## 📚 Table of Contents
1. [Demo](#-demo)  
2. [Tech Stack](#-tech-stack)  
3. [Project Structure](#-project-structure)  
4. [Installation](#-installation)  
5. [Firebase Setup](#-firebase-setup)  
6. [TMDB Setup](#-tmdb-setup)  
7. [Environment Variables](#-environment-variables)  
8. [Run Locally](#-run-locally)  
9. [Deployment](#-deployment)  
10. [Screenshots](#-screenshots)  
11. [Contributing](#-contributing)  
12. [License](#-license)

---

## 🎯 Demo
Open the live demo: **https://netflix-iota-pearl.vercel.app/**

---

## 🧰 Tech Stack
- **React** (Vite)  
- **Firebase** (Auth)  
- **The Movie Database (TMDB) API**  
- **react-router-dom**, **react-firebase-hooks**, **react-toastify**

---

## 📂 Project Structure
src/
┣ assets/ # Images & icons
┣ Components/ # Navbar, Footer, TitleCards, etc.
┣ Pages/ # Home, Player, Login, Signup
┣ firebase.js # Firebase config
┣ App.jsx
┗ main.jsx

yaml
Copy code

---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
2. Install dependencies
Make sure Node.js is installed, then:

bash
Copy code
npm install
# or
yarn
3. Install additional packages (if needed)
bash
Copy code
npm install react-router-dom firebase react-firebase-hooks react-toastify
🔐 Firebase Setup
Go to the Firebase Console.

Create a new project.

Navigate to Authentication → Get started and enable Email/Password.

Create a web app in Firebase and copy the config values.

Create src/firebase.js and paste your config:

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
🎬 TMDB API Setup
Create an account on The Movie Database: https://www.themoviedb.org/

Go to Settings → API and generate an API key.

Add your TMDB API key to the project as an environment variable (see next section).

In the project code (e.g. src/Pages/Pages.jsx) set:

javascript
Copy code
const API_KEY = process.env.VITE_TMDB_API_KEY;
🔒 Environment Variables
Create a .env (or .env.local) at project root:

ini
Copy code
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Note: Vite prefixes env vars with VITE_ so they are accessible in the client code.

▶️ Run Locally
Start the dev server:

bash
Copy code
npm run dev
Open: http://localhost:5173

Build for production:

bash
Copy code
npm run build
Preview production build:

bash
Copy code
npm run preview
🚀 Deployment
This project works great on Vercel or Netlify.

Vercel quick steps:

Push repo to GitHub.

Import project in Vercel.

Add environment variables in Vercel dashboard (same keys as .env).

Deploy.

🖼️ Screenshots
Add a couple of screenshots here for the README (optional).
Example:

scss
Copy code
![Home Banner](./assets/home-banner.png)
![Category Row](./assets/category-row.png)
🤝 Contributing
Contributions are welcome!

Fork the repo

Create a feature branch: git checkout -b feature/YourFeature

Commit changes: git commit -m "Add feature"

Push and open a PR

📜 License
This project is open source — feel free to adapt it for learning or personal projects. Add a license file (e.g., MIT) if you want to clarify reuse rules.
