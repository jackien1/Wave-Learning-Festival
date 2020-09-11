import React from 'react'
import { Item, Bar } from './styles'
import { Colors } from '@/styles'
const Selector = () => {
  return (
    <Bar>
      <Item color={Colors.WLF_PURPLE}>
        <p>Class Details</p>
      </Item>
      <Item color={Colors.WLF_TURQOUISE}>
        <p>Instructor Details</p>
      </Item>
    </Bar>
  )
}

export default Selector
