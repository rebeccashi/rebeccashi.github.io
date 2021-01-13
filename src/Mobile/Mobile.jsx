import * as React from 'react';
import TopBar from './TopBar/TopBar'
import {Container} from 'react-bootstrap';
import {Element, Events} from 'react-scroll'; 
import SkillsWrapper from '../Desktop/Skills/SkillsWrapper';
import Experience from '../Desktop/Experience/Experience';
import Academics from '../Desktop/Academics/Academics';
import HomeWrapper from '../Desktop/Home/HomeWrapper';
import Menu from './Menu/Menu';

class Mobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
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

    render() {
        
        return (
            <Container fluid>
                <TopBar menuOpen={this.state.menuOpen}/>
                <Menu menuOpen={this.state.menuOpen}/>
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