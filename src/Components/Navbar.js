import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Data from "./Apidata/Data";
import Search from "./Search";

const Navbar = ({changeHandler}) => {
  const [Apidata, setApidata] = useState();
    
  const navigate = useNavigate();
  useEffect(() => {
    setApidata(Data);
  }, []);
 
  return (
    <> 
      <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rBiWCgn1Cakx6SUU4yd_geFPdQIj25VEx-Z4UJC6&s"
          style={{
            width: "160px",
            height: "100px",
            minHeight: "2rem",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        />
        <div class="container-fluid">
          <input
            className="nav form-control me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              changeHandler(e.target.value);
            }}
          />
   
        </div>
      </nav>
    </>
  );
};

export default Navbar;
