import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { CharactersPage } from './pages/CharactersPage';
import { DetailedCharacterPage } from './pages/DetailedCharacterPage/DetailedCharacterPage';
import { Header } from './presentation/Header/Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/characters" component={CharactersPage}/>
        <Route exact path="/characters/:id" component={DetailedCharacterPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
