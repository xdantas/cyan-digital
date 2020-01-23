import React from "react";
import '../descriptions/style.css';

import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

import wallpaper from '../descriptions/image/wallpaper-top.png';
import missao from '../descriptions/image/missao.png';
import visao from '../descriptions/image/visao.png';
import valores from '../descriptions/image/valores.png';


class Descriptions extends React.Component {


    render() {
        return (
            <MDBContainer fluid={true}>
                    <Row>
                        <MDBView src={wallpaper} className="wallpaper-home">
                            <svg width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                                <path d="M0 0 L50 90 L100 0 V100 H0" />
                            </svg>

                            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                            <h2 className="title">Sobre nós</h2>
                            <h5 className="text">Conheça um pouco sobre a nossa empresa, quais os nossos valores e prioridades com o cliente.</h5>
                            </MDBMask>
                        </MDBView>
                        
                    </Row>

                    <MDBRow className="quem-somos-content">
                            <MDBCol className="quem-somos-espacamento" md="6">
                                <img src="https://pngimage.net/wp-content/uploads/2018/05/executive-business-png-7.png"></img>
                            </MDBCol>
                            <MDBCol className="quem-somos-espacamento" md="6" >
                                <h1>Quem <strong>somos</strong></h1>
                                <div className="borda"></div>
                                <p>Somos uma equipe capacitada em atender todas as demandas e questionamentos dos nossos clientes, com o intuito de produzir o melhor resultado para eles.</p>
                            </MDBCol>
                    </MDBRow>

                        <MDBRow>
                            <MDBCol size="12" className="borda-quem-somos-baixo"></MDBCol>
                        </MDBRow>

                    <MDBRow>                    
                        <MDBCol md="12" className="valores-content text-center">
                            <MDBRow>
                                <MDBCol size="4">
                                    <img src={missao}></img>
                                    <div className="valores-content-title">Missão</div>
                                    <div className="borda"></div>
                                    <div className="valores-content-text">
                                        Planejar e executar soluções unindo <strong>rigor técnico</strong> e <strong>agilidade de execução</strong> através de uma equipe que dedicará alto desempenho para prover o melhor serviço ao cliente.
                                    </div>
                                </MDBCol>
                                <MDBCol size="4">
                                    <img src={visao}></img>
                                    <div className="valores-content-title">Visão</div>
                                    <div className="borda"></div>
                                    <div className="valores-content-text">
                                        Tornar-se <strong>referência de atuação</strong> para o ambiente corporativo, através da <strong>excelência em soluções digitais</strong>, contribuindo para que o cliente alcance seus melhores resultados.
                                    </div>
                                </MDBCol>
                                <MDBCol size="4">
                                    <img src={valores}></img>
                                    <div className="valores-content-title">Valores</div>
                                    <div className="borda"></div>
                                    <div className="valores-content-text">
                                        Nossas principais crenças se baseiam no <strong>trabalho em equipe</strong>, <strong>ética</strong>, <strong>criatividade e inovação</strong>, <strong>paixão</strong>, <strong>confiança</strong> e acima de tudo <strong>respeito e transparência</strong>.
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                        <MDBRow>
                            <MDBCol size="12" className="borda-quem-somos-baixo"></MDBCol>
                        </MDBRow>

            </MDBContainer >
        );
    }
}


export default Descriptions;

