import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) =>({
  isLogIn: state.auth.isLogIn
})

const withRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isLogIn) return <Redirect to={'/login'} />

      return <Component {...this.props} />
    }

  }

  return connect (mapStateToProps) (RedirectComponent)
}

export default withRedirect