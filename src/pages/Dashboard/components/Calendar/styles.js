import styled from 'styled-components'
import { Colors } from '@/styles'

export const CalendarButton = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 3px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.2s;
  height:100px;
  width:50px;
  background-color: ${({ active }) => active ? Colors.WLF_PURPLE : "#FFFFFF"};
  color: ${({ active }) => active ? "#FFFFFF" : "#000000"};
  opacity: 1;
  &:hover{
        background-color: ${Colors.WLF_PURPLE} !important;
        color: white !important;
        cursor: pointer !important;
        opacity: ${({active}) => active ? 1 : 0.5} !important;
    }
`

export const ArrowButton = styled.button`
  display: inline-block;
  transition-duration: 0.4s;
  background-color: white;
  border-radius: 50%;
  border: none;
  &:hover{
        opacity: 0.2;
        cursor: pointer;
    }
`

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`

export const ButtonDot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  display: inline-block;
  margin: 3px;
`

export const CalendarContainer = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 475px;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`
