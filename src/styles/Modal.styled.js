import PropTypes from 'prop-types';
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 400px;
  height: ${({ height }) => height || '400px'};
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const CloseButton = styled.button`
  position: relative;
  left: 370px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  @media (max-width: 500px) {
    left: 90%;
  }
`;

ModalBackdrop.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
};

ModalContent.propTypes = {
  height: PropTypes.string,
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { ModalBackdrop, ModalContent, CloseButton };
