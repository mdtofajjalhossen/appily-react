import React, {Component, Fragment} from 'react';
import '../../Asset/css/bootstrap.min.css'
import '../../Asset/css/style.css'
import {Col, Container, Row} from "react-bootstrap";
import heroRightBg from '../../Asset/image/hero-01.png'

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="TopFixedBanner">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={5}>
                                <div className="hero_left_content">
                                    <p className="hero_pra">It ' s a lot easy to make a difference togather.</p>
                                    <h1 className="hero_main_heading">
                                        Replication is the<br/> presentation of<br/>our <span>capabilities</span>
                                    </h1>
                                    <div className="hero_btn">
                                        <a className="primary_Btn">Get Started Now</a>
                                        <a className="Secondary_btn">Learn More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} md={12}>
                                <div className="hero_right_content">
                                    <img className="img-fluid" src={heroRightBg} alt="hero image"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default TopBanner;