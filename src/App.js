
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from'./Shop'
import {BrowserRouter as Router, Switch,Route} from  'react-router-dom'
function App() {
  return (
   <Router>
      <div className="App">
      <Nav/>
      <Switch>
      <Route path= "/" exact components = {Home}/>
     <Route path= "/shop" components = {About}/>
     <Route path= "/shop" components = {Shop}/>
      </Switch>

      

    </div>
   </Router>
  );
}
const Home =()=>{
  <div>
    <h1>Home Page</h1>
  </div>
}

export default App;
