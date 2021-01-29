import * as React from 'react';
import { Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import './Menu.css';
import GithubLogo from '../../images/github.png';
import LinkedinLogo from '../../images/linkedin-logo.png';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            link1: 'link', 
            link2: 'link', 
            link3: 'link', 
            link4: 'link'
        }
    }
    
    componentDidUpdate() {
        this.toggleMenu();
    }

    toggleMenu() {
        console.log('menu props:' + this.props.menuOpen);
        var menu = document.querySelector(".menu");
        if (this.props.menuOpen) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

    //IMPROVE: simplify the code
    handleActive(to) {
        console.log(`to ${to}`);
        // console.log(to)
        if (to === 'home-mobile') {
            this.setState({
                link1: `animation ${to}`,
                link2: '', 
                link3: '', 
                link4: '', 
            })
        } else if (to === 'experience-mobile') {
            this.setState({
                link1: 'link',
                link2: `animation ${to}`, 
                link3: 'link', 
                link4: 'link', 
            })
        } else if (to === 'skills-mobile') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: `animation ${to}`, 
                link4: 'link', 
            })
        } else if (to === 'academics-mobile') {
            this.setState({
                link1: 'link',
                link2: 'link', 
                link3: 'link', 
                link4: `animation ${to}`, 
            })
        }

    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        
        //Make logos align in the center
        return (
            <div className='menu'>
                <h1 id='mobile-initials'>RS</h1>
                <div className="mobile-logos">
                    <a href="https://github.com/rebeccashi" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo} alt='Github'/>
                    </a>
                    <a href="https://www.linkedin.com/in/xiaoyi-s-b312a3106/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt='Linkedin' id='linkedin'/>
                    </a>
                    {/* <a href="mailto:xs938@nyu.edu?subject=hello" target="_blank" rel="noopener noreferrer">
                        <img src={EmailLogo} alt='email' id='email'/>
                    </a> */}
                </div>
                <hr className='mobile-divider'/>   
                <div className='mobile-links'>
                    <Row><Link onClick={this.handleClick} onSetActive={this.handleActive} activeClass="active" to='home-mobile' className='link mobile-link' spy={true} smooth={true} duration={500}><span className={this.state.link1}>Home</span></Link></Row>
                    <Row><Link onClick={this.handleClick} onSetActive={this.handleActive} activeClass="active" to='experience-mobile' className='link mobile-link' spy={true} smooth={true} duration={500}><span className={this.state.link2}>Experience</span></Link></Row>
                    <Row><Link onClick={this.handleClick} onSetActive={this.handleActive} activeClass="active" to='skills-mobile' className="link mobile-link" spy={true} smooth={true} duration={500}><span className={this.state.link3}>Skills</span></Link></Row>
                    <Row><Link onClick={this.handleClick} onSetActive={this.handleActive} activeClass="active" to='academics-mobile' className="link mobile-link" spy={true} smooth={true} duration={500}><span className={this.state.link4}>Academics</span></Link></Row>
                </div>
            </div>
        );
    }
    
}

export default Menu;