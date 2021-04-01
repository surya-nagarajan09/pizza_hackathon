import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div>
      <ul className="list">
       <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Menu">
        <li>Menu</li>
      </Link>
      
    
      
      
       <Link to="/Custom">
     <li>Make Pizza</li>
      </Link>
      <Link to="/Order">
       <li>My Orders</li>
      </Link>
      <Link to="/Signin">
       <li>Sign in</li>
      </Link>
      <Link to="/Signup">
       <li>Sign up</li>
      </Link>
      
      
      
       
        
       
        
      </ul>
    </div>
  );
}

export default Nav;
