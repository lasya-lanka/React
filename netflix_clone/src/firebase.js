// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBReJJJ8u23vuz_NeO2lB12ouSh0c3eVQQ",
  authDomain: "netflix-clone-2df16.firebaseapp.com",
  projectId: "netflix-clone-2df16",
  storageBucket: "netflix-clone-2df16.firebasestorage.app",
  messagingSenderId: "73931274924",
  appId: "1:73931274924:web:3f129a5b1472ee37343d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

//user signup function
const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })
    } catch (error) {
        console.error(error);
        alert(error)
    }
}

//user login function
const login = async (email,password) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.error(error);
        alert(error)
    }
}

const logout = ()=>{
    signOut(auth);
}
export {auth ,db, login,signup,logout};