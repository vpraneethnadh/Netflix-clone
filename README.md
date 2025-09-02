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
```yaml
src/
├─ assets/ # Images & icons
├─ Components/ # Navbar, Footer, TitleCards, etc.
├─ Pages/ # Home, Player, Login, Signup
├─ firebase.js # Firebase config
├─ App.jsx
└─ main.jsx

```
---

## ⚙️ Installation

1. Clone the repo
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```
2. Install dependencies
Make sure Node.js is installed, then run:

```bash
npm install
```

3. Additional packages
If not already included, install these:

```bash
npm install react-router-dom firebase react-firebase-hooks react-toastify
```

## 🔐 Firebase Setup
Go to the Firebase Console.

Create a new project.

In the project dashboard go to Authentication → Get started and enable Email/Password.

Add a new Web App and copy the Firebase config.

Create src/firebase.js and paste your config:

```javascript
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
```

##🎬 TMDB API Setup
Create an account on The Movie Database (TMDB): https://www.themoviedb.org/

Go to Settings → API and generate an API key.

Store the key in your environment variables (see next section).

In your code (example src/Pages/Pages.jsx) access it like:

```javascript
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// or process.env.VITE_TMDB_API_KEY depending on setup
🔒 Environment Variables
Create a .env or .env.local file at the project root:

env
VITE_TMDB_API_KEY=your_tmdb_api_key

# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Note: Vite requires client-facing env vars to start with VITE_.

▶️ Run Locally
Start the dev server:

```bash
npm run dev
```
Open in browser: http://localhost:5173

Build for production:

```bash
npm run build
```
Preview production build:


```bash
npm run preview
```

Create a feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add feature"

Push and open a Pull Request
