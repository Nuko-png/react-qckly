"use strict";
import React, { useState, useEffect } from 'react';


function Users ({data_url}){
  const [users, compDMount] = useState([]);
  
  useEffect ( () => {
          loadData();
},[]);
  useEffect (()=>
              window.addEventListener('beforeunload', confirmLeave)
  )


function loadData() {
          fetch(data_url)
          .then(response => response.json())
          .then(user_list => compDMount(user_list))
}

function confirmLeave(e) {
  let confirmationMessage = 'Do you really want to close?';
  e.returnValue = confirmationMessage;
  return confirmationMessage;

}


  return ( <div className="container">
  <h1>List of Users</h1>
  <table className="table-striped table-condensed table table-bordered table-hover">
    <tbody>{users.map((user)=>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name} {user.last_name}</td>
        <td> {user.email}</td>
        <td> {user.ip_address}</td>
      </tr>)}
    </tbody>
  </table>
</div>
  )
}
export default Users;