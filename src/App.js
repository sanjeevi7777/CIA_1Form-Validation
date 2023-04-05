import { BrowserRouter as Router,Link,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';  
import Home from './home';
import Get from'./Getstarted';
// import Demo from './Getuser';
import Discover from './discover';
import Contact from './contactus';
import About from './aboutus';
import './images/logo.jpg';

export default function App(){
  // const name="Sanjeevi";
  return(
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{Position:'fixed',width:1410}}>
      <img src="logo.jpg" width={70} alt="logo"></img>
    <Link to="/home" className="navbar-brand">Foody </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" style={{marginLeft:500}}>
      <li class="nav-item">
      <Link to="/home"className="navbar-brand" style={{paddingLeft:50}}>Home </Link>
      </li>
      <li class="nav-item">
      <Link to="/discover" className="navbar-brand" style={{paddingLeft:50}}>Discover Foods</Link>
      </li>
      <li class="nav-item">
      <Link to="/aboutus" className="navbar-brand" style={{paddingLeft:50}}>About us </Link>
      </li>
      <li class="nav-item active" >
      <Link to="/contactus" className="navbar-brand" style={{paddingLeft:50}}>Contact us </Link>
      </li>
    </ul>
  </div>
</nav>
<Routes>
<Route path="/Getstarted" element={<Get/>}/> 
<Route path="/home" element={<Home/>} name="sasa"/> 
<Route path="/discover" element={<Discover/>}/> 
<Route path="/aboutus" element={<About/>}/> 
<Route path="/contactus" element={<Contact/>}/> 
</Routes>
</Router>

);
}
