import Navbarr from './components/Navbarr'
import './scss/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header border-bottom border-dark">
          <Navbarr />
        </header>
      </div>
    </Router>
  );
}

export default App;
