import React from "react";
import { NavLink } from "react-router-dom"



function Header({ }) {
  
return (
    <header>
      
      <nav>

        
        <NavLink class="big-button" to="/home">
          Home
        </NavLink>

       
      </nav>
    </header>
  );
}

export default Header;