import React from "react";
import Choose from "./FighterCard";
import FighterCard from "./FighterCard";
import Training from "./Training"


function FightersContainer({ user, fighters, updateSpecialty,updateStreak }) {
   
   
    return (
        
        <div className="fightersDiv">
            <div class="spacer"></div>
        
            <h2>Fight!</h2>
          {fighters ? fighters.map((fighter) => (
            <FighterCard
            key={fighter.id}
            fighter={fighter}
            updateSpecialty={updateSpecialty} 
            updateStreak={updateStreak}
            user={user}
            />
            
          )
          ): null}
        
      </div>
    );
  }
  
  export default FightersContainer;