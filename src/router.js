import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Accueil from './components/Accueil';
import APropos from './components/APropos';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/a-propos" component={APropos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
