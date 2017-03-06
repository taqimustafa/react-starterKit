import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

// Css Files
import '../public/css/style.css';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>{routes}</Router>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
