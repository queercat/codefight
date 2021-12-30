import './App.css';

/* npm imports */

/* components imports */
import Codebody from "./components/codebody/codebody";
import Header from './components/header/header';

import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import firebaseConfig from './firebase';

const firebase_app = initializeApp(firebaseConfig);
const db = getDatabase(firebase_app);

function App() {
  return (
    <div className="page-container box">
      <div className="app-body box">
        <Codebody/>
      </div>
    </div>
  );
}

export {firebase_app, db};
export default App;