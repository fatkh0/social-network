import React from 'react'
import {connect} from "react-redux";
import NavbarContainer from "../navbar/NavbarContainer";
import ContentContainer from "../content/ContentContainer";
import LoginPageContainer from "../login/loginPageContainer";
import {compose} from "redux";
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "../content/profile/ProfileContainer";

class CheckAuth extends React.Component {


  render () {


    if (this.props.isAuth) {
      return (
        <>
          <NavbarContainer />
          <ContentContainer/>
        </>
      )
    }

    /*
    if (this.props.location.pathname.includes('/profile')){
      return <Route path={'/profile/:id?'} render={() => <ProfileContainer/>}/>
    } 
*/
    return <LoginPageContainer />

  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isLogIn
  }
}

export default compose (
  connect (mapStateToProps),
  withRouter
) (CheckAuth)
