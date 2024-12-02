// Index.jsx
import React from 'react';
import './index.css';

export const Index = () => {

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
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

    return (
      <div>
        <h1>Welcome</h1>
        <nav>
          
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>

          <a href="#" onClick={() => loginOrCreate('/api/auth/login')}>🔒 Login</a>
          <a href="#"onClick={() => loginOrCreate('/api/auth/create')}>Create Account</a>
          <a href="https://github.com/n8lunceford/CS_260_Startup/tree/main">GitHub</a>
        </nav>
      </div>
    );
  };
  
  // ReactDOM.render(<Index />, document.getElementById('root'));