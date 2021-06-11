import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function Choose() {
  
  const [users, setUsers] = useState()
  const history = useHistory();
  
  
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

    const handleDelete = (e,id) => { 
      fetch("http://localhost:3000/users/remove/" + id)
      .then((r) => r.json())
      .then((data) => {
        setUsers(data)
        let path = `/`;
        history.push(path);
      });
    }

  
  return (
<div >
<h2>Click name to delete profile!</h2>
<ul id="menu">
    {users ? users.map(user => {
      return <li class="card" key={user.id}>  
      <button class="delete" onClick={(e)=> {handleDelete(e,user.id)}}>{user.name}</button>  
     <h2>status: {user.profile}</h2>
     <br></br><h2> lvl. {user.streak}</h2></li>;
    
       
    }) : null}
  </ul>
  
  
  </div>


      
  );
}

export default Choose;




















