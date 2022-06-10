import React from "react";
import Dialogs from "./Dialogs.tsx";
import {connect} from "react-redux";
import { getMessagesPageDialogs } from "../../../../utils/selectors/selectors.ts";


const DialogsContainer = (props) => {
  return  <Dialogs {...props}/>
};

const mapStateToProps = (state) => ({
  dialogs: getMessagesPageDialogs(state)
})

const mapDispatchToProps = () => ({})

export default connect (mapStateToProps, mapDispatchToProps) (DialogsContainer)
