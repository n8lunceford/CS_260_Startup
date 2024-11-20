// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Agenda from 'Agenda.jsx';
import Calendar from 'Calendar.jsx';
import Lists from 'Lists.jsx';
import Index from 'Index.jsx';
import About from 'About.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/agenda">Agenda</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/lists">Lists</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/lists" component={Lists} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;