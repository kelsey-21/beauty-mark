import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import Face from '../components/pages/Face/Face';
import Learn from '../components/pages/Learn/Learn';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import ProductForm from '../components/pages/ProductForm/ProductForm';
import Search from '../components/pages/Search/Search';

import authData from '../helpers/data/authData';
import './App.scss';

authData.firebaseApp();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <Router>
        <MyNavbar authed={authed} />
          <Switch>
            <PrivateRoute path="/" exact component={Face} authed={authed} />
            <PrivateRoute path="/search" exact component={Search} authed={authed} />
            <PrivateRoute path="/learn" exact component={Learn} authed={authed} />
            <PrivateRoute path="/face/new" exact component={ProductForm} authed={authed} />
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
