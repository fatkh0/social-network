import React from "react"
import {connect} from "react-redux";
import NavbarContainer from "../navbar/NavbarContainer.tsx";
import ContentContainer from "../content/ContentContainer.tsx";
import LoginPageContainer from "../login/loginPageContainer.tsx";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


type PropsType = {
    isAuth: boolean
}



const CheckAuth: React.FC<PropsType> = React.memo( ({isAuth}) => {

  if (isAuth) {
      return (
        <>
          <NavbarContainer />
          <ContentContainer/>
        </>
      )
    }

  return <LoginPageContainer />
})


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isLogIn
  }
}

export default compose (
  connect (mapStateToProps),
  withRouter
) (CheckAuth)
