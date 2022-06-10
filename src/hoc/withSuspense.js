import React, {Suspense} from "react";
import Preloader from "../components/common/preloader/Preloader.tsx";

const withSuspense= (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader/>} >
        <Component {...props} />
      </Suspense>
  )
  }
}

export default withSuspense