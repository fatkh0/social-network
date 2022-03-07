import React from "react";
import Dialog from "./dialog/Dialog";
import s from "./Dialogs.module.sass"

const Dialogs = (props) => {


  const dialogs = props.dialogs

  const dialogComponents = dialogs.map(t => <Dialog key={t.id} id={t.id} name={t.name} />)

  return (
      <div className={s.dialogs}>
        {dialogComponents}
      </div>
  );
};

export default Dialogs
