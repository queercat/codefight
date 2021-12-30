import './App.css';

/* npm imports */

/* components imports */
import Codebody from "./components/codebody/codebody";

import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import firebaseConfig from './firebase';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import SignIn from './components/signin/signin';

const firebase_app = initializeApp(firebaseConfig);
const db = getDatabase(firebase_app);
const auth = getAuth();

function App() {
  const [userState, setUserState] = useState(false);

  useEffect(() => {    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(true)
      } else {
        setUserState(false)
      }
    })
  }, []);

  /** logged in? */
  return (
    <div className="page-container box">
      <div className="app-body box">
        {userState ? (<Codebody/>) : (<SignIn/>)}
      </div>
    </div>
  );
}

export {firebase_app, db, auth};
export default App;