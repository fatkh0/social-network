import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/header/Header.tsx";
import CheckAuth from "./components/checkAuth/CheckAuth.tsx";
import { connect } from "react-redux";
import { initialize } from "./redux/app-reducer/app-reducer.ts";
import Preloader from "./components/common/preloader/Preloader.tsx";
import { BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store.ts";
import {Provider} from "react-redux";

type PropsType = {
  isInitialized: boolean
  initialize: () => void
}

const App: React.FC<PropsType> = ({isInitialized, initialize }) => {
  useEffect(() => {
    initialize()
  }, [])

  if (!isInitialized) return <Preloader />

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

class App1 extends React.Component {

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


const AppWithConnect =  connect (mapStateToProps, {initialize})(App);

const AppContainer = () => {
  return (
    <React.StrictMode>
      <BrowserRouter >
        <Provider store={store}>
          <AppWithConnect />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default AppContainer