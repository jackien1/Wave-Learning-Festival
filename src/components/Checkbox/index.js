import React, { useState } from 'react'
import {
  FaCheck
} from 'react-icons/fa'
import { Box, CheckboxContainer, Item } from './styles'
const Checkbox = ({ text, color, addFilter, removeFilter, value, isFilled }) => {
  const [filled, toggleFilled] = useState(false)

  const check = () => {
    if (!filled && !isFilled) {
      addFilter(value, color)
      toggleFilled(true)
    } else if (filled || isFilled) {
      removeFilter(value, color)
      toggleFilled(false)
    }
  }

  return (
    <CheckboxContainer>
      <Box filled={filled || isFilled} onClick={() => check()} color={color}/>
      <Item>{text}</Item>
    </CheckboxContainer>

  )
}

export default Checkbox
