import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
  preloader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type PropsType = {

}
const Preloader: React.FC<PropsType> = React.memo(() => {
  const styles = useStyles()

  return (
    <div className={styles.preloader}>
      <img src={preloader} alt='spinner' />
    </div>
    )

})

export default Preloader