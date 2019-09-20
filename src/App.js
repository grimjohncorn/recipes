import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import './App.css';
import data from './data.json'


function App() {

  const [recipes, setRecipes] = useState([])
  //add isLoading

  useEffect (()=> {
    setRecipes(data.recipe)
  },[])

  console.log(recipes)
  
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} recipes={recipes} /> } />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/recipe" component={Recipe} />
            <Redirect to='/' />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
