import React from "react";
import Content from "./Content.tsx";
import {connect} from "react-redux";
import {getSelectedPage} from '../../utils/selectors/selectors.ts'



const ContentContainer = (props) => {
  return <Content  {...props}/>
}


const mapStateToProps = (state) => ({
})

export default connect (mapStateToProps, {
}) (ContentContainer)

