import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './NavbarStyles.css';

function Navbar() {
    //Make an array for all the sections and save it in a separate file
    return (
            <div>
                <h1 id='logo'>RS</h1>
                <div>
                    <Row><Link to='/' className='link'>Home</Link></Row>
                    <Row><Link to='/Experience' className='link'>Experience</Link></Row>
                    <Row><Link to='/Skills' className='link'>Skills</Link></Row>
                    <Row><Link to='/Coursework' className='link'>Coursework</Link></Row>
                </div>
                {/* <li><a href="/">HOME</a></li> */}
                {/* <li><a href="/Experience">Experience</a></li>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Coursework">Coursework</a></li> */}
            </div>
    );
}

export default Navbar;