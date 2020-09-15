import styled from 'styled-components'
import { Colors } from '@/styles'

export const StatsContainer = styled.div `
    background: none;
    position: absolute;
    width: 70%;
    height: 375px;

    & h1 {
        font-family: 'Mukta Mahee', sans-serif;
        font-size: 40px;
        margin-left: 0.43em;
        margin-top: 1em;
        margin-bottom: 0.5em;
        color: ${Colors.WLF_PURPLE};
    }

    & hr {
        border: 0.5px solid;
        color: lightgray;
    }
`

export const CardContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2em;
`

export const StatsCard = styled.div `
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 230px;
    height: 218px;
    border-radius: 15px;
    text-align: right;
    margin: 0 0.5em 1em 0.5em;

    & img {
        display: block;
        margin: auto 1.75em;
        width: 9em;
        height: auto;
    }

    & h1 {
        position: absolute;
        font-family: 'Mukta Mahee';
        font-style: normal;
        font-weight: 600;
        font-size: 116px;
        line-height: 193px;
        text-shadow: 0 3px 5px ${Colors.DARK_GRAY};
        color: #ffffff;
        right: 25px;
        bottom: 35px;
        margin: 0;
        z-index: 1;
    }

    & p {
        position: absolute;
        font-family: 'Muli', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        left: 100px;
        bottom: 30px;
        margin-right: 2em;
        z-index: 1;
    }
`
