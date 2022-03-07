import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {setProfilePage} from "../../redux/navbar-reducer";


class ContentContainer extends React.Component {

  render() {
    return <Content {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  pageRoutes: state.pageRoutes,
  selectedPage: state.navbar.selectedPage
})

export default connect (mapStateToProps, {
  setProfilePage
}) (ContentContainer)

