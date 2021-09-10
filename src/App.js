import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import SingleWork from './pages/SingleWork';
import NotFound from './pages/NotFound';

// Components
import Header from './components/header';
import Footer from './components/footer';

// Context, JSON data and images
import { DataContext } from './context/DataContext';
import { icons, skills, siteName, works } from './data';
import logo from './images/logo.png';

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
                <Contact />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/work/:name" component={SingleWork} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </main>
        </div>
      </Router>
    </DataContext.Provider>
  );
}
