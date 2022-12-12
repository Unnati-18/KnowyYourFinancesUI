import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './home/pages/home';
import Learn from './learn/pages/learn';
import Play from './play/pages/play';
import AppDrawer from './shared/components/layout';
import TopicPages from './learn/pages/topicPages';
import Familiarize from './familiarize/pages/familiarize';
import Result from './play/pages/result';
import Auth from './auth/pages/auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <AppDrawer />
          <Switch>
              <Route path="/auth" exact>
                <Auth />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/learn" exact>
                <Learn />
              </Route>
              <Route path="/learn/:topicId" exact>
              <TopicPages />
              </Route>
              <Route path="/familiarize" exact>
                  <Familiarize />
              </Route>
              <Route path="/play" exact>
                  <Play />
              </Route>
              <Route path="/play/result" exact>
                  <Result />
              </Route>
              <Redirect to="/auth" />
            </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
