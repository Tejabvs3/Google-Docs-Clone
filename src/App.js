//import './App.css';
import React from "react";
import Home from './components/Home.js'
import Login from './components/Login.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [profile, setProfile] = React.useState([])
  

  const handleProfile=(e)=>{
    setProfile(e)
  }
  

  return (
    <Router>
<div className="App.js">
    <Routes>
    <Route exact path = "/" element ={ <Login profile={handleProfile}/>}/> 
         {profile!==null?<Route  path = {`/home/:${profile.id}`} element ={ <Home profile={profile}/>}/>:""}  
         
     </Routes>
     </div>
</Router>
  );
}

export default App;
