import React from 'react';
import './App.css';
import { Element, Events} from 'react-scroll'
import Navbar from './components/Navbar/Navbar';
import SkillsWrapper from './components/Skills/SkillsWrapper';
import Experience from './components/Experience/Experience';
import Academics from './components/Academics/Academics';
import { Container, Row, Col } from 'react-bootstrap';
import HomeWrapper from './components/Home/HomeWrapper';

class App extends React.Component {

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

  render(){
 //Fix the navbar getting squashed to the left when the screen is xs
    return (
      <Container fluid>
          <Row>
            <Col sm={2} xs={3}>
              <Navbar />
            </Col>
            <Col sm={10} xs={9}>
              <Element name="home" className="element"><HomeWrapper/></Element>
              <Element name="experience" className="element" id='expTop'><Experience/></Element>
              <Element name="skills" className="element" id='skillsTop'><SkillsWrapper/></Element>
              <Element name="academics" className="element"><Academics/></Element>
            </Col>
          </Row>
        </Container>
      )
  }  
};

export default App;
