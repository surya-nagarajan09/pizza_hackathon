import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="top">
      <ul className="list">
        <img
          src="https://i.postimg.cc/tJymSkN5/Pngtree-pizza-illustration-in-icon-drawn-5385559.png"
          width="80"
          height="80"
        />
        <Link to="/">
          <li className="hlo">Home</li>
        </Link>
        <Link to="/Menu">
          <li className="hlo">Menu</li>
        </Link>

        <Link to="/Custom">
          <li className="hlo">Make Pizza</li>
        </Link>
        <Link to="/Order">
          <li className="hlo">My Orders</li>
        </Link>

        <Link to="/Signup">
          <li className="hlo">Sign up</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
