import { useState } from 'react'
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { About } from './about/about';
import { Agenda } from './agenda/agenda';
import { Calendar } from './calendar/calendar';
import { Login } from './login/login';
import { Lists } from './lists/lists';
import {AuthState} from './login/authState';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    
      
      <BrowserRouter>
      <div className = 'app'>


      <header>
        
          <nav>
            
            <menu>
            
      



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
          <Route path='/' element={<Login
          userName={userName}
          authState={authState}
          onAuthChange={(userName, authState) => {
            setAuthState(authState);
            setUserName(userName);
          }}
          />} exact />
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

export default App;