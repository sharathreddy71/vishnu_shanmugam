import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Emanation from './components/pages/Emanation';
import Transcendence from './components/pages/Transcendence';
import Textures from './components/pages/Textures';
import Home from './components/pages/Home';



function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          {/* <Route path = '/'>
            <Navbar/>
            <Home/>
          </Route>
          <Route path = '/About'>
            <Navbar/>
            <About/>
          </Route>
          <Route path = '/Contact'>
            <Navbar/>
            <Contact/>
          </Route>
          <Route path = '/Emanation'>
            <Navbar/>
            <Emanation/>
          </Route>
          <Route path = '/Transcendence'>
            <Navbar/>
            <Transcendence/>
          </Route>
          <Route path = '/Textures'>
            <Navbar/>
            <Textures/>
          </Route> */}



          <Route path='/vishnu_shanmugam' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Emanation' component={Emanation} />
          <Route path='/Transcendence' component={Transcendence} />
          <Route path='/Textures' component={Textures} />
        </Switch>
      
    </Router>
  );
}

export default App;
