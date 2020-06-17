import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Nabar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} />
            {/* <Route path='/Experience' component={Experience}/>
            <Route path='/Skills' component={Skills} />
            <Route path='/Coursework' component={Coursework} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
