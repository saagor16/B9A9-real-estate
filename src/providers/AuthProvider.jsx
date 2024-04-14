/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth/cordova";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
     photoURL: photo
    })
  
  }

  const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
  }




  const logOut = () => {
    return signOut(auth);
  }

  const LogIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email , password)
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("use in auth chnge", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    registerUser,
    updateProfileInfo,
    googleLogin,
    githubLogin,
    LogIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;