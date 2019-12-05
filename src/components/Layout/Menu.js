import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
class MainMenu extends React.Component {  
  render()
  {
    return(
      <Container className="navbar-container" style={{paddingTop:"25px"}}>
        <Navbar id="responsive-navbar-nav">
        <Nav className="ml-auto" >
            <Link to="/">
                <h1 className="title active">Home</h1>
            </Link>
        </Nav>
        <Nav className='second-item-right'>
            <Link to="/Favorites">
                <h1 className="title active">Favorites</h1>
            </Link>
        </Nav>
    </Navbar>
        </Container>
    );
  }
}

 export default MainMenu;