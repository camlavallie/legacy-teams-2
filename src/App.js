import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Posts from './components/posts/Posts';
import EditPost from './components/posts/EditPost';
import FAQ from './components/pages/FAQ';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import Register from './components/auth/Register';
import { loadUser } from './actions/auth';
//redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }


const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);
  return(
  <Provider store={store}>
    <Router>
        <Header/>
        <section>
          <Alert /> 
        <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/editpost/:id' component={EditPost} />
           <Route exact path='/services' component={Services} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
        </section>
      <Footer/>
    </Router>
    </Provider>
  )};

export default App;
