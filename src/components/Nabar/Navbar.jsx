import * as React from 'react';
import { Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import './NavbarStyles.css';
import GithubLogo from '../../images/github.png';
import LinkedinLogo from '../../images/linkedin-logo.png';
import $ from "jquery";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
        this.state = {
            link1: 'link', 
            link2: 'link', 
            link3: 'link', 
            link4: 'link', 
        }
    }

    handleActive(to) {
        console.log(`to ${to}`);
        if (to =='home') {
            this.setState({
                link1: `link ${to}`,
                link2: 'link', 
                link3: 'link', 
                link4: 'link', 
            })
        } else if (to == 'experience') {
            this.setState({
                link1: 'link',
                link2: `link ${to}`, 
                link3: 'link', 
                link4: 'link', 
            })
        } else if (to == 'skills') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: `link ${to}`, 
                link4: 'link', 
            })
        } else if (to == 'coursework') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: 'link', 
                link4: `link ${to}`, 
            })
        }
        console.log(`this.state.link1 ${this.state.link1}`)
    }

    render() {
        //Make logos align in the center
        return (
            <div className='navbar'>
                <h1 id='initials'>RS</h1>
                <Row className="logos">
                    <Col>
                        <a href="https://github.com/rebeccashi" target="_blank">
                            <img src={GithubLogo} alt='Github'/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/xiaoyi-s-b312a3106/" target="_blank">
                            <img src={LinkedinLogo} alt='Linkedin' id='linkedin'/>
                        </a>
                    </Col>
                </Row>
                <div className='links'>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='home' className={this.state.link1} id='highlight1' spy={true} smooth={true} duration={500}>Home</Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='experience' className={this.state.link2} spy={true} smooth={true} duration={500}>Experience</Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='skills' className={this.state.link3} spy={true} smooth={true} duration={500}>Skills</Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='coursework' className={this.state.link4} spy={true} smooth={true} duration={500}>Coursework</Link></Row>
                </div>
            </div>
        );
    }
    
}

export default Navbar;