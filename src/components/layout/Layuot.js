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

const Layout = ({ children }) => {
  const handleReload = () => {
    window.location.reload();
  };
  
  return (
    <LayoutWrapper>
      <Header>
        <LogoImage
         onClick={handleReload}
          src="https://www.bancoazteca.com.mx/content/dam/azteca/header/221229/logo-banco-azteca.jpeg"
          alt="Header Logo"
        />
      </Header>
      <Container>{children}</Container>
      <Footer>
        <FooterLogoImage
          onClick={handleReload}
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112018/untitled-1_54.png?hZgG.H_gQKjIwLnnQOVvVjmZozntLjPx&itok=w_kfJaH3"
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
