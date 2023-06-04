import { useState } from "react";

const NavItems = () => {
   const [sessionHandle, setSessionHandle] = useState("Login")
    return (
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-logout" onClick={()=>{
            setSessionHandle(sessionHandle === "Login" ? "Logout": "Login")
          }}>{sessionHandle}</button>
        </ul>
      </div>
    );
  };

  export default NavItems;