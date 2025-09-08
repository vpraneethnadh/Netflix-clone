import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCginwlkRjec3ESnMUQXXl88eVuq04uksM",
  authDomain: "netflix-clone-ef089.firebaseapp.com",
  projectId: "netflix-clone-ef089",
  storageBucket: "netflix-clone-ef089.firebasestorage.app",
  messagingSenderId: "749805278283",
  appId: "1:749805278283:web:9f4b58b7dbdc015f83e9ce",
  measurementId: "G-FYHLJPBM4G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
    await signOut(auth);
};

export { auth, db, login, signup, logout };
