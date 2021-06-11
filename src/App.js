import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.scss';
import FightersContainer from "./FightersContainer";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Choose from './Choose'
import Login from './Login';
import Training from './Training';
import Edit from './Edit';
import { useHistory } from "react-router-dom";
import Sign from './Sign'


function App() {
  const [fighters, setFighters] = useState([])
  const [user, setUser] = useState(null)
  const [userFighter, setUserFighter] = useState([])
  const history = useHistory();



  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then((r) => r.json())
      .then(setFighters);
  }, []);

  // const handleLogIn = (hp) => {


  // }

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      handleLogIn(localStorage.getItem("currentUser"))
    }

  }, []);

  const handleLogIn = (name) => {
    fetch(`http://localhost:3000/users`)
      .then((r) => r.json())


      .then(userArr => {
        setUser(userArr.find(user => user.name === name))
        let path = `/`;
        history.push(path);
      });



  }



  const handleSignUp = (name, password, profile) => {
    console.log(password)
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {

        "Content-Type": "application/json"
      },

      body: JSON.stringify({ name: name, password: password, profile: profile})

    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const updateSpecialty = (specialty, id) => {

    console.log(specialty, id)

    fetch(`http://localhost:3000/fighters/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"
      },

      body: JSON.stringify({ specialty: specialty })
    })
  }
  const updateStreak = (streak, id) => {

    console.log(streak, id)
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"
      },

      body: JSON.stringify({ streak: streak })
    })


  }






  return (
    <div className="app">

      <Switch>
        <Route exact path='/'>

          <Home user={user} />
        </Route>

        <Route exact path='/home'>

          <Home user={user} />
        </Route>

        <Route exact path='/fighters'>

          <Header />
          <FightersContainer user={user} fighters={fighters} updateSpecialty={updateSpecialty} updateStreak={updateStreak} />
        </Route>

        <Route exact path='/login'>
          <Login handleLogIn={handleLogIn} />
          <Header />
        </Route>


        <Route exact path='/choose'>
          <Choose user={user} fighters={fighters} updateSpecialty={updateSpecialty} />
          <Header />
        </Route>



        <Route exact path='/training'>
          <Training user={user} />
          <Header />
        </Route>



        <Route exact path='/edit'>

          <Header />
          <Edit user={user} />
        </Route>

        <Route exact path='/sign'>

          <Header />
          <Sign handleSignUp={handleSignUp} />
        </Route>



      </Switch>
    </div>
  );
};



export default App;
