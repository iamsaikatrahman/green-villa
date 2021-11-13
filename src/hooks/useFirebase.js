import initializeAuthentication from "../pages/Authentication/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //   Email Registration
  const registerUser = (email, password, name, photoURL, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name, photoURL };
        setUser(newUser);
        setAuthError("");
        // send user info to database
        saveUserInfo(email, name, "POST");
        // Send user info to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {})
      .finally(() => setIsloading(false));
  };
  //  Email Login
  const signInWithEmail = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/dashboard";
        history.replace(destination);
        setUser(result.user);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  //   Login With Google
  const signInWithGoogle = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/dashboard";
        history.replace(destination);
        const user = result.user;
        setUser(user);
        saveUserInfo(user.email, user.displayName, "PUT");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  //   Observer User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  //   Check Admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  //   user Log Out
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };
  // Save User info into database
  const saveUserInfo = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://thawing-brook-28581.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };
  return {
    user,
    isloading,
    authError,
    token,
    admin,
    registerUser,
    signInWithEmail,
    signInWithGoogle,
    logOut,
  };
};
export default useFirebase;
