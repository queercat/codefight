import './App.css';

/* npm imports */

/* components imports */
import Codebody from "./components/codebody/codebody";


function App() {
  return (
      <div className="page-container box">
        {/** Create a header here */}
        <div className="app-body">
          <Codebody/>
        </div>
      </div>
  );
}

export default App;
