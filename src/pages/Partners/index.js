import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";
import { PartnerContainer, PartnersRow } from './styles'
import MEDLIFEOntario from './logos/MEDLIFEOntarioLogo.jpg'
import SeedsInTheMiddle from './logos/SeedsInTheMiddleLogo.png'
import Stemey from './logos/STEMEYLogo.png'
import tinyTouchofLove from './logos/tinyTouchOfLove.png'

const partnerData = [
  {
    name: 'MEDLIFE Ontario',
    logo: MEDLIFEOntario
  },
  {
    name: 'Seeds In The Middle',
    logo: SeedsInTheMiddle
  },
  {
    name: 'STEMEY',
    logo: Stemey
  },
  {
    name: 'tiny Touch of Love',
    logo: tinyTouchofLove
  }
]

const partnerIcon = (partner) => {
  return (
    <PartnerContainer>
      <img src={partner.logo}/>
    </PartnerContainer>
  )
}

const Partners = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            Community Partners
          </Typography.Header>
          <PartnersRow>
            {partnerData.map((partner) => {
              return partnerIcon(partner)
            })}
          </PartnersRow>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default Partners;
