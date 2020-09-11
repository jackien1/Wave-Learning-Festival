import styled from 'styled-components'
import { device } from '@/theme'

export const Question = styled.div`
    flex-grow: 5; 
    flex-basis: 0;
`

// export const Header = styled.h2`
//     color: ${props => props.color};
//     margin: 0px; 
// `

// export const Details = styled.p`
//     margin: 0px; 
// `

// export const Button = styled.button`
//     border: none; 
//     padding: 12px 20px 12px 20px; 
//     background-color: ${props => props.color};
//     color: white; 
//     font-size: 0.9rem; 
//     border-radius: 25px; 
//     font-family: 'Muli', sans-serif;
//     font-weight: 700; 
//     transition: 0.2s;
//     margin: 5px; 

//     &:focus{
//         outline: none;
//     }

//     &:hover{
//         cursor: pointer; 
//         opacity: 0.8; 
//     }
// `
export const QuestionContainer = styled.div`
    width: 100%; 
    margin: 0px;
    margin-bottom: 0.5em;
    padding: 0.5em 1em 0.5em 1em;  
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    border-radius: 10px; 
    h1 {
        margin: 0px; 
        color: black;
    }
    p {
        margin-top: 0px; 
    }
    &:hover{
        cursor: pointer; 
        opacity: 0.8; 
    }
`

export const AnswerContainer = styled.div`
    width: 100%; 
    margin: 0px;
    margin-bottom: 0.5em;
    padding: 0.75em 1em 0.5em 1em;  
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.15); 
    border-radius: 10px; 
    h1 {
        margin: 0px; 
        color: black;
    }
    p {
        margin-top: 0px; 
    }
`

export const ContainerInner = styled.div`
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


// export const Heading = styled.h2`
//     color: ${props => props.color};
//     margin-bottom: 0.5em; 
// `

// export const Triangle = styled.div`
//   position: absolute;
//   top: -28px;
//   width: 0px;
//   height: 0px;
//   border-left: 28px solid transparent;
//   border-right: 28px solid transparent;
//   border-bottom: 28px solid #ffffff;
//   /* box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08); */
// `
