import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/home/index"
import Login from "./components/login/index"
import Signup from './components/signup';
import Article from './components/article';
import Tag from './components/tags'
import Newarticle from './components/newarticle';
import Profile from './components/profile';
import Setting from './components/setting';
import { render } from '@testing-library/react';
import Header from './components/common/header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  updateIsLoggedIn = (value) => {
    this.setState({ isLoggedIn: value })
  }
  render() {
    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Route exact path="/" component={Home} />
        <Route path="/login"
          render={() => <Login updateIsLoggedIn={this.updateIsLoggedIn} />} />
        <Route path="/signup" component={Signup} />
        <Route path="/article/:slug" component={Article} />
        <Route path="/tags/:name" component={Tag} />


      </>
    );
  }
}

export default App;
