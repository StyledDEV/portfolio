import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SingleWork from './pages/SingleWork';

import Header from './components/header';
import Footer from './components/footer';
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
        <div className="wrapper">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <SectionContact />
              </Route>
              <Route exact path="/work">
                <SectionWork />
              </Route>

              <Route exact path="/work/:name" component={SingleWork} />
              <Route path="*">
                <h4 className="section-title">Página no encontrada</h4>
              </Route>
            </Switch>
            <Footer siteName={siteName} />
          </main>
        </div>
      </Router>
    </DataContext.Provider>
  );
}
