import styled from 'styled-components'
import { Colors } from '@/styles'
import { device } from '@/theme'

export const Sidebar = styled.div`
  position: relative;
  left: 0px;
  width: 200px;
  background-color: white;
  justify-content: center;
  align-items: left;
  text-align: left;
`

export const Highlight = styled.img`
  position: relative;
  z-index: 1;
  width: 200px;
  height: 50px;
  margin-top: 0.5em;
  transition: 0.1s;
  &:hover{
    cursor: pointer; 
  }
`

export const ListItem = styled.h2`
  color: ${Colors.WLF_PURPLE};
  position: absolute;
  text-align: center;
  font-weight: 200;
  padding: 1rem;
  margin: auto;
  font-size: 20px;
  transition: 0.2s;
  z-index: 2;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export const ContainerInner = styled.div`
margin-bottom: 5vh;
position: relative;
padding: 1rem;

@media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

}

@media ${device.tablet} {
    margin-top: 0;
    width: 80%;

}
@media ${device.tabletL} {
    margin-top: 0;
    max-width: 650px;
    width: 100%;


}

@media ${device.laptop} {
    max-width: 900px;
    width: 100%;
}
`