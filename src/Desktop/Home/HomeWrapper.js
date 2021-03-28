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
                            I am Rebecca Shi. 
                            I am a junior at <span id='nyu'>New York University</span> studying <span id='cs'>Computer Science</span>. 
                            I am a grader for a CS course and an incoming Software Engineer intern at OSIsoft. <br/>
                            In my free time, I like to work on <span className='purple'>full-stack web development</span> projects. 
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