import React from "react";
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, CloseButton } from './../../styles/Modal.styled'

const Modal = ({ onClose, children, close, height }) => {
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent height={height} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>{close}</CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Modal;