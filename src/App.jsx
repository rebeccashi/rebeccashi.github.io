import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Nabar/Navbar';
import SkillsWrapper from './components/Skills/SkillsWrapper';
import {Row, Col} from 'antd';

function App() {
  return (
    <BrowserRouter>
      <Row>
        <Col span={6}>
          <Navbar />
        </Col>
        <Col span={18}>
          <Switch>
              <Route path='/' component={Home} />
              {/* <Route path='/Experience' component={Experience}/> */}
              <Route path='/Skills' component={SkillsWrapper} />
              {/* <Route path='/Coursework' component={Coursework} /> */}
          </Switch>
        </Col>
      </Row>
    </BrowserRouter>


    )
  ;}



export default App;
