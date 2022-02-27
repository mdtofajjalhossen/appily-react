import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import aboutLeft from '../../Asset/image/about/about-left-img.png'
import authorImg from '../../Asset/image/about/about-author.jpg'
import authorBrand from '../../Asset/image/about/brand-about.png'

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <div className="about_wrap" id="About">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col lg={6} md={8} >
                                <div className="about_left">
                                    <img className="img-fluid" src={aboutLeft} alt="about image"/>
                                </div>
                            </Col>
                            <Col lg={6} md={10}>
                                <div className="about_right">
                                    <div className="CommonDesignWrap">
                                        <h5 className="CommonMiniHeading"> About</h5>
                                        <h2 className="CommonMainHeading mb-4"> Get an amazing experience with quality level <span>team</span></h2>
                                        <p className="service_pra">Product services are professional services that help market or advertise your business online. Best Way to Manage and Share Work Resources.</p>
                                    </div>
                                    <a className="primary_Btn">Get Started Now</a>
                                    <div className="about_author">
                                        <div className="author_img">
                                            <img src={authorImg} alt="author image"/>
                                        </div>

                                        <div className="author_des">
                                            <h5>Md Tofajjal Hossen</h5>
                                            <p>Front-End Developer</p>
                                        </div>

                                        <div className="author_brand">
                                            <img src={authorBrand} alt="author image"/>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default AboutUs;