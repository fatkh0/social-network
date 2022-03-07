import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = () => {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={style}>
      <img src={preloader} />
    </div>
    )

}

export default Preloader