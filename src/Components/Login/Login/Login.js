
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from "react";
import { UserContext } from "../../../App";
import { useContext } from "react";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
  
   
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
      firebase.auth().signInWithPopup(provider)
        .then((res) => {
          
          const { displayName, email, photoURL } = res.user;
          const signedInUser = {name: displayName, email: email, photoURL}
          console.log(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.message);
        })
    }
  
    return (
      <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-danger pl-5 pr-5 mt-5"onClick={handleSignIn}>Continue With Google</button>
  
      </div>
    );
  }
  
  export default Login;