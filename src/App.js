import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
        <Header/>
        <section>
        <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/services' component={Services} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
        </section>
      <Footer/>
    </Router>
  );
}

export default App;
