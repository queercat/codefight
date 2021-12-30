import './App.css';

/* npm imports */

/* components imports */
import Codebody from "./components/codebody/codebody";

import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import firebaseConfig from './firebase';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import SignIn from './components/signin/signin';

const firebase_app = initializeApp(firebaseConfig);
const db = getDatabase(firebase_app);

function App() {
  const [userState, setUserState] = useState(false);

  useEffect(() => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(true)
      } else {
        setUserState(false)
      }
    })
  }, []);

  /** logged in? */
  if (userState) {
    return (
      <div className="page-container box">
        <div className="app-body box">
          <Codebody/>
        </div>
      </div>
    );
  } else {
    return <SignIn/>;
  }
}

export {firebase_app, db};
export default App;