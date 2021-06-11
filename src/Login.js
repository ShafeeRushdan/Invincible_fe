import React, { useState } from "react";

function Login(props) {




  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
   
    
    localStorage.setItem("currentUser", name)
    // add localStorage.clear() to log out function 


    props.handleLogIn(name)







  }
  console.log(props.handleLogIn)





  const handleOnChangeN = (e) => {

    setName(e.target.value)

  }

  const handleOnChangeP = (e) => {

    setPassword(e.target.value)

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please sumbit your name & password</h2>
      <label>
        Name
        <ul></ul>
        <input
          type="text"
          value={name}
          onChange={handleOnChangeN}
        />

      </label>
      <ul></ul>
      <label>
        Password
        <ul></ul>
        <input
          type="text"
          value={password}
          onChange={handleOnChangeP}
        />

      </label>
      <ul></ul>
      <button type="submit"> Submit</button>
    </form>



  );
}

export default Login;




















