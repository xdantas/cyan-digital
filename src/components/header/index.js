import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { Link } from 'react-router-dom';
import logo from '../header/image/logo192.png';
import '../header/styles.css';
import 'typeface-roboto';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>

          <MDBNavbar color="grey darken-4" className="teste" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
              <img src={logo} className="img_logo_nav" />
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right className="espacamento-direita">
                <MDBNavItem>
                  <MDBNavLink to="/">HOME</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="service">SERVIÇOS</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="quem-somos">SOBRE NÓS</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="contact">CONTATO</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>



        </header>
      </div>
    );
  }
}

export default Header;