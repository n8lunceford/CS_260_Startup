import { useState } from 'react'
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { About } from './about/about';
import { Agenda } from './agenda/agenda';
import { Calendar } from './calendar/calendar';
import { Index } from './index/index';
import { Lists } from './lists/lists';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    
      
      <BrowserRouter>
      <div className = 'app'>


      <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <menu className='navbar-nav'>
      



    <nav>
      <NavLink to = ''>
        Index
      </NavLink>
      <NavLink to = 'about'>
        About
      </NavLink>
      <NavLink to = 'agenda'>
        Agenda
      </NavLink>
      <NavLink to = 'calendar'>
        Calendar
      </NavLink>
      <NavLink to = 'lists'>
        Lists
      </NavLink>
    </nav>
    </menu>
    </nav>
    </header>

    <Routes>
          <Route path='/' element={<Index />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='*' element={<NotFound />} />
    </Routes>




    </div>
    </BrowserRouter>
    
  )
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App