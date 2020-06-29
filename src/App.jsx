import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Nabar/Navbar';
import SkillsWrapper from './components/Skills/SkillsWrapper';
import Experience from './components/Experience/Experience';
import Coursework from './components/Coursework/Coursework';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col lg={2}>
            <Navbar />
          </Col>
          <Col lg={10}>
          <Switch>
              <Route exact path='/' component={Home} key='home'/>
              <Route path='/Experience' component={Experience} key='experience'/>
              <Route path='/Skills' component={SkillsWrapper} key='skills'/>
              <Route path='/Coursework' component={Coursework} key='coursework'/>
          </Switch>
          </Col>
        </Row>
        </BrowserRouter>
      </Container>
    )
};



export default App;
