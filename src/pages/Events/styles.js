import styled from "styled-components";
import { Colors } from "@/styles";
import { device } from '@/theme'

export const Button = styled.div`
  display: inline-block;
  background-color: ${Colors.WLF_ORANGE};
  color: white;
  padding: 12.5px 25px 12.5px 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  transition: 0.15s;
  margin-bottom: 2rem; 

  & p {
    margin: 0px;
    font-size: 1.2em;
  }

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Header = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    padding: 0px 25px 0px 25px; 
`

export const Title = styled.div`
    flex-grow: 4; 
    flex-basis: 0;
    flex-wrap: wrap; 
`

export const Heading = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    display: flex; 
    align-items: center; 
    margin-left: 0.5em; 
    margin-right: 0.5em; 
`

export const TableContainer = styled.div`
    margin-bottom: 5vh;

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
        max-width: 768px;
        width: 100%;


    }

    @media ${device.laptop} {
        max-width: 1024px;
        width: 100%;

    }

`