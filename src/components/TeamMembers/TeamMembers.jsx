import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import teamOne from '../../Asset/image/team/team-one.jpg'
import teamTwo from '../../Asset/image/team/team-two.jpg'
import teamThree from '../../Asset/image/team/team-three.jpg'
import teamFour from'../../Asset/image/team/team-four.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF,faTwitter,faLinkedinIn,faCodepen} from "@fortawesome/free-brands-svg-icons";

class TeamMembers extends Component {
    render() {
        return (
            <Fragment>
                <div className="team_member_wrap" id="Team">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12} md={12} sm={12}>
                                <div className="CommonDesignWrap">
                                    <h5 className="CommonMiniHeading"> Team</h5>
                                    <h2 className="CommonMainHeading"> Meet with our <br/> awesome and expert<br/> <span>team</span></h2>
                                </div>
                            </Col>
                        </Row>
                        </Container>

                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <div className="single_team_wrap mt-4">
                                    <div className="team_img">
                                        <img className="img-fluid" src={teamOne} alt=" Team Member"/>
                                        <div className="team_social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faTwitter} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faCodepen} /></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_des">
                                        <p className="team_position">CEO</p>
                                        <h4 className="team_name"> Kilixer B. Brownila</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="single_team_wrap mt-4">
                                    <div className="team_img">
                                        <img className="img-fluid" src={teamTwo} alt=" Team Member"/>
                                        <div className="team_social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faTwitter} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faCodepen} /></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_des">
                                        <p className="team_position">Designer</p>
                                        <h4 className="team_name"> Dumble Y. Yankies </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="single_team_wrap mt-4">
                                    <div className="team_img">
                                        <img className="img-fluid" src={teamThree} alt=" Team Member"/>
                                        <div className="team_social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faTwitter} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faCodepen} /></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_des">
                                        <p className="team_position">Developer</p>
                                        <h4 className="team_name"> Miranda H. Halim</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div className="single_team_wrap mt-4">
                                    <div className="team_img">
                                        <img className="img-fluid" src={teamFour} alt=" Team Member"/>
                                        <div className="team_social">
                                            <ul>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faFacebookF} /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faTwitter} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                                                </li>

                                                <li>
                                                    <a href="#"><FontAwesomeIcon className="" icon={faCodepen} /></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_des">
                                        <p className="team_position">Founder</p>
                                        <h4 className="team_name"> Md Tofajjal Hossen</h4>
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

export default TeamMembers;