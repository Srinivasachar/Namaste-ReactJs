import { useState } from "react";
import { Link } from "react-router-dom";
const NavItems = () => {
   const [sessionHandle, setSessionHandle] = useState("Login")
    return (
      <div className="">
        <ul className="flex p-4 m-4 content-between">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <button className="px-4" onClick={()=>{
            setSessionHandle(sessionHandle === "Login" ? "Logout": "Login")
          }}>{sessionHandle}</button>
        </ul>
      </div>
    );
  };

  export default NavItems;