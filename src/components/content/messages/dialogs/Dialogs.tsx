import React from "react";
import Dialog from "./dialog/Dialog.tsx";
import s from "./Dialogs.module.sass"

const Dialogs = React.memo((props) => {


  const dialogs = props.dialogs

  const dialogComponents = dialogs.map(t => <Dialog key={t.id} id={t.id} name={t.name} />)

  return (
      <div className={s.dialogs}>
        {dialogComponents}
      </div>
  );
})

export default Dialogs
