import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Container,
  } from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen : false
    }

    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render() {
        return (
            <div>
              <Navbar color = "dark" expand = "sm"  className = "mb-4" >
                <Container className = "header" >
                
                  <NavbarBrand style = {{color : "white", fontSize : "1.5rem"}} href ="/">Todolist &nbsp; <i class="fa fa-list-ul" aria-hidden="true"></i></NavbarBrand>

                  <NavbarBrand>
                        <a className= "text-decoration-none" style = {{color : "white"}} href="https://github.com/sihmarradha">Contact Developer &nbsp;
                        <i  class="fa fa-github" aria-hidden="true"></i> </a>
                  </NavbarBrand>          
                </Container>     
              </Navbar>
                
            </div>
        )
    }
}

export default AppNavbar
