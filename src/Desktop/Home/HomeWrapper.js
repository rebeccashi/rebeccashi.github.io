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
        //Typing "Hi there!"
        return(
            <div id="backgroundSketch" className="sketch">
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className='desktop-bio'>
                        <h2>Hi there!</h2>
                        <p>
                            I am Xiaoyi Shi and I go by Rebecca. 
                            I am a rising junior at <span id='nyu'>New York University</span> studying <span id='cs'>Computer Science</span>. 
                            So far, I have worked as a front-end developer
                            using <span id='skills'>React.js, Typescript, and Node.js.</span>
                            &nbsp;My goal is to become a full stack software engineer. 
                            In addition to computer science, 
                            I am also interested in <span id='art'>art and design,</span> including UI/UX.
                        </p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        );
    }
}

export default HomeWrapper;