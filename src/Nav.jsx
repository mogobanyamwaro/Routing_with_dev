
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  const navstyle ={
    color: 'white'
  }
  return (
    <div className="App">
        <nav>
            <h1>Logo</h1>
            <ul className = "nav-links">
              <Link to = "/about" style = {navstyle}>
              <li>About</li>
              </Link>
                
              <Link to ="shop" style = {navstyle}>
              <li>shop</li>
              </Link>
            </ul>
        </nav>

    </div>
  );
}

export default Nav;
