import * as React from 'react';
import { Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import './NavbarStyles.css';

function Navbar() {
    //Make an array for all the sections and save it in a separate file
    return (
            <div className='navbar'>
                <h1 id='logo'>RS</h1>
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