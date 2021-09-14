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
                            My name is Xiaoyi Shi and I go by <span className='purple'>Rebecca</span>. 
                            I am a senior at <span id='nyu'>New York University</span> studying <span id='cs'>Computer Science</span>.
                            I have experience working as a backend Software Developer Intern at AVEVA and a frontend Software Developer for NYU IT. <br/>
                            After graduation, I'd like to work as a <span className='purple'>full stack software developer</span>. 
                            In my free time, I am interested in art and design, including UI/UX.
                        </p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        );
    }
}

export default HomeWrapper;