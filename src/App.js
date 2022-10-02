import "./App.css";
import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Homepage from "./components/Homepage";
import firebase from "./firebase";
import StyleFirebaseUi from "react-firebaseui/StyledFirebaseAuth";

var uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    },
  },
};

function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setuser(user);
    });
  });
  if (user) {
    return <Homepage />;
  } else {
    return <Homepage />;
  }
}

export default App;
