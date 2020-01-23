import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import '../footer/styles.css';

import logo from '../footer/image/logo512.png';


const FooterContent = () => {
  return (
    <MDBFooter className="footer-content font-small pt-4">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6" className="text-center">

            <img src={logo} className="espacamento"></img>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="titlefooter text-center">Contatos</h5>
            <ul className="centralizar">
              <li className="list-unstyled">
                <a href="https://www.facebook.com/cyanmarketingdigital"><MDBIcon fab icon="facebook" size="2x" className="blue-text" /> &nbsp;&nbsp;&nbsp;&nbsp;FACEBOOK</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/cyan_oficial/"><MDBIcon fab icon="instagram" size="2x" className="blue-text ml-2" />&nbsp;&nbsp;&nbsp;&nbsp;INSTAGRAM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="linkedin" size="2x" className="blue-text mr-2" />&nbsp;&nbsp;&nbsp;LINKEDIN</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.behance.net/cyandigital"><MDBIcon fab icon="behance" size="2x" className="blue-text mr-2" />&nbsp;BEHANCE</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Cyan Marketing Digital &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterContent;