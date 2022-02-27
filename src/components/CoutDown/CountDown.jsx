import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import {faBellSlash} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
// import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class CountDown extends Component {
    render() {
        return (
            <Fragment>
                <div className="countdown_wrap">
                    <Container>
                        <div className="countdown_wrap_inner">
                        <Row>
                            <Col lg={3} sm={6}>
                                <div className="count_box">
                                    <FontAwesomeIcon icon={faUser} />
                                        <CountUp start={0} end={1165} delay={0}>
                                            {({ countUpRef,start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    <h4 className="count_title">Projects Executed </h4>

                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="count_box">
                                    <FontAwesomeIcon icon={faGlobe} />
                                        <CountUp start={0} end={219} delay={0}>
                                            {({ countUpRef,start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    <h4 className="count_title">Global Presence </h4>

                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="count_box">
                                    <FontAwesomeIcon icon={faUsers} />
                                        <CountUp start={0} end={5060} delay={0}>
                                            {({ countUpRef,start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    <h4 className="count_title">Active Clients</h4>

                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="count_box">
                                    <FontAwesomeIcon icon={faBook} />
                                        <CountUp start={0} end={500} delay={0}>
                                            {({ countUpRef,start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    <h4 className="count_title">Recognition </h4>

                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default CountDown;