 import  React from 'react';



export default class Users extends React.Component {
  
  componentDidMount() {
    fetch(this.props['data_url'])
      .then(response => response.json() 
      )
      .then((users)=>console.log(users))
  };
  render(){return 0}
}




















/*
  render() {
    return <div className="container">
      <h1>List of Users</h1>
      <table className="table-striped table-condensed table table-bordered table-hover">
        <tbody>{this.state.users.map((user)=>
          <tr key={user.id}>
            <td>{user.first_name} {user.last_name}</td>
            <td> {user.email}</td>
            <td> {user.ip_address}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}
*/