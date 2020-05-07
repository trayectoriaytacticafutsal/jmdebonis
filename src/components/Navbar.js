import React from 'react';
import { Navbar, Container, Nav, img } from 'react-bootstrap';
import facebookLogo from '../svg/icon-facebook.svg';
import youtubeLogo from '../svg/icon-youtube.svg';
import instagramLogo from '../svg/icon-instagram.svg';
import twitterLogo from '../svg/icon-twitter.svg';
import pelotaLogo from '../svg/icon-pelota-futbol.svg';
import "../styles/App.css";

class NavbarPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (

            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand href="/about">
                    <b>{process.env.REACT_APP_BRAND_NAVBAR}</b>
                    <img
                        src={pelotaLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top pelota-futbol pelota-logo"
                        alt="Facebook"
                        hspace="10"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href={process.env.REACT_APP_FACEBOOK_LINK} target="_blank">
                            <img
                                src={facebookLogo}
                                width="25"
                                height="25"
                                className="d-inline-block align-top pelotaFutol"
                                alt="Facebook"
                            />
                        </Nav.Link>
                        <Nav.Link href={process.env.REACT_APP_YOUTUBE_LINK} target="_blank">
                            <img
                                src={youtubeLogo}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                                alt="Youtube"
                            />
                        </Nav.Link>
                        <Nav.Link href={process.env.REACT_APP_INSTAGRAM_LINK} target="_blank">
                            <img
                                src={instagramLogo}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                                alt="Instagram"
                            />
                        </Nav.Link>
                        <Nav.Link href={process.env.REACT_APP_TWITTER_LINK} target="_blank">
                            <img
                                src={twitterLogo}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                                alt="Twitter"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

    }

}

export default NavbarPage;