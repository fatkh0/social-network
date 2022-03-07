import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*
const DialogsContainer1 = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState()
          const dialogs = state.messagesPage.dialogs

          return <Dialogs dialogs={dialogs}/>
        }
      }
    </StoreContext.Consumer>

  );
};
*/
const mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs
})

const mapDispatchToProps = () => ({})

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer
