import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import '../../Asset/css/bootstrap.min.css'
import {faPlay, faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Player,BigPlayButton,ControlBar,ReplayControl,ForwardControl,VolumeMenuButton,PlaybackRateMenuButton } from 'video-react';
import 'video-react/dist/video-react.css';
import videoOneImg from '../../Asset/image/video/video-one.jpg'
import videoTwoImg from '../../Asset/image/video/video-two.jpg'
class Video extends Component {
constructor(props) {
    super(props);
    this.state={
        show:false
    }
}
modalClose=()=>this.setState({show:false})
modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                <div className="video_wrapper" id="Skill">
                    <Container>
                        <Row>
                            <Col lg={6} md={10}>
                                <div className="about_right mb-5">
                                    <div className="CommonDesignWrap">
                                        <h5 className="CommonMiniHeading"> Our Skillset</h5>
                                        <h2 className="CommonMainHeading mb-4"> GEffective business delivery solutions at  <span>glance</span></h2>
                                        <p className="service_pra">Product services are professional services that help market or advertise your business online. Best Way to Manage and Share Work Resources.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="video_inner_wrap overflow-hidden">
                        <Row>
                            <Col lg={7} md={12}>
                                <div className="video_single col-mb-3">
                                    <img className="img-fluid" src={videoOneImg} alt="video image"/>
                                    <p><FontAwesomeIcon className="playBtn" onClick={this.modalOpen} icon={faPlay} /></p>
                                </div>
                            </Col>
                            <Col lg={5} sm={12}>
                                <div className="video_single right_video">
                                    <img className="img-fluid" src={videoTwoImg} alt="video image"/>
                                    <p><FontAwesomeIcon className="playBtn" onClick={this.modalOpen} icon={faPlay} /></p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>

                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                                <ControlBar>
                                    <ReplayControl seconds={10} order={1.1} />
                                    <ForwardControl seconds={30} order={1.2} />
                                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                    <VolumeMenuButton />
                                </ControlBar>
                            </Player>


                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

            </Fragment>
        );
    }
}

export default Video;