import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import tstOneImg from '../../Asset/image/testimonial-one.jpg'
import tstTwoImg from '../../Asset/image/testimonial-two.jpg'
import tstThreeImg from '../../Asset/image/testimonial-three.jpg'
import clientOne from '../../Asset/image/client/1.png'
import clientTwo from '../../Asset/image/client/2.png'
import clientThree from '../../Asset/image/client/3.png'
import clientFour from '../../Asset/image/client/4.png'
import clientFive from '../../Asset/image/client/5.png'

class Testimonial extends Component {
    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div className="testimonial_section" id="Testimonial">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="CommonDesignWrap">
                                    <h5 className="CommonMiniHeading"> Testimonials</h5>
                                    <h2 className="CommonMainHeading mb-5"> Clients <span>feedbacks</span></h2>
                                </div>
                                <div className="testimonial_Progress_wrap">
                                    <div className="line_one"></div>
                                    <div className="line_two"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="testimonial_wrap mt-5">
                            <Slider {...settings}>
                                <div className="testimonial_box">
                                    <div className="tst_author_img">
                                        <img src={tstOneImg} alt=" Testimonial Image"/>
                                    </div>
                                    <div className="test_content">
                                        <p>”Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Betakit.”</p>
                                        <div className="tst_author_info">
                                            <h3>Robert Jonson</h3>
                                            <span>Founder and CEO</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial_box">
                                    <div className="tst_author_img">
                                        <img src={tstTwoImg} alt="Testimonial Image"/>
                                    </div>
                                    <div className="test_content">
                                        <p>”Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Betakit.”</p>
                                        <div className="tst_author_info">
                                            <h3>Itomish</h3>
                                            <span>Director</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial_box">
                                    <div className="tst_author_img">
                                        <img src={tstThreeImg} alt="Testimonial Image"/>
                                    </div>
                                    <div className="test_content">
                                        <p>”Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Betakit.”</p>
                                        <div className="tst_author_info">
                                            <h3>Williamson</h3>
                                            <span> CEO</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonial_box">
                                    <div className="tst_author_img">
                                        <img src={tstOneImg} alt="Testimonial Image"/>
                                    </div>
                                    <div className="test_content">
                                        <p>”Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Betakit.”</p>
                                        <div className="tst_author_info">
                                            <h3>Anmona</h3>
                                            <span>Founder</span>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </Row>
                    {/*    slick slider row end*/}

                        <Row className="client_logo_divide">
                            <div className="client_logo_features">
                                <img src={clientOne} alt="client logo"/>
                            </div>

                            <div className="client_logo_features">
                                <img src={clientTwo} alt="client logo"/>
                            </div>


                            <div className="client_logo_features">
                                <img src={clientThree} alt="client logo"/>
                            </div>

                            <div className="client_logo_features">
                                <img src={clientFour} alt="client logo"/>
                            </div>

                            <div className="client_logo_features">
                                <img src={clientOne} alt="client logo"/>
                            </div>
                        </Row>
                        
                        
                    </Container>
                </div>
                
            </Fragment>
        );
    }
}

export default Testimonial;