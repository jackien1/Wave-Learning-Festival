import styled from 'styled-components'
import { Colors } from '@/styles'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  display: flex;
  z-index: 5;
`

export const Sidebar = styled.div`
  height: 100vh;
  position: fixed;
  width: 250px;
  background-color: ${Colors.WLF_PURPLE};
  box-shadow: 0 0 1.25rem rgba(31,45,61,0.3);
`

export const ListItem = styled.p`
  color: white;
  padding-left: 2rem;
  font-weight: 700;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  margin: 0px;
  font-size: 1.1rem;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  & p {
    margin: 0px; 
    margin-left: 1rem; 
  }
`

export const ListIcon = styled.div`
  display: flex; 
  align-items: center; 
`
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
  background-color: ${({ active }) => active ? Colors.WLF_PURPLE : '#FFFFFF'};
  color: ${({ active }) => active ? '#FFFFFF' : '#000000'};
  opacity: 1;
  &:hover{
        background-color: ${Colors.WLF_PURPLE} !important;
        color: white !important;
        cursor: pointer !important;
        opacity: ${({ active }) => active ? 1 : 0.5} !important;
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

// export const ButtonDot = styled.shape`
//   height: "5px",
//   width: "5px",
//   borderRadius: "50%",
//   display: "inline-block",
//   margin: "3px"
// `

export const Highlight = styled.img`
  position: absolute;
  z-index: 1;
`
export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  left: 186px;
  width: calc(100% - 600px);
  padding: 2rem;
  min-height: 100vh;
`

export const CalendarContainer = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 475px;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`
