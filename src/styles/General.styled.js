import styled from "styled-components";

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ContentBox = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.p`
  font-size: 18px;
  color: red;
  text-align: center;
`;

const Loading = styled.img`
  width: 100px;
  height: 100px;
  margin: 60px 10px 60px 130px;
  @media (max-width: 500px) {
     margin: auto;
     
  }
  @media (max-width: 400px) {
     margin: auto;
  }
 
`;

export { UserImage, ContentBox, MessageContainer, Loading };
