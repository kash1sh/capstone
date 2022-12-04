import React, { Fragment, useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Quizzes from "./quizzes/pages/Quizzes";
// import Button from "./shared/Button";

// import "./declare_modules.d.js";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";
import Auth from "./users/pages/Auth";
import ImagePack from "./quizzes/components/ImageDetect/ImagePack";
import { AuthContext } from "./shared/context/auth-context";
import Start from "./quizzes/components/ReadingTest/Start";
import Pronounce from "./quizzes/components/Pronunciation/Pronounce";
import ColorStart from "./quizzes/components/ColorNaming/ColorStart";
import ColorResult from "./quizzes/components/ColorNaming/ColorResult";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const login = useCallback((token) => {
    setToken(token);
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  console.log(token);

  let routes;

  if (isLoggedIn) {
    console.log("HIII");
    routes = (
      <Switch>
        <Route path="/" exact>
          <Quizzes />
        </Route>
        <Route path="/quiz/1">
          <Pronounce />
        </Route>
        <Route path="/quiz/3">
          <ColorResult />
          {/* <ColorStart /> */}
        </Route>
        <Route path="/quiz/4">
          <ImagePack />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" exact>
          <Auth />
          {/* <Quiz quiz={quiz} /> */}
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        token: token,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          {/* <Route path="/" exact>
              <Quizzes />
            </Route>
            <Route path="/auth" exact>
              <Auth />
            </Route>
            <Route path="/quiz/4">
              <ImagePack />
            </Route>
            <Redirect to="/" /> */}
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
