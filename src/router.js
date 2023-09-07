import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/a-propos" component={APropos} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
