import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/home/index"
import Login from "./components/login/index"
import Signup from './components/signup';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

    </>
  );
}

export default App;
