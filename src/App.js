import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./components/home/index"
import Login from "./components/login/index"
import Signup from './components/signup';
import Article from './components/article';
import Tag from './components/tags'
import Newpost from './components/newarticle';
import Profile from './components/profile';
import Setting from './components/setting';
import Header from './components/common/header';


function Auth() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/tags/:name" component={Tag} />
      <Route path="/newpost" component={Newpost} />
      <Route path="/setting" component={Setting} />
      <Route path="/profile" component={Profile} />
      <Route path='*' render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}

function NoAuth(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login"
        render={() => <Login updateIsLoggedIn={props.updateIsLoggedIn} />} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/tags/:name" component={Tag} />
      <Route path='*' render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  updateIsLoggedIn = (value) => {
    this.setState({ isLoggedIn: value })
  };
  componentDidMount() {
    if (localStorage['conduit-token']) {
      fetch('https://conduit.productionready.io/api/user', {
        method: 'GET',
        headers: {
          authorization: `Token ${localStorage['conduit-token']}`
        }
      }).then(res => res.json()).then(user => {
        this.setState({ isLoggedIn: true });
      }).catch(err => {
        this.setState({ isLoggedIn: false })
      })
    }
  }
  render() {
    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} />
        {
          this.state.isLoggedIn ? <Auth /> : <NoAuth updateIsLoggedIn={this.updateIsLoggedIn} />
        }

      </>
    );
  }
}

export default App;
