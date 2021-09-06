import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/Home';
import SingleWork from './pages/SingleWork';
import SectionAbout from './components/sections/About';
import SectionContact from './components/sections/Contact';
import SectionWork from './components/sections/Work';
import { DataContext } from './context/DataContext';
import { icons, skills, works } from './data';
import logo from './images/logo.png';
const siteName = 'Agustin Piriz';

export default function App() {
  return (
    <DataContext.Provider value={{ icons, skills, siteName, logo, works }}>
      <Router>
        <Header />
        <main className="wrapper main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <SectionAbout />
            </Route>
            <Route exact path="/contact">
              <SectionContact />
            </Route>
            <Route exact path="/work">
              <SectionWork />
            </Route>

            <Route exact path="/work/:name" component={SingleWork} />
            <Route path="*">
              <h4>404</h4>
            </Route>
          </Switch>
        </main>
      </Router>
    </DataContext.Provider>
  );
}
