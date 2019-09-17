import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/recipe" component={Recipe} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
