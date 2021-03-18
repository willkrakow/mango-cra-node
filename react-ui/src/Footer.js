import React from "react";
import Styled from "styled-components";

const FooterWrapper = Styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding: 24px 0;
margin: auto;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Copyright 2021 – William Krakow</p>
    <p>Proudly made by my papa</p>
    <a
      href="https://williamkrakow.dev/"
      alt="William Krakow | Developer, Designer, Writer"
    >
      williamkrakow.dev
    </a>
  </FooterWrapper>
);

export default Footer
