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
`

export const Highlight = styled.img`
  position: absolute;
  z-index: 1;
`
export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  left: 250px;
  width: calc(100% - 600px);
  min-height: 100vh;
`

export const CalendarContainer = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 350px;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`
