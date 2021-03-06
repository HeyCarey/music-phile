import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Menu, Container, Button } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
          <img src="/assets/logo.png" alt="logo" />
          Audio-Phile
          </Menu.Item>

          <Menu.Item name="Create a Record" as={Link} to='/input' />

          <Menu.Item name="Catalog" as={Link} to='/records' />

          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
          </Menu.Item>
        </Container>
      </Menu>
        )
    }
}


export default NavBar;