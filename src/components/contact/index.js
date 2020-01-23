import React from "react";
import '../contact/styles.css';
import slide3 from '../body/image/slide3.png';
import gif from '../contact/img/gif.gif';
import axios from 'axios';
import wallpapercontact from '../contact/img/wallpaper-contact.png';

import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import { MDBJumbotron, MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

class Descriptions extends React.Component {


    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name == "" || email == "" || message == "") {
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Preencha Todos os Campos!',
                text: 'Click aqui para continuar',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
            return
        } else {

            axios({
                method: "POST",
                url: "http://localhost:3002/send",
                data: {
                    name: name,
                    email: email,
                    messsage: message
                }
            }).then((response) => {
                if (response.data.msg === 'success') {
                    const Swal = require('sweetalert2');
                    Swal.fire({
                        title: 'Ebaa! Seus dados foram enviados',
                        text: 'Entraremos em Contato com você.',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    })
                    this.resetForm()
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }


    render() {
        return (
            <MDBContainer fluid={true}>

                    <Row>
                        <MDBView src={wallpapercontact} className="wallpaper-home">
                            <svg width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                                <path d="M0 0 L50 90 L100 0 V100 H0" />
                            </svg>

                            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                            <h2 className="title">Entre em contato</h2>
                            <h5 className="text">Nos envie já uma mensagem ou se preferir entre em contato por meio de nossas redes sociais.</h5>
                            </MDBMask>
                        </MDBView>
                        
                    </Row>


                <form className="needs-validation" noValidate onSubmit={this.handleSubmit.bind(this)} method="POST" id="contact-form">
                    <MDBRow className="contato-content">
                        <MDBCol md="6" className="contato-content-espacamento">
                                <h1>Envie uma <strong>mensagem</strong></h1>
                                <div className="borda"></div>
                                <p>Ficou interessado em nossos serviços? Entre já em contato conosco por meio deste formulário, iremos atender você o mais rápido possível!</p>
                        </MDBCol>
                        <MDBCol md="6" className="form-contact text-white">
                            <MDBRow>
                                <MDBCol md="12">
                                    <p>Nome</p>
                                    <MDBInput type="name" label="Digite seu nome" id="name" outline />
                                </MDBCol>
                                <MDBCol md="12">
                                    <p>Email</p>
                                    <MDBInput type="email" label="Digite seu email" id="email" outline />
                                </MDBCol>

                                <MDBCol md="12">
                                    <p>Mensagem</p>
                                    <MDBInput type="textarea" label="Digite sua Mensagem" id="message" name="message" outline />
                                </MDBCol>
                            </MDBRow>
                            <MDBBtn color="primary" type="submit">
                                Enviar
                                    </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>


                <MDBRow>
                    <MDBCol size="12" className="contato-borda-baixo"></MDBCol>
                </MDBRow>


            </MDBContainer >
        );
    }
}


export default Descriptions;

