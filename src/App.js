import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import CheckAuth from "./components/checkAuth/CheckAuth";
import { connect } from "react-redux";
import { initialize } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component {

  componentDidMount = () => {
    this.props.initialize()
  }


  render () {
    if (!this.props.isInitialized) return <Preloader />

    return (
      <div className="App">
      <header className="header">
        <Header />
      </header>

      <div className="container">
        <CheckAuth />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default connect (mapStateToProps, {initialize})(App);
