import * as React from 'react';
import TopBar from './TopBar/TopBar'
import {Container} from 'react-bootstrap';
import {Element, Events} from 'react-scroll'; 
import SkillsWrapper from '../Desktop/Skills/SkillsWrapper';
import Experience from '../Desktop/Experience/Experience';
import Academics from '../Desktop/Academics/Academics';
import HomeWrapper from '../Desktop/Home/HomeWrapper';
import Menu from './Menu/Menu';
import { Row, Col } from 'react-bootstrap';
import MenuIcon from '../images/menu-icon.png'

class Mobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
      }
    
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    componentDidUpdate() {
        this.toggleTopbar();
    }

    handleClick() {
        // console.log(this.state.menuOpen);
        const menuOpen = this.state.menuOpen;
        if (menuOpen) {
            this.setState({menuOpen: false})
        } else {
            this.setState({menuOpen: true})
            // console.log('now menu open')
        }
    }

    toggleTopbar() {
        console.log('at toggleTopBar: ' + this.state.menuOpen)
        var topbar = document.querySelector("#topbar");
        if (this.state.menuOpen) {
            console.log('invisible top bar')
            topbar.style.display = 'none';
        } else {
            topbar.style.display = 'block';
        }
    }

    render() {
        return (
            <Container fluid>
                <div id='topbar'>
                    <Row>
                        <Col xs={9} className='initials'>
                            <h1>RS</h1>
                        </Col>
                        <Col xs={3} className='menuIcon'>
                            <img src={MenuIcon} onClick={this.handleClick}/>
                        </Col>
                    </Row>
                </div>
                {/* <TopBar menuOpen={this.state.menuOpen}/> */}
                <Menu menuOpen={this.state.menuOpen} handleClick={this.handleClick}/>
                {/* For home, no animation. Make the text a separate component */}
                <Element name="home" className="element"><HomeWrapper/></Element>
                <Element name="experience" className="element" id='expTop'><Experience/></Element>
                <Element name="skills" className="element" id='skillsTop'><SkillsWrapper/></Element>
                <Element name="academics" className="element"><Academics/></Element>
            </Container>
        )
    }
}

export default Mobile;