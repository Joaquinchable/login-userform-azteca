import React from "react";
import PropTypes from "prop-types";
import {
  LayoutWrapper,
  Header,
  Footer,
  LogoImage,
  FooterLogoImage,
  Container,
} from "../../styles/Layout.styled";
import logoF from './../../resources/img/logoFooter.jpeg'
import logoH from './../../resources/img/logoHeader.png'

const Layout = ({ children }) => {
  const handleReload = () => {
    window.location.reload();
  };
  
  return (
    <LayoutWrapper>
      <Header>
        <LogoImage
         onClick={handleReload}
          src={logoH}
          alt="Header Logo"
        />
      </Header>
      <Container>{children}</Container>
      <Footer>
        <FooterLogoImage
          onClick={handleReload}
          src={logoF}
          alt="Footer Logo"
        />
      </Footer>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
