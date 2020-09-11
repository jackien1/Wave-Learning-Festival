import styled from 'styled-components'
import { Colors } from '@/styles'
import { device } from '@/theme'

export const Box = styled.div`
    width: 15px; 
    height: 15px; 
    border: 2px solid ${props => props.color};
    border-radius: 2px; 
    margin-right: 10px; 
    transition: 0.15s; 
    background-color: ${props => props.filled ? props.color : "#ffffff"}; 

    &:hover{
        background-color: ${props => props.color};
        cursor: pointer;
    }
`

export const CheckboxContainer = styled.div`
    display: flex; 
    align-items: center; 
    padding: 0px 20px;
`

export const Item = styled.p`
    margin: 0px; 
    font-size: 0.8; 
`

export const HorizontalToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  /* flex-wrap: wrap; */
`

export const Slider = styled.input`
  width: 100%;
  color: ${Colors.WLF_PURPLE}
  @media ${device.mobileM} {
    padding: 5px 10px;
  }
  @media ${device.mobileL} {
    padding: 5px 10px;
  }
  @media ${device.tablet} {
    padding: 5px 10px;
  }
  @media ${device.tabletL} {
    padding: 10px 10px;
  }
  @media ${device.laptop} {
    margin: 10px 15px;
  }
`

export const MetaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    min-width: 400px;
  }
`
export const MediumContainer = styled.div`
  max-width: 1024px;
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center; 
  @media ${device.mobileS} {
    padding: 80px 20px;
  }
  @media ${device.mobileM} {
    padding: 80px 20px;
  }
  @media ${device.mobileL} {
    padding: 80px 20px;
  }
  @media ${device.tablet} {
    padding: 60px 20px;
  }
  @media ${device.tabletL} {
    padding: 60px 20px;
  }
  @media ${device.laptop} {
    padding: 60px 20px;
  }
`
export const Popup = styled.div`
  /* background-color: #2684ff; */
  padding: 20px;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.3);
  border-radius: 15px;
  position: relative;
  margin-top: 2rem;
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: ${(props) => (props.subscribed ? '1' : '0')};

  & p {
    margin: 0px;
    color: #fff;
    font-size: 0.95rem;
  }
`

export const Error = styled.p`
  color: #ff5630;
  font-size: 0.9rem;
  margin: 0px;
`
