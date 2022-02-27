import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import whiteLogo from '../../Asset/image/logo-white.png'
import darkLogo from '../../Asset/image/logo-dark.png'

class TopNavigation extends Component {
constructor(props) {
    super(props);
    this.state={
        navBack: 'navBackground',
        navVariant: "dark",
        navLogo:[whiteLogo],
        navItem:'navItem',

    }
}
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light', navBack:'navBackgroundScroll', navLogo:[darkLogo],navItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark', navBack:'navBackground', navLogo:[whiteLogo], navItem:'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBack} fixed="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="/"><img src={this.state.navLogo} alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                             <Nav className="me-auto"></Nav>
                            <Nav.Link href="/" className={this.state.navItem}>Home</Nav.Link>
                            <Nav.Link href="#Service" className={this.state.navItem}>Service</Nav.Link>
                            <Nav.Link href="#About" className={this.state.navItem}>About</Nav.Link>
                            <Nav.Link href="#Skill" className={this.state.navItem}>Skill</Nav.Link>
                            <Nav.Link href="#Team" className={this.state.navItem}>Team</Nav.Link>
                            <Nav.Link href="#Testimonial" className={this.state.navItem}>Testimonial</Nav.Link>
                            <Nav.Link href="#Contact" className={this.state.navItem}>Contact</Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;