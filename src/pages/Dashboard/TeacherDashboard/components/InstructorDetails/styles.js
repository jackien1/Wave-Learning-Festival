import styled from 'styled-components'

import { device } from '@/theme'
import { Colors } from '@/styles'

export const ProfileImage = styled.img`
    width: 100%; 
    height: auto; 
    border-radius: 50%; 
    border: 5px solid ${Colors.WLF_ORANGE};
`
export const ImageContainer = styled.div`
    width: 100%; 
    text-align: center; 
    margin-right: 4rem; 

    & p{
        margin: 0px; 
    }
`
export const Container = styled.div`
    width: 100%; 
 
`
export const ContainerInner = styled.div`
    display: flex; 
    width: 100%; 
    padding: 0 4em; 
    align-items: center; 
    margin-bottom: 2rem; 

`

export const ContainerInner1 = styled.div`
    width: 100%; 
    padding: 0 4em; 
`

export const CourseImage = styled.div`
    & img {
        width: 100%; 
        height: auto; 
        border-radius: 5px; 
        box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.4);
    }

    @media ${device.mobileS} {
        width: 100%; 
    }
    @media ${device.tablet} {
        width: 30%; 
    }
`

export const Information = styled.div`

`

export const Description = styled.p``

export const Heading = styled.h3``

export const Button = styled.button`
    font-family: 'Mukta Mahee', sans-serif;

    background: ${Colors.WLF_TURQOUISE}; 
    border-radius: 25px; 
    padding: 0.5rem 2rem; 
    border: none; 
    font-size: 1rem; 
    color: white; 
    transition: 0.2s; 
    &:hover{
        cursor: pointer; 
        box-shadow: 0 0 1.25rem rgba(31,45,61,0.2);

    }
`

export const Green = styled.button`
font-family: 'Mukta Mahee', sans-serif;

    background: rgba(80, 176, 160, 0.25);
    border: 1px solid #68B0A1;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 0.5rem 2rem; 
    color: #68B0A1;
    transition: 0.2s; 
    &:hover{
        cursor: pointer; 
        box-shadow: 0 0 1.25rem rgba(31,45,61,0.2);

    }
`

export const Input = styled.input`
    display: block; 
    margin: 0.5rem 0; 
    background: rgba(196, 196, 196, 0.25);
    width: 25%; 
    color: #868686; 
    border-radius: 7px; 
    border: none; 
    font-size: 16px; 
    padding: 0.6rem; 
    font-family: 'Mukta Mahee', sans-serif;

`

export const Red = styled.button`
    margin: 0.5rem 0; 
    display: block; 
    background: rgba(235, 99, 60, 0.25);
    border: 1px solid #EB633C;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 0.5rem 2rem; 
    color: #EB633C;
    width: 25%; 
    font-family: 'Mukta Mahee', sans-serif;

`

export const Green2 = styled.button`
    margin: 0.5rem 0; 
    display: block; 
    background: rgba(80, 176, 160, 0.25);
    border: 1px solid #68B0A1;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 0.5rem 2rem; 
    color: #68B0A1;
    width: 25%; 
    font-family: 'Mukta Mahee', sans-serif;
    transition: 0.2s; 
    &:hover{
        cursor: pointer; 
        box-shadow: 0 0 1.25rem rgba(31,45,61,0.2);

    }

`
export const Purple = styled.button`
    margin: 0.5rem 0; 
    display: block; 
    background: rgba(98, 101, 173, 0.25);
    border: 1px solid #6267A9;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 0.5rem 2rem; 
    color: #6265AD;
    width: 25%; 
    font-family: 'Mukta Mahee', sans-serif;
    transition: 0.2s; 
    &:hover{
        cursor: pointer; 
        box-shadow: 0 0 1.25rem rgba(31,45,61,0.2);

    }

`

export const EditDescription = styled.textarea`
    width: 50%; 
    height: 20vh; 
    display: block; 
    margin: 0.5rem 0; 
    background: rgba(196, 196, 196, 0.25);
    color: #868686; 
    border-radius: 7px; 
    border: none; 
    font-size: 16px; 
    padding: 0.6rem; 
    font-family: 'Mukta Mahee', sans-serif;

    

`

export const Cancel = styled.b`
  transition: 0.2s; 
  margin-left: 2rem; 

  &:hover{
    text-decoration: underline; 
    cursor: pointer; 
  }
`
