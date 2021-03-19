import React from "react";
import Styled from "styled-components";

const FooterWrapper = Styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding: 24px 0;
margin: auto;
flex-wrap: wrap;
`;


const FooterText = Styled.p`
display: inline-block;
flex-basis: 100%;
color: rgba(26, 43, 54, 0.9);
`;
const Footer = () => (
  <FooterWrapper>
    <FooterText>Copyright 2021 – William Krakow</FooterText>
    <FooterText>Proudly made by my papa</FooterText>
    <FooterText>
      <a
        href="https://williamkrakow.dev/"
        alt="William Krakow | Developer, Designer, Writer"
        style={{
          color: "inherit",
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          textDecorationColor: "rgb(34 193 195 / 60%)",
        }}
      >
        williamkrakow.dev
      </a>
    </FooterText>
  </FooterWrapper>
);

export default Footer
