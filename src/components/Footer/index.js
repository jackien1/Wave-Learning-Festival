import React from "react";
import {
  FooterContainer,
  FooterInner,
  Social,
  Icon,
  FooterLeft,
} from "./styles";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Colors, Typography } from "@/styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterLeft>
          <Typography.BodyText style={{ fontWeight: "200" }}>
            Questions? Email us at{" "}
            <a
              style={{ fontWeight: "600", textDecoration: "none" }}
              href="mailto:wavelearningfestival@gmail.com"
            >
              wavelearningfestival@gmail.com
            </a>
          </Typography.BodyText>
          <p></p>
          <Typography.BodyText style={{ fontWeight: "200", fontSize: 10 }}>
            <a
              style={{ fontWeight: "600", textDecoration: "none" }}
              href="terms-conditions"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              style={{ fontWeight: "600", textDecoration: "none" }}
              href="privacy-policy"
            >
              Privacy Policy
            </a>
          </Typography.BodyText>
          <Typography.BodyText style={{fontWeight: "300", fontSize: 12}}>
            Wave Learning Festival is a registered 501(c)3 nonprofit organization.
          </Typography.BodyText>
          <Typography.BodyText style={{ fontWeight: "200", fontSize: 10 }}>
            <span>&#169;</span> Wave Learning Festival 2020
          </Typography.BodyText>
        </FooterLeft>
        <Social>
          <Icon onClick={() =>
            window.open(
              "https://www.facebook.com/wavelf/",
              "_blank"
            )}>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                style: { verticalAlign: "middle" },
              }}
            >
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
          </Icon>
          <Icon
            onClick={() =>
              window.open(
                "https://www.instagram.com/wavelearningfestival/",
                "_blank"
              )
            }
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                style: { verticalAlign: "middle" },
              }}
            >
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </Icon>
          <Icon
            onClick={() =>
              window.open("https://twitter.com/wavelf2020", "_blank")
            }
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                style: { verticalAlign: "middle" },
              }}
            >
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </Icon>
          <Icon
            onClick={() =>
              window.open("https://www.linkedin.com/company/wavelf/", '_blank"')
            }
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                style: { verticalAlign: "middle" },
              }}
            >
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
          </Icon>
          <Icon onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCmCVCL3MzjS6uTkQMG9111w",
              "_blank"
            )}>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                style: { verticalAlign: "middle" },
              }}
            >
              <div>
                <FaYoutubeSquare />
              </div>
            </IconContext.Provider>
          </Icon>
        </Social>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
