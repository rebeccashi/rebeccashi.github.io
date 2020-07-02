import React from 'react';
import p5 from 'p5';
import { Row, Col} from 'react-bootstrap';
import HomeBackground from './HomeBackground';
import './HomeWrapper.css';

class HomeWrapper extends React.Component {
    componentDidMount() {
        this.canvas = new p5(HomeBackground, "backgroundSketch");
        //the name in quotation marks corresponds to the div id
    }

    shouldComponentUpdate() { // just in case
        return false;
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        //REWRITE BIO!!!!1

        return(
            <div id="backgroundSketch" className="sketch">
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className='bio'>
                        <h2>Hi there!</h2>
                        <p>
                            I am Xiaoyi Shi and I go by Rebecca. 
                            I am a rising junior at New York University studying Computer Science. 
                            I am currently working for a nonprofit organization as a front-end web developer. 
                            My career goal is to become a <strong>software engineer</strong>. 
                            In addition to computer science, 
                            I am also interested in art and design, including UI/UX. 
                        </p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        );
    }
}

export default HomeWrapper;