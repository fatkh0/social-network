import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import CheckAuth from "./components/checkAuth/CheckAuth";


const App = () => {

  return (

    <div className="App">
      <header className="header">
        <Header />
      </header>

      <div className="container">
        <CheckAuth />
      </div>
    </div>

  );
};

export default App;
