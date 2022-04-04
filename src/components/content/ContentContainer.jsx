import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {setProfilePage} from "../../redux/navbar-reducer";
import {getPageRoutes, getSelectedPage} from '../../utils/selectors/selectors'


const ContentContainer = (props) => {
  return <Content {...props}/>
}


const mapStateToProps = (state) => ({
  pageRoutes: getPageRoutes(state),
  selectedPage: getSelectedPage(state)
})

export default connect (mapStateToProps, {
  setProfilePage
}) (ContentContainer)

