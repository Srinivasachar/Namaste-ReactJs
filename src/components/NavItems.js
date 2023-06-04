import { useState } from "react";
import { Link } from "react-router-dom";
const NavItems = () => {
   const [sessionHandle, setSessionHandle] = useState("Login")
    return (
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button className="login-logout" onClick={()=>{
            setSessionHandle(sessionHandle === "Login" ? "Logout": "Login")
          }}>{sessionHandle}</button>
        </ul>
      </div>
    );
  };

  export default NavItems;