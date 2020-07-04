import * as React from 'react';
import { Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import './NavbarStyles.css';
import GithubLogo from '../../images/GithubLogo.png';
import LinkedinLogo from '../../images/LinkedinLogo.png';

function Navbar() {
    //Make an array for all the sections and save it in a separate file
    return (
            <div className='navbar'>
                <h1 id='initials'>RS</h1>
                <Row className="logos">
                    <Col><a href="https://github.com/rebeccashi"><img src={GithubLogo} alt='Github'/></a></Col>
                    <Col><a href="https://github.com/rebeccashi"><img src={LinkedinLogo} alt='Linkedin'/></a></Col>
                </Row>
                <div className='links'>
                    <Row><Link activeClass="active" to='home' className='link' spy={true} smooth={true} duration={500}>Home</Link></Row>
                    <Row><Link activeClass="active" to='experience' className='link' spy={true} smooth={true} duration={500}>Experience</Link></Row>
                    <Row><Link activeClass="active" to='skills' className='link' spy={true} smooth={true} duration={500}>Skills</Link></Row>
                    <Row><Link activeClass="active" to='coursework' className='link' spy={true} smooth={true} duration={500}>Coursework</Link></Row>
                </div>
            </div>
    );
}

export default Navbar;