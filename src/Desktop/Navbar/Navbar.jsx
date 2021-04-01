import * as React from 'react';
import { Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import './NavbarStyles.css';
import GithubLogo from '../../images/github.png';
import LinkedinLogo from '../../images/linkedin-logo.png';
import EmailLogo from '../../images/mail.png';

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

    //IMPROVE: simplify the code
    handleActive(to) {
        // console.log(`to ${to}`);
        if (to === 'home') {
            this.setState({
                link1: `animation ${to}`,
                link2: '', 
                link3: '', 
                link4: '', 
            })
        } else if (to === 'experience') {
            this.setState({
                link1: 'link',
                link2: `animation ${to}`, 
                link3: 'link', 
                link4: 'link', 
            })
        } else if (to === 'skills') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: `animation ${to}`, 
                link4: 'link', 
            })
        } else if (to === 'academics') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: 'link', 
                link4: `animation ${to}`, 
            })
        }
    }

    render() {
        //Make logos align in the center
        return (
            <div className='desktop-navbar'>
                <h1 id='desktop-initials'>RS</h1>
                <Row className="desktop-logos">
                    <a href="https://github.com/rebeccashi" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo} alt='Github'/>
                    </a>
                    <a href="https://www.linkedin.com/in/rebeccaxshi/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt='Linkedin' id='linkedin'/>
                    </a>
                    {/* <a href="mailto:xs938@nyu.edu?subject=hello" target="_blank" rel="noopener noreferrer">
                        <img src={EmailLogo} alt='email' id='email'/>
                    </a> */}
                </Row>
                <hr className='desktop-divider'/>
                <div className='desktop-links'>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='home' className='link desktop-link' spy={true} smooth={true} duration={500}><span className={this.state.link1}>Home</span></Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='experience' className='link desktop-link' spy={true} smooth={true} duration={500}><span className={this.state.link2}>Experience</span></Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='skills' className="link desktop-link" spy={true} smooth={true} duration={500}><span className={this.state.link3}>Skills</span></Link></Row>
                    <Row><Link onSetActive={this.handleActive} activeClass="active" to='academics' className="link desktop-link" spy={true} smooth={true} duration={500}><span className={this.state.link4}>Academics</span></Link></Row>
                </div>
            </div>
        );
    }
    
}

export default Navbar;