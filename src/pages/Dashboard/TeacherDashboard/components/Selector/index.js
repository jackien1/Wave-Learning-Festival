import React from 'react'
import { Item, Bar } from './styles'
import { Colors } from '@/styles'
const Selector = ({ setTab }) => {
  return (
    <Bar>
      <Item onClick={() => setTab(true)} color={Colors.WLF_PURPLE}>
        <p>Class Details</p>
      </Item>
      <Item onClick={() => setTab(false)} color={Colors.WLF_TURQOUISE}>
        <p>Instructor Details</p>
      </Item>
    </Bar>
  )
}

export default Selector
