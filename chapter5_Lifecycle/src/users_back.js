"use strict";
import React from 'react';


export default class Users extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        users: [],
      }
    }
    componentDidMount() {
      fetch("http://127.0.0.1:8080/src/real_user_data.json")
        .then((response)=>response.json())
        .then((user_list)=>this.setState({ users: user_list}))
    }

    render() {
      return <div className="container">
        <h1>List of Users</h1>
        <table className="table-striped table-condensed table table-bordered table-hover">
          <tbody>{this.state.users.map((user)=>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td> {user.email}</td>
              <td> {user.ip_address}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    }
  }