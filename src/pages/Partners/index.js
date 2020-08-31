import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const Partners = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            Community Partners
          </Typography.Header>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default Partners;
