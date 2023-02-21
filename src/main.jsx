import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Artistas from './pages/Artistas';
import Tendencias from './pages/Tendencias';
import { MyContext } from './context/MyContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/artistas/:id" component={Artistas} />
          <Route path="/tendencias" component={Tendencias} />
        </Switch>
      </Router>
    </MyContext>
  </React.StrictMode>
)