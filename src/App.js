import React, { useEffect } from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    console.log('isAuthenticated is', isAuthenticated);
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect, isLoading]);

  if (isLoading || !isAuthenticated) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
};  

export default App;
