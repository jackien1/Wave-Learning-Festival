import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    width: 100%; 
    font-family: Mukta Mahee; 
`
export const Left = styled.div`
    & h1 {
        color: black; 
        margin-top: 0px; 
        margin-bottom: 0.5em; 
    }

    & p {
        font-weight: 300; 
        margin: 0px; 
    }

    margin-right: 8rem; 
`

export const Right = styled.div`
    & p {
        margin: 0px; 
    }
`

export const Details = styled.p`
    color: #868686;
`

export const Cancel = styled.b`
  transition: 0.2s; 
  margin-left: 2rem; 

  &:hover{
    text-decoration: underline; 
    cursor: pointer; 
  }
`
