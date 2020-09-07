import styled from "styled-components";
import WavyTeachers from "./wavy_teachers.svg";
import {Colors} from "@/styles";
import { device } from "@/theme";

export const TeacherBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WavyTeachers});
  background-size: cover;
  width: 100vw;
  min-width: 320px;
  min-height: 900px;
  margin-bottom: -10px;
  margin-left: -2px;
  overflow: hidden;
  @media ${device.mobileS} {
    padding: 100px 50px;
  }
  @media ${device.mobileM} {
    padding: 100px 50px;
  }
  @media ${device.tablet} {
    padding: 100px 100px;
  }
  @media ${device.laptop} {
    padding: 100px 300px;
  }
`

export const TeacherBackgroundForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100vw;
  min-width: 320px;
  margin-bottom: -10px;
  margin-left: -2px;
  overflow: hidden;
  @media ${device.mobileS} {
    padding: 100px 50px;
  }
  @media ${device.mobileM} {
    padding: 100px 50px;
  }
  @media ${device.tablet} {
    padding: 100px 100px;
  }
  @media ${device.laptop} {
    padding: 100px 300px;
  }
`

export const TestimonialBackground = styled.div`
  display: grid;
  width: 75%;
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  padding-top: 50px;
  padding-bottom: 50px;
  margin: auto;
`

export const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TeacherImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 5px solid ${Colors.WLF_YELLOW};
`

export const LogoBackground = styled.img`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`
export const ImageContainer = styled.div`
    flex-grow: 3; 
    flex-basis: 0;
    /* display: flex; 
    justify-content: center;  */
`

export const Speaker = styled.img`
    width: 11em; 
    height: 11em; 
    margin-right: 2em;
    object-fit: cover; 
    border-radius: 50%; 
    border: 2px solid ${Colors.WLF_YELLOW};
    /* margin-bottom: 1em;  */
    @media ${device.mobileS} {
        margin-left: 0px; 
    }
    @media ${device.tablet} {
        margin-left: 2.5em; 
    }
    
`

export const Info = styled.div`
    flex-grow: 20; 
    flex-basis: 0;
`

export const Header = styled.h2`
    color: ${Colors.WLF_YELLOW};
    margin: 0px; 
    font-size: 21px;
`

export const Details = styled.p`
    margin: 0px; 
    color: white;
`

export const SpeakerContainer = styled.div`
    width: 100%; 
    padding: 1em;  
    
    h1 {
        margin: 0px; 
    }
    p {
        margin-top: 0px; 
    }
`

export const SpeakerContainerInner = styled.div`
    display: flex; 
    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center; 
    }
    @media ${device.tablet} {
        flex-direction: row; 
        justify-content: space-evenly;
    }
`
