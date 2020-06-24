import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Nabar/Navbar';
import SkillsWrapper from './components/Skills/SkillsWrapper';
import Experience from './components/Experience/Experience';
import Coursework from './components/Coursework/Coursework';
import {Row, Col} from 'antd';

const App = () => {
  return (
    <div>
     <Row>
      <BrowserRouter>
        <Col span={6}>
          <Navbar />
        </Col>
        <Col span={18}>
          <Switch>
              <Route exact path='/' component={Home} key='home'/>
              <Route path='/Experience' component={Experience} key='experience'/>
              <Route path='/Skills' component={SkillsWrapper} key='skills'/>
              <Route path='/Coursework' component={Coursework} key='coursework'/>
          </Switch>
        </Col>
        </BrowserRouter>
      </Row>
      </div>


    )
  ;}



export default App;
