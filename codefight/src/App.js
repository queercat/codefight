import './App.css';

/* npm imports */

/* components imports */
import Codebody from "./components/codebody/codebody";
import Header from './components/header/header';

import {initializeApp} from "firebase/app";
import firebaseConfig from './firebase';
function App() {
  const firebase_app = initializeApp(firebaseConfig);

  return (
    <div className="page-container box">
      <div className="app-body box">
        <Codebody/>
      </div>
    </div>
  );
}

export default App;
