import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import digitalProduct from '../../Asset/image/service/service-digital-product.png'
import gameDevelopment from '../../Asset/image/service/service-game-development.png'
import ProConsultancy from '../../Asset/image/service/service-proconsulty-bg.png'
import digitalMarket from '../../Asset/image/service/service-digital-marketing.png'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";


class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="serviceWrapper" id="Service">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={5} md={12} sm={12}>
                                <div className="CommonDesignWrap">
                                    <h5 className="CommonMiniHeading"> service</h5>
                                    <h2 className="CommonMainHeading"> We provide a wide range of digital <span>service</span></h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={6} sm={10}>
                                <div className="serviceBox mt-4">
                                    <Row className="align-items-center justify-content-start">
                                        <Col xl={6}>
                                            <div className="service_img">
                                                <img className="img-fluid" src={digitalProduct} alt="service image"/>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="service_descriptions">
                                                <h4 className="service_head">Digital Product</h4>
                                                <p className="service_pra">Product services are professional services that help market or advertise your business online.</p>
                                                <a className="service_icon" href="#"><FontAwesomeIcon icon={faAngleRight} /> Learn More</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} sm={10}>
                                <div className="serviceBox mt-4">
                                    <Row className="align-items-center justify-content-start">
                                        <Col xl={6}>
                                            <div className="service_img">
                                                <img className="img-fluid" src={gameDevelopment} alt="service image"/>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="service_descriptions">
                                                <h4 className="service_head">Game Development</h4>
                                                <p className="service_pra">Product services are professional services that help market or advertise your business online.</p>
                                                <a className="service_icon" href="#"><FontAwesomeIcon icon={faAngleRight} /> Learn More</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} sm={10}>
                                <div className="serviceBox mt-4">
                                    <Row className="align-items-center justify-content-start">
                                        <Col xl={6}>
                                            <div className="service_img">
                                                <img className="img-fluid" src={ProConsultancy} alt="service image"/>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="service_descriptions">
                                                <h4 className="service_head">ProConsultancy</h4>
                                                <p className="service_pra">Product services are professional services that help market or advertise your business online.</p>
                                                <a className="service_icon" href="#"><FontAwesomeIcon icon={faAngleRight} /> Learn More</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} sm={10}>
                                <div className="serviceBox mt-4">
                                    <Row className="align-items-center justify-content-start">
                                        <Col xl={6}>
                                            <div className="service_img">
                                                <img className="img-fluid" src={digitalMarket} alt="service image"/>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="service_descriptions">
                                                <h4 className="service_head">Digital Marketing</h4>
                                                <p className="service_pra">Product services are professional services that help market or advertise your business online.</p>
                                                <a className="service_icon" href="#"><FontAwesomeIcon icon={faAngleRight} /> Learn More</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="service_action_btn mt-4">
                                    <p>Need Help With Your IT Endeavors? Contact Us to Get a Pro Service!
                                    </p>
                                    <a href="#">Generate A Ticket</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </Fragment>
        );
    }
}

export default Services;