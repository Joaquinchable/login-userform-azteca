import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom || "10px"};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom || "5px"};
`;

const Input = styled.input`
  height: 30px;
  width: ${({ width }) => width || "100%"};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  ${({ disabled }) => disabled && "opacity: 0.5;"}
  ${({ readOnly }) => readOnly && "background-color: #f4f4f4;"}
`;

InputContainer.propTypes = {
  marginBottom: PropTypes.string,
};

Label.propTypes = {
  marginBottom: PropTypes.string,
};

Input.propTypes = {
  width: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

export { InputContainer, Label, Input };
