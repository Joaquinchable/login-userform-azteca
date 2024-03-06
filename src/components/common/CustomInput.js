import React from "react";
import PropTypes from "prop-types";
import { InputContainer, Label, Input } from "../../styles/Input.styled";

const CustomInput = ({
  label,
  name,
  value,
  onChange,
  required,
  type,
  disabled,
  readOnly,
  w,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        width={w}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
      />
    </InputContainer>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  w: PropTypes.string,
};

export default CustomInput;
