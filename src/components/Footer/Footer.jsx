import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import footerLogo from '../../Asset/image/logo-white.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF,faYoutube,faTwitter,faLinkedinIn,faPinterest} from "@fortawesome/free-brands-svg-icons";
import {faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import postImg from '../../Asset/image/post-bg-.jpg'
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer_wrapper" id="Contact">
                    <div className="footer_top">
                        <Container>
                            <Row>
                                <Col md={2} sm={12}>
                                    <div className="footer_logo">
                                        <a href="/"><img src={footerLogo} alt="Footer Logo"/></a>
                                    </div>
                                </Col>
                                <Col md={10} sm={12}>
                                    <div className="footer_social_icon">
                                        <ul>
                                            <li>
                                                <a> <FontAwesomeIcon className="" icon={faFacebookF} /></a>
                                            </li>
                                            <li>
                                                <a> <FontAwesomeIcon className="" icon={faYoutube} /></a>
                                            </li>
                                            <li>
                                                <a> <FontAwesomeIcon className="" icon={faTwitter} /></a>
                                            </li>
                                            <li>
                                                <a> <FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                                            </li>
                                            <li>
                                                <a> <FontAwesomeIcon className="" icon={faPinterest} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                {/*    footer widget */}
                    <div className="footer_widget">
                        <Container>
                            <Row>
                                <Col xl={3} md={6}>
                                    <div className="widget_single">
                                        <h3>About us</h3>
                                        <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    </div>
                                </Col>
                                <Col xl={3} md={6}>
                                    <div className="widget_single">
                                        <h3>Services</h3>
                                        <ul>
                                            <li><a href="#">SEO Marketing</a></li>
                                            <li><a href="#">Game Development</a></li>
                                            <li><a href="#">StreamingWeb</a></li>
                                            <li><a href="#">Email Marketing</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xl={3} md={6}>
                                    <div className="widget_single">
                                        <h3>Newsfeed</h3>
                                        <ul>
                                            <li className="newsfeed">
                                                <div className="post_newsfeed">
                                                    <img src={postImg} alt="post image"/>
                                                </div>
                                                <div className="post_des">
                                                    <p>23th Feb 2022</p>
                                                    <h5>Chemical Engineering Projects For All.</h5>
                                                </div>
                                            </li>

                                            <li className="newsfeed">
                                                <div className="post_newsfeed">
                                                    <img src={postImg} alt="post image"/>
                                                </div>
                                                <div className="post_des">
                                                    <p>23th Feb 2022</p>
                                                    <h5>Chemical Engineering Projects For All.</h5>
                                                </div>
                                            </li>

                                            <li className="newsfeed">
                                                <div className="post_newsfeed">
                                                    <img src={postImg} alt="post image"/>
                                                </div>
                                                <div className="post_des">
                                                    <p>23th Feb 2022</p>
                                                    <h5>Chemical Engineering Projects For All.</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xl={3} md={6}>
                                    <div className="widget_single">
                                        <h3>Newsfeed</h3>
                                        <ul>
                                            <li className="newsSocial">
                                                <div className="post_newsfeed">
                                                   <span><FontAwesomeIcon className="" icon={faFacebookF} /></span>
                                                </div>
                                                <div className="post_des">
                                                    <span>Office: 121 King</span>
                                                    <p> St, Melbourne Australia</p>
                                                </div>
                                            </li>

                                            <li className="newsSocial">
                                                <div className="post_newsfeed">
                                                   <span><FontAwesomeIcon className="" icon={faPhone} /></span>
                                                </div>
                                                <div className="post_des">
                                                    <a href="tel:+0123-456-7890">Phone: +0 123-456-7890</a>
                                                    <a href="tel:+0123-456-7890"> +880123-456-789</a>
                                                </div>
                                            </li>

                                            <li className="newsSocial">
                                                <div className="post_newsfeed">
                                                   <span><FontAwesomeIcon className="" icon={faEnvelope} /></span>
                                                </div>
                                                <div className="post_des">
                                                    <a href="mailto:hello@gmail.com">Email: hello@gmail.com</a>
                                                    <a href="mailto:hello@gmail.com"> hello@gmail.com</a>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                {/*    copyright*/}

                    <div className="footer_copyright">
                        <Container>
                                <div className="d-md-flex align-items-center justify-content-between">
                                    <div className="copyRights order-md-1">
                                        <p>&copy;md tofajjal hossen 2022 </p>
                                    </div>

                                    <div className="footer_menu order-md-2">
                                        <ul>
                                            <li><a href="#">Web Design</a></li>
                                            <li><a href="#">Game Development</a></li>
                                            <li><a href="#">Web Development</a></li>
                                            <li><a href="#">Email Marketing</a></li>
                                        </ul>
                                    </div>

                                </div>
                        </Container>
                    </div>
                </div>
                
            </Fragment>
        );
    }
}

export default Footer;
