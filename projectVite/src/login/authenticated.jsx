import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function Authenticated(props) {


  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
  
      fetch('https://quote.cs260.click')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.quote);
          setQuoteAuthor(data.author);
        })
        .catch();
    }, []);


  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
        <h1>About Our Project</h1>
        <section>
            <h2>Description</h2>
            <p>Description of your project</p>
            <p>More description of your project</p>
        </section>
        <section>
          <div className = 'quote-box'>
            <p className = 'quote'>{quote}</p>
            <p className = 'author'>{quoteAuthor}</p>
          </div>
        </section>
        <Button href="#" onClick={() => logout()}>🔒 Logout</Button>
    </div>
);
}
