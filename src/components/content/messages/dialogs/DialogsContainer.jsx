import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { getMessagesPageDialogs } from "../../../../utils/selectors/selectors";


const DialogsContainer = (props) => {
  return  <Dialogs {...props}/>
};

const mapStateToProps = (state) => ({
  dialogs: getMessagesPageDialogs(state)
})

const mapDispatchToProps = () => ({})

export default connect (mapStateToProps, mapDispatchToProps) (DialogsContainer)
