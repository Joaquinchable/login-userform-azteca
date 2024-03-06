import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: ${({ height }) => height || "700px"};
`;

const FormContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #ffff;
   @media (max-width: 500px) {
    width: 80%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 20px;
  width: 80%;

  span {
    color: red;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#17a54d")};
  color: #fff;
  border: none;
  width: 50%;
  height: 50px;
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const CardContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #ffff;
`;

const Card = styled.div`
  margin-bottom: 15px;

  label {
    font-weight: bold;
  }

  span {
    margin-left: 5px;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  Form,
  FormContainer,
  FormGroup,
  SubmitButton,
  CardContainer,
  Card,
  ErrorMessage,
};
