import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FIREBASE/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //-------------------------------------------

  const googleProvider = new GoogleAuthProvider();

  // create user form sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user form login page

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google pop up

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // observe user after login or created
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("observed current user is:", currentUser);
      setLoading(false);
      //---------------------
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserData = (user, name, url) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut,
    googleSignIn,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
