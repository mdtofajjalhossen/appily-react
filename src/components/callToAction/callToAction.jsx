import React, {Component, Fragment} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {faEnvelope,faPen,faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CallToAction extends Component {
    render() {
        return (
            <Fragment>
                <div className="cta_wrapper">
                    <Container>
                       <div className="cta_inner">
                           <Row className="align-items-center">
                               <Col xl={5}>
                                   <div className="cta_left">
                                       <h5 className="cta_mini_title">Make Request</h5>
                                       <h2 className="cta_main_title">Make custom order</h2>
                                   </div>
                               </Col>
                               <Col xl={7}>
                                   <div className="cta_form">
                                       <Form className="cta_form_inner">
                                           <Form.Group className="formBasicEmail input-field">
                                               <Form.Control type="email" placeholder="Enter Email Address" required></Form.Control>
                                               <span> <FontAwesomeIcon icon={faEnvelope} /></span>
                                           </Form.Group>
                                           <Form.Group className="formBasicEmail input-field">
                                               <Form.Control type="text" placeholder="Your Estimate" required></Form.Control>
                                               <span> <FontAwesomeIcon icon={faPen} /></span>
                                           </Form.Group>
                                           <Form.Group className="formBasicEmail input-field">
                                               <button type="submit">
                                                   <span> <FontAwesomeIcon icon={faArrowRightLong} /></span>
                                               </button>

                                           </Form.Group>
                                       </Form>
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

export default CallToAction;