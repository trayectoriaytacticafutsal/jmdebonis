import React from 'react';
import MainCarousel from './Carousel.js';
import NavbarPage from './Navbar';
import "../styles/App.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment >
                <NavbarPage />
                <MainCarousel />
            </React.Fragment>
        );
    }

}

export default Home;