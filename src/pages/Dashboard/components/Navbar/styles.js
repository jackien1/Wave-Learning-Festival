import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    background-color: white;
    position: fixed; 
    width: 100%; 
    height: 75px; 
    box-shadow: 0 0 1.25rem rgba(31,45,61,0.4);
    display: flex; 
    padding-left: 2rem;
    padding-right: 2rem;  
    justify-content: space-between; 
    align-items: center; 

    & img {
        display: block; 
        width: 3.5em;
        height: auto;
        cursor: pointer;
    }

    z-index: 10; 
`
