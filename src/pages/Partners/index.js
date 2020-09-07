import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";
import { PartnerContainer, PartnersRow } from './styles'
import MEDLIFEOntario from './logos/MEDLIFEOntarioLogo.jpg'
import PsychStart from './logos/PsychStartLogo.jpg'
import SeedsInTheMiddle from './logos/SeedsInTheMiddleLogo.png'
import Stemey from './logos/STEMEYLogo.png'
import tinyTouchofLove from './logos/tinyTouchOfLove.png'

const partnerData = [
  {
    name: 'MEDLIFE Ontario',
    logo: MEDLIFEOntario,
    width: 275,
    link: 'https://www.medlifeontario.org/'
  },
  {
    name: 'PsychStart',
    logo: PsychStart,
    width: 200,
    link: 'https://www.psychstart.co.uk/'
  },
  {
    name: 'Seeds In The Middle',
    logo: SeedsInTheMiddle,
    width: 220,
    link: 'http://seedsinthemiddle.org/'
  },
  {
    name: 'STEMEY',
    logo: Stemey,
    width: 225,
    link: 'http://www.stemenrichmentyouth.com/'
  },
  {
    name: 'tiny Touch of Love',
    logo: tinyTouchofLove,
    width: 290,
    link: 'http://www.tinytouchoflove.org/'
  }
]

const partnerIcon = (partner) => {
  return (
    <PartnerContainer>
      <a href={partner.link} target="_blank">
        <img src={partner.logo} width={partner.width}/>
      </a>
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
            In Collaboration With
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
