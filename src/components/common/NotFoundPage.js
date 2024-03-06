import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <h1>404 Not Found</h1>
      <Link to="/">Home from Link</Link>
    </NotFoundContainer>
  );
}
