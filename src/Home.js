import React from "react";
import { NavLink } from "react-router-dom"



function Home({ user }) {




  return (
      
    <div class="mainpage">
      

     

      <nav>
        <h2 class="home"> Welcome {user ? user.name : null} to THE LOKI CAGE FIGHTING GAME!</h2>
        
        <div class="homeScreen"> </div>
        {/* <button class="big-button">fighters</button> */}
        <ul></ul>
        
       <div class="spacer"></div>
        <div class="joystick">

        <NavLink class="big-button" to="/login">
          Login
        </NavLink>
        
        <NavLink class="big-button" to="/sign">
          Sign up
        </NavLink>

      

        <NavLink class="big-button" to="/choose">
          All Users 
        </NavLink>


       
        



        <NavLink class="big-button" to="/fighters">
          START GAME
        </NavLink>


        
        </div>
      </nav>
       
     

      

    </div>



  );
}







export default Home;