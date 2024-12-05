// Index.jsx
import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog'
import './authState.js';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function login() {
    loginOrCreate('/api/auth/login');
  }

  async function create() {
    loginOrCreate('/api/auth/create');
  }



  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
      //props.setAuthState(authState.authenticated);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

    return (
      <>
      <div>
        <h1>Welcome</h1>
        <nav>
          
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

          <Button href="#" onClick={() => login()}>🔒 Login</Button>
          <Button href="#"onClick={() => create()}>Create Account</Button>
          <Button href="https://github.com/n8lunceford/CS_260_Startup/tree/main">GitHub</Button>
        </nav>
      </div>
      <MessageDialog message = {displayError} onHide = {() => setDisplayError(null)}/>
      </>
    );
  };
  
  // ReactDOM.render(<Index />, document.getElementById('root'));