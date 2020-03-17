import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/home/index"
import Login from "./components/login/index"
import Signup from './components/signup';
import Article from './components/article';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={Article} />

    </>
  );
}

export default App;
