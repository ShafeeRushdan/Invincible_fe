import React, { useEffect, useState } from "react";

import $ from "jquery"




function FighterCard({ user, fighter: { id, image, alias, race, hp, specialty, streak }, updateSpecialty, updateStreak }) {
  var [specialty, setSpecialty] = useState(specialty)
  var [streak, setStreak] = useState(user.streak)

  useEffect(() => {
    
      // replay the game
      $('.player').each(function(n){
        n = n + 1;
        $(this).attr('id', 'player-' + n);
      });
      $('#player-1').attr('data-user', 'true');
      
      // define variables
      // define random numbers to detract from health
      var punchBase = 2,
          kickBase = 5,
          headbuttBase = 7,
          punch = 0,
          kick = 0,
          headbutt = 0,
          health = 100,
          healthBar = $('.healthBar > div'),
          healthAmount,
          actionItems = $('#actionItems > button'),
          playerOne = $('#player-1'),
          playerTwo = $('#player-2'),
          character1 = $('#character1'),
          character2 = $('#character2'),    
          difficultyMultiplier = 10,
          damageAmount;
      
      // check health of player after every hit to see if it equals 0
      function checkHealth(){
        console.log(health);
        if(health <= 0) {
          alert('You leveled up!');
          $('#replay').css({
            'display' : 'block'
          });
          replayGame();
          health = 100
          setStreak(streak + 1)
          updateStreak(streak + 1, user.id)
        }
      }
      // replay the game
      function replayGame (){
        $('#replay').on('click', function(){
          health = 100;
          $('.healthBar > div').css({
            'width' : health + '%'
          });
          $('.healthAmount').text(health);
          console.log(health);
          $(this).css({
            'display': 'none'
          });
          endOfGame();
        });
      }
      // initiate punch
      function punchAction (){
        // define punch random number
        punch = 1 + Math.floor(Math.random() * punchBase);
        // define new health
        health = health - punch;  
        runHealth();
        console.log(punch)
        if(punch >= (punchBase - 5)) {
          console.log('lethal punch!')
          $('.lethalHit').text('Lethal Punch!')
        }
      }
      // initiate kick
      function kickAction (){
        // define kick random number
        kick = 1 + Math.floor(Math.random() * kickBase)
        // define new health
        health = health - kick;
        runHealth();
        console.log(kick)
        if(kick >= (kickBase - 5)) {
          console.log('lethal kick!!')
          $('.lethalHit').text('Lethal Kick!')
        }
      }
      // initiate headbutt
     function headbuttAction (){
        // define headbutt random number
        headbutt = 1 + Math.floor(Math.random() * headbuttBase);
        // define new health
        health = health - headbutt;
        runHealth();
        console.log(headbutt)
        if(headbutt >= (headbuttBase - 5)) {
          console.log('lethal headbutt!!')
          $('.lethalHit').text('Lethal Headbutt!')
        }
      }
      // remove health based upon defined variable
      function runHealth (){
        healthBar.css({
          'width' : health + '%'
        });
        checkHealth();
        var healthText = health * difficultyMultiplier;
        healthText = Math.floor(healthText);
        healthAmount.text(healthText);
        console.log(healthText + '   | testing healthText');
        console.log(health + '   | testing health')
        damageAmount.prepend('<div class="fadeOutStagger"><p>' + health + '</p><span>damage done!</span></div>');
      }
      
      function endOfGame(){
        document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 65:
          case 83:
          case 68:
          case 74:
          case 75:
          case 76:
             e.preventDefault();
            break;
        }
        }
      }
      document.onkeydown = function(e) {
        // alert(e.keyCode)
        var character1LP = character1.position();
        var character2LP = character2.position();
        console.log(character1LP);
        console.log(e.keyCode);
        switch (e.keyCode) {
          case 67:
          case 86:
          case 66:
            // re-define player two variables
            healthBar = playerTwo.find('.healthBar > div');
            healthAmount = playerTwo.find('.healthAmount');
            damageAmount = playerTwo.find('.damageAmount');
            switch (e.keyCode) {
              case 66: //B
              kickAction()
                $('#keyD > span').addClass('active');
                setTimeout(function(){
                  $('#keyD > span').removeClass('active');
                }, 150);
                character1.addClass('kick');
                setTimeout(function(){
                  character1.removeClass('kick');
                }, 500);
                break;
              case 86: //S
              headbuttAction()
                $('#keyS > span').addClass('active');
                setTimeout(function(){
                  $('#keyS > span').removeClass('active');
                }, 150);
                character1.addClass('heavy');
                setTimeout(function(){
                  character1.removeClass('heavy');
                }, 500);
                break;
              case 67: //C
              punchAction()
                $('#keyA > span').addClass('active');
                setTimeout(function(){
                  $('#keyA > span').removeClass('active');
                }, 150);
                character1.addClass('punch');
                setTimeout(function(){
                  character1.removeClass('punch');
                }, 500);
                break;

            }
            break;
          case 74:
          case 75:
          case 76:
            // redefine player one variables
            healthBar = playerOne.find('.healthBar > div');
            healthAmount = playerOne.find('.healthAmount');
            damageAmount = playerOne.find('.damageAmount');
            switch(e.keyCode) {
              case 74: //J
              kickAction()
                $('#keyJ > span').addClass('active');
                setTimeout(function(){
                  $('#keyJ > span').removeClass('active');
                }, 150);
                character2.addClass('kick');
                setTimeout(function(){
                  character2.removeClass('kick');
                }, 500);
                
                break;
              case 75: //K
              headbuttAction()
                $('#keyK > span').addClass('active');
                setTimeout(function(){
                  $('#keyK > span').removeClass('active');
                }, 150);
                character2.addClass('heavy');
                setTimeout(function(){
                  character2.removeClass('heavy');
                }, 500);
                
                break;

              case 76: //L
               punchAction() 
                $('#keyL > span').addClass('active');
                setTimeout(function(){
                  $('#keyL > span').removeClass('active');
                }, 150);
                character2.addClass('punch');
                setTimeout(function(){
                  character2.removeClass('punch');
                }, 500);
                break
            }
            break;
            // definemovement
            case 68:
              
            character1.css({
              'left':character1LP.left + 100 + 'px'
            });
            character1.addClass('walk');
            setTimeout(function(){
              character1.removeClass('walk');
            }, 1000);
            break;
            case 65:
              character1.css({
                'left':character1LP.left - 100 + 'px'
              });
              character1.addClass('walk');
            setTimeout(function(){
              character1.removeClass('walk');
            }, 1000);
            break;
            case 39:
              character2.css({
                'left':character2LP.left + 100 + 'px'
              });
              character2.addClass('walk');
              setTimeout(function(){
                character2.removeClass('walk');
              }, 1000);
            break;
            case 37:
              character2.css({
                'left':character2LP.left - 100 + 'px'
              });
              character2.addClass('walk');
              setTimeout(function(){
                character2.removeClass('walk');
              }, 1000);
            break;      
            
        }
      };
    })

    





    
    

    return (


      <div>



<div class="player">
      <h2> {user.name}</h2>
      <h2 class="level">lvl. {streak}</h2>
      <div class="healthAmount">1000</div>
      <div class="damageAmount"></div>
      <div class="healthBar">
        <div></div>
      </div>
      <div class="lethalHit"></div>
    </div>
    <div class="player">
      <h2>Player 2</h2>
      <h3>.</h3>
      <div class="healthAmount">1000</div>
      <div class="damageAmount"></div>
      <div class="healthBar">
        <div></div>
      </div>
      <div class="lethalHit"></div>
    </div>


    <div class="characterWrapper">
      <div class="character" id="character1"></div>
      <div class="character" id="character2"></div>
    </div>

    <div id="set">
      <div id="background">
        <div id="sky"></div>
        <div class="cloudBunch"></div>
        <div class="cloudBunch"></div>
        <div class="cloudBunch"></div>
      </div>
      <div id="middleGround">
        <div id="horizonGroup">

        </div>
      </div>
      <div id="foreground"></div>
    </div>
      <div class="spacer"></div>
    <div class="controls">
      
      <div id="firstPlayerControls">
        
        <button id="keyC" class= "actiontype">C = atk 1</button>
        <button id="keyV" class="actiontype">V = atk 2</button>
        <button id="keyB" class="actiontype">B = atk 3</button>
      </div>
      <div id="secondPlayerControls">
      <button id="keyC" class= "actiontype">J = atk 1</button>
        <button id="keyV" class="actiontype">K = atk 2</button>
        <button id="keyB" class="actiontype">L = atk 3</button>
      </div>
    </div>



    




  </div>





    









    );

}






export default FighterCard;