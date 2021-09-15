import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Coba from './pages/Coba';


function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* Content */}
      <div className="content">
        <div className="max-w-md mx-auto rounded-xl lg:mt-2 mt-24  md:max-w-full lg:max-w-6xl">
          <Switch>
            <Route exact path="/">
             <Dashboard/>
            </Route>
            <Route path="/coba">
              <Coba/>
            </Route>
          </Switch>
        </div>
        </div>
      {/* akhir Content */}
    </div>
    </Router>
    );
}

export default App;
