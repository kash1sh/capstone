import React, { useCallback, useEffect, useState } from "react";
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
// import Start from "./quizzes/components/ReadingTest/Start";
import Pronounce from "./quizzes/components/Pronunciation/Pronounce";
// import ColorStart from "./quizzes/components/ColorNaming/ColorStart";
import ColorResult from "./quizzes/components/ColorNaming/ColorResult";
// import ResultPage from "./quizzes/components/ColorNaming/ResultPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const login = useCallback((token, expirationDate) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token,
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }, []);

  console.log(token);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("token"));
    if (storedData && storedData.token) {
      login(storedData.token);
    }
  }, [login]);

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
        {/* <Route path="/quiz/3/result">
          <ResultPage />
        </Route> */}
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
        <Route path="/" exact>
          <Quizzes />
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
