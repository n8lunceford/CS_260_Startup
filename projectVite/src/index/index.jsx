// Index.jsx
import React from 'react';
import './index.css';

export const Index = () => {
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

          <a href="#">🔒 Login</a>
          <a href="#">Create Account</a>
          <a href="https://github.com/n8lunceford/CS_260_Startup/tree/main">GitHub</a>
        </nav>
      </div>
    );
  };
  
  // ReactDOM.render(<Index />, document.getElementById('root'));