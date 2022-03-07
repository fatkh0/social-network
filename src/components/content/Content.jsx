import React from "react";
import { Route } from "react-router";
import s from "./Content.module.sass";



const Content = (props) => {


  const pages = props.pageRoutes.map(t => {
    return (
      <Route
        key={t.id}
        path={t.path}
        render={() => <t.component/>}
      />
    )
  })

  return (
    <div className={s.content}>
      {pages}
    </div>
  );
};

export default Content;
