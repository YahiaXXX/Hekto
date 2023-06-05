import React from 'react'
import {ColorRing} from "react-loader-spinner";

function Loader() {
  return (
    <ColorRing
  visible={true}
  height="25"
  width="25"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={[
    'rgba(238, 238, 238, 0.8)',
    'rgba(238, 238, 238, 0.8)',
    'rgba(238, 238, 238, 0.8)',
    'rgba(238, 238, 238, 0.8)',
    'rgba(238, 238, 238, 0.8)']}
/>
  )
}

export default Loader