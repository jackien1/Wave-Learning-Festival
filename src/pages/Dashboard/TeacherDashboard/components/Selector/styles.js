import styled from 'styled-components'

export const Item = styled.div`
    width: 200px; 
    padding: 1rem; 
    border-top-left-radius: 7px; 
    border-top-right-radius: 7px; 
    border-top: 5px solid ${props => props.color};
    display: flex; 
    justify-content: center; 
    font-family: 'Mukta Mahee', sans-serif;

    & p {
        margin: 0px; 
        font-weight: 600;
    }
    margin-right: 3rem; 
    background-color: white; 
    transition: 0.2s; 

    &:hover {
        cursor: pointer; 
        box-shadow: 0 0 1.25rem rgba(31,45,61,0.2);

    }
`
export const Bar = styled.div`
    width: 100%; 
    display: flex; 
    padding-left: 2rem; 
    z-index: 1; 
`
