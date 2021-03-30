import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Header, Main, Menu, About, Contact, Footer } from "./components";

const App = () => {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
