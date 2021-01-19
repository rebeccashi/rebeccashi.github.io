import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
    
    render() {
        //Typing "Hi there!"
        return(
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className='bio'>
                        <h2>Hi there!</h2>
                        <p>
                            I am Xiaoyi Shi and I go by Rebecca. 
                            I am a junior at <span id='nyu'>New York University</span> studying <span id='cs'>Computer Science</span>. 
                            So far, I have worked as a front-end developer
                            using <span id='skills'>React.js, Typescript, and Node.js.</span>
                            &nbsp; My goal is to become a full stack software engineer. 
                            In addition to computer science, 
                            I am also interested in <span id='art'>art and design,</span> including UI/UX.
                        </p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
        );
    }
}

export default Home;