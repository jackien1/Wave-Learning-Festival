import React from 'react'
import { FaEye } from "react-icons/fa";

function ViewCountIcon(props) {
  return (
    <span>
      <FaEye style={{verticalAlign: 'middle', marginRight: '0.4rem'}}/> 
      {props.views}
    </span>
  )
}

export default ViewCountIcon
