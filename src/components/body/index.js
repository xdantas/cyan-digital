import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body/styles.css';
import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

import wallpaper from '../body/image/wallpaper.png';
import wallpaper2 from '../body/image/wallpaper2.png';


import icon1 from '../body/image/programacao.png';
import icon2 from '../body/image/designgrafico.png';
import icon3 from '../body/image/webdesign.png';

import inove from '../body/image/home_inova.png';

import tipmart from '../body/image/tipmart.png';
import openheart from '../body/image/openheart.png';
import ac from '../body/image/agilecards.png';
import panfleto1 from '../body/image/panfleto.png';
import panfleto2 from '../body/image/panfleto2.png';
import logotipmart from '../body/image/tipmartlogo.png';

import logo1 from '../body/image/LOGO1.png';
import logo2 from '../body/image/LOGO2.png';
import logo3 from '../body/image/LOGO3.png';
import logo4 from '../body/image/LOGO4.png';


const BodyContent = () => (
    <body>
        <Container fluid={true} style={{ color: "black" }}>
            <Row>
                <MDBView src={wallpaper} className="wallpaper-home">
                    <svg width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                        <path d="M0 0 L50 90 L100 0 V100 H0" />
                    </svg>

                    <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                    <h2 className="title">Soluções digitais</h2>
                    <h5 className="text">Apresentamos soluções para Marketing Digital em todo o Brasil, principalmente em desenvolvimento de sites, identidades visuais, web design, gestão de redes sociais e muito mais!</h5>
                    </MDBMask>
                </MDBView>
                
            </Row>

            {/* <Row>
                
            <svg id="" preserveAspectRatio="xMidYMax meet" className="svg-separator sep4" viewBox="0 0 1600 200" data-height="200">
                <polygon className="path1" points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 "></polygon> 
                <polygon className="path2" points="800,172 886,86 900,86 800,186 700,86 714,86 "></polygon> 
                <polygon className="path3" points="800,162 876,86 888,86 800,174 712,86 724,86 "></polygon>
            </svg>
            </Row> */}

            <MDBRow className="agencia_inove">
                <MDBCol className="agencia_inove_espacamento" md="6" >
                    <h1>A Agência de
                        Marketing Digital</h1>
                    <div className="borda"></div>
                    <p>Somos uma equipe capacitada em atender todas as demandas e questionamentos dos nossos clientes, com o intuito de produzir o melhor resultado para eles.</p>
                </MDBCol>
                <MDBCol className="agencia_inove_espacamento" md="6">
                    <img src="https://www.seekpng.com/png/full/355-3550412_contact-us-today-to-see-how-we-can.png"></img>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol size="12" className="borda_solucoes_cima">
                </MDBCol>
            </MDBRow>


            <Row>
                <MDBView src={wallpaper2} className="content_products">
                    <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                        <Col lg="12" className="text-center flex-center flex-column" align="center">
                            <div className="solucoes_title">
                            Principais <strong>Soluções</strong>
                            </div>
                        
                            <Row>
                                <Col xs lg="4">
                                    <div className="solutions_icons">
                                        <div className="alinhar-imagem-solucoes"><img src={icon1}></img></div>
                                        <h4 className="subtitle">Sistemas <strong>Web</strong></h4>
                                            <div className="borda"></div>
                                        <p>Necessita de um sistema online? Conte conosco para desenvolver um sistema web que atenda seus expectativas!</p>
                                    </div>
                                </Col>
                                <Col xs lg="4">
                                    <div className="solutions_icons">
                                        <img src={icon2}></img>
                                        <h4 className="subtitle">Redes <strong>Sociais</strong></h4>
                                            <div className="borda"></div>
                                        <p>Criação de postagens, elaboração de imagens e stories para atingir ainda mais o público de sua marca!</p>
                                    </div>
                                </Col>
                                <Col xs lg="4">
                                    <div className="solutions_icons">
                                        <img src={icon3}></img>
                                        <h4 className="subtitle">Web <strong>Designer</strong></h4>
                                            <div className="borda"></div>
                                        <p>Precisa de uma nova identidade para sua marca? Conte com nossa equipe para realizar os serviços necessários para ela!</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </MDBMask>
                </MDBView>

            </Row>

            <MDBRow>
                <MDBCol size="12" className="borda_servico_cima">
                </MDBCol>
            </MDBRow>

            <Row>
                <ul className="gallery_box">

                    <li>
                        <a><img src={tipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">TIPMART</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a><img src={openheart}></img>
                            <div className="box_data">
                                <span className="boxtitle">OPEN HEART</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a><img src={ac}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO AGILE CARDS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a><img src={panfleto1}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO S.I.</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a><img src={panfleto2}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO N&N REPAROS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a><img src={logotipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO TIPMART</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </Row>

            <MDBRow>
                <MDBCol size="12" className="borda_marca1">
                </MDBCol>
            </MDBRow>

                <MDBRow>                 
                    <MDBCol md="12" className="confia-content text-center">
                        <MDBRow>
                        <MDBCol md="12">
                           <h1 className="confia-content-title">Quem <strong>Confia</strong></h1>
                           <div className="borda"></div>
                        </MDBCol>   
                            <MDBCol size="3">
                                <img src={logo1}></img>
                            </MDBCol>
                            <MDBCol size="3">
                                <img src={logo2}></img>
                            </MDBCol>
                            <MDBCol size="3">
                                <img src={logo3}></img>
                            </MDBCol>
                            <MDBCol size="3">
                                <img src={logo4}></img>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

            <MDBRow>
                <MDBCol size="12" className="borda_marca2">
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol size="12">

                </MDBCol>
            </MDBRow>

        </Container>
    </body>
);

export default BodyContent;