import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
`;

const Header = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height:60px;
`;

const Footer = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height:200px;
`;

const LogoImage = styled.img`
  width: 100px;
  cursor: pointer;
`;

const FooterLogoImage = styled.img`
  width: 200px;
  cursor: pointer;
`;

export { LayoutWrapper, Container, Header, Footer, LogoImage, FooterLogoImage};
