import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state={
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


  render () {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <img className="logo" src='assets/logo.png' alt='bunnylogo' />
              <Nav navbar className="mr-auto">
                <NavItem>
                  <NavLink className="nav-link navtext" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link navtext" to="/application">
                    Application
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link navtext" to="/process">
                    Process
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link navtext" to="/demo">
                    Demo
                  </NavLink>
                </NavItem>
              </Nav>
              </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
