// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Academics from './components/Academics';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ContactMe from './components/ContactMe';
// import { Router } from 'express';
// import { Route, Routes} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import { Route, Routes } from 'react-router';
import NoPage from './components/NoPage';
import React from 'react';

function App() {
  return (
    <div className="App">
          <h1> Welcome to CRA Digital Portfolio </h1>

          {/* Add all the functional components created */}
          <MyNavbar/>
          
          {/* <About/>
          <Academics/>
          <TechnicalSkills/>
          <Projects/>
          <Achievements/>
          <ContactMe/> */}

          {/* link all components  */}
          {/* create structure or 
          create order in which the components show by using Router and Route */}
          <Routes>
            <Route path ='/' element ={<About/>} />
            <Route path = 'about' element ={<About/>} />
            <Route path = 'academics' element = {<Academics/>} />
            <Route path = 'technicalskills' element ={<TechnicalSkills/>} />
            <Route path ='projects' element ={<Projects/>} />
            <Route path ='achievements' element ={<Achievements/>} />
            <Route path ='contactme' element ={<ContactMe/>} />
            <Route path ='*' element ={<NoPage/>} />
          </Routes>
          {/* Routing ends here */}
      </div>
    
  );
}

export default App;
