import React from 'react';
import { img, Carousel } from 'react-bootstrap';
import boxeo from '../images/boxeo.jpg';
import equipo from '../images/equipo.jpg';
import jmdebonis from '../images/jmdebonis.jpg';

class MainCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        //800x400?text=First slide&bg=373940&bg=282c34&bg=20232a

        const handleSelect = (selectedIndex, e) => {
            this.setState({ selectedIndex });
        };

        return (
            <Carousel activeIndex={this.state.index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={boxeo}
                        alt="First slide"
                        width="400"
                        height="600"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={equipo}
                        alt="Second slide"
                        width="400"
                        height="600"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={jmdebonis}
                        alt="Third slide"
                        width="400"
                        height="600"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

}

export default MainCarousel;