import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Header, Main, Menu, About, Reservation, Footer } from "./components";

const App = () => {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <HashRouter basename="/landing-page-project">
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <Route path="/reservation" component={Reservation} />
      <Footer />
    </HashRouter>
  );
}

export default App;
