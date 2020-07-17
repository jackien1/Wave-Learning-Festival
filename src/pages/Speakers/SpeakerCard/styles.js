import styled from 'styled-components'
import { device } from '@/theme'

export const Card = styled.div`
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    width: 33%; 
    height: auto; 
    padding: 35px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 10px; 

    @media ${device.mobileS} {
        width: 100%; 

    }

    @media ${device.tablet} {
        width: 50%; 
    }

    @media ${device.laptop} {
        width: 33%; 

    }
`

export const Speaker = styled.img`
    width: 11em; 
    height: 11em; 
    object-fit: cover; 
    border-radius: 50%; 
    margin-bottom: 2em; 
`

export const Info = styled.div`

`

export const Header = styled.h2`
    color: ${props => props.color};
    margin: 0px; 
`

export const Details = styled.p`
    margin: 0px; 
    color: #aaaaaa; 
`
