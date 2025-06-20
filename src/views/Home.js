import React, { Fragment, useEffect } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const Home = () => {
  // const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

  // useEffect(() => {
  //   console.log('isAuthenticated is', isAuthenticated);
  //   if (!isLoading && !isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect, isLoading]);

  // if (isLoading || !isAuthenticated) {
  //   return <Loading />;
  // }

  return (
  <Fragment>
    <Hero />
    <Content />
  </Fragment>
);
}

export default Home;
