import styled from "styled-components";
import { device } from "@/theme";

export const PartnerContainer = styled.div`
  width: 100%;
  height: auto;

  & img {
    height: auto;
  }
`

export const PartnersRow = styled.div`
  display: grid;
  grid-column-gap: 5em;
  grid-row-gap: 2em;
  align-items: center;
  width: 100%;

  @media ${device.mobileL} {
    padding: 20px 10px;
    grid-template-columns: repeat(1, [col-start] minmax(200px, 1fr) [col-end]);
  }
  @media ${device.tablet} {
    padding: 20px 10px;
    grid-template-columns: repeat(2, [col-start] minmax(200px, 1fr) [col-end]);
  }
  @media ${device.laptop} {
    padding: 20px 30px;
    grid-template-columns: repeat(3, [col-start] minmax(200px, 1fr) [col-end]);
  }
  `
