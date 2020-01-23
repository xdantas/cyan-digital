import React, { Fragment } from "react";
import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import { MDBCarouselCaption, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import { MDBJumbotron, MDBCardTitle, MDBIcon } from "mdbreact";
import './styles.css';

import wallpaper from '../body/image/wallpaper3.png';

import web from '../service/img/des-web.png';
import design from '../service/img/web-design.png';
import seo from '../service/img/SEO.png';
import uxui from '../service/img/uxui.png';
import branding from '../service/img/branding.png';
import sociais from '../service/img/REDES.png';

class Service extends React.Component {
    render() {
        return (
            <MDBContainer fluid={true}>
                <MDBRow>
                    <MDBView src={wallpaper} className="wallpaper-home triangle">
                        <svg width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                            <path d="M0 0 L50 90 L100 0 V100 H0" />
                        </svg>

                        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                        <h2 className="title">Serviços</h2>
                        <h5 className="text">Veja o que podemos oferecer para o seu negócio, consulte todos os tipos de atendimentos que podemos apresentar para você.</h5>
                        </MDBMask>
                    </MDBView>
                </MDBRow>

                <MDBRow className="bg_servicos">

                    <MDBCol md="5" className="text-servicos text-white">
                        <h1>As Melhores soluções geram as <strong>Melhores Experiências.</strong></h1>
                        <div className="borda"></div>
                        <p>Oferecemos os mais diversos tipos de soluções buscando apresentar um serviço com qualidade e eficiência ao cliente.</p>

                    </MDBCol>
                    <MDBCol md="7" className="cards">
                        <MDBRow>
                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Sistemas
                                                </h2>
                                                <h1>
                                                    Web
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Sistemas Web</h1>
                                        <p>Criação de site,</p>
                                        <p>blog, portfólio,</p>
                                        <p>e outros tipos de</p>
                                        <p>sistemas.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                    <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Web
                                                </h2>
                                                <h1>
                                                    Design
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Web Design</h1>
                                        <p>Criação de logotipo,</p>
                                        <p>panfleto, banner</p>
                                        <p>e outros tipos de</p>
                                        <p>serviços.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Otimização
                                                </h2>
                                                <h1>
                                                    SEO
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>SEO</h1>
                                        <p>Otimizações para</p>
                                        <p>melhorar o</p>
                                        <p>posicionamento</p>
                                        <p>em pesquisas.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Análise
                                                </h2>
                                                <h1>
                                                    UX/UI
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>UX/UI</h1>
                                        <p>Desenvolvimento de</p>
                                        <p>interfaces para</p>
                                        <p>melhorar a usabilidade</p>
                                        <p>do usuário.</p>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Gestão de
                                                </h2>
                                                <h1>
                                                    Branding
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                    <h1>Branding</h1>
                                        <p>Aplicação de atividades</p>
                                        <p>e serviços para</p>
                                        <p>auxiliar a gestão</p>
                                        <p>de sua marca.</p>
                                    </div>
                                </div>
                            </MDBCol>
                            
                            <MDBCol md="4" className="flip-card">
                                <div className="flip-card-inner">
                                <div style={{ width: "100%" }} className="flip-card-front">
                                        <div className="img-fluid">
                                            <div className="dentro_card">
                                                <h2>
                                                    Redes
                                                </h2>
                                                <h1>
                                                    Sociais
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                    <h1>Redes Sociais</h1>
                                        <p>Realização de postagens,</p>
                                        <p>imagens, stories e</p>
                                        <p>outros serviços em</p>
                                        <p>redes sociais.</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol size="12" className="borda_servicos_baixo"></MDBCol>

                    <MDBCol md="12" className="happy-company">
                        <h1 className="happy-company_title">Qualidade e eficiência para o seu <strong>negócio</strong></h1>
                        <div className="borda"></div>
                        <p className="happy-company_text">Para que a sua empresa ofereça uma experiência digital marcante, a Cyan coloca à sua disposição
                             a melhor equipe de especialistas em mídias digitais e as últimas inovações tecnológicas,
                            todos engajados em proporcionar os melhores resultados e a plena satisfação do seu cliente
                            ao pesquisar sobre seus produtos ou serviços. </p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12" className="borda_consultoria_cima"></MDBCol>
                </MDBRow>
                
            </MDBContainer>
        );
    }
}

export default Service;

