const React = require('react')
const { Switch} = require('react-router-dom')
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export default class Content extends React.Component {

  render() {
    return (
      <div>
                  <Navbar bg="dark" variant="dark">
        <Switch>
        <React.Fragment>
    <Nav variant="pills" activeKey={location.pathname} >

        <LinkContainer to="/home">
        <Nav.Link eventKey="home" >Home</Nav.Link>
        </LinkContainer>
     
        <LinkContainer to="/about">
        <Nav.Link eventKey="about">About</Nav.Link>
        </LinkContainer>
     
        <LinkContainer to="/contact">
        <Nav.Link eventKey="contact">Contact</Nav.Link>
        </LinkContainer>
      
    </Nav>
    </React.Fragment>
    </Switch>
   </Navbar>
   </div>
    )
  }
}