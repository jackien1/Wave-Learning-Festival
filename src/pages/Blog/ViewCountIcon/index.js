import React from 'react'
import { FaEye } from "react-icons/fa";

function ViewCountIcon(props) {

  const viewCount = 200

  return (
    <span>
      <FaEye style={{verticalAlign: 'middle', marginRight: '0.4rem'}}/> 
      {viewCount}
    </span>
  )
}

export default ViewCountIcon
