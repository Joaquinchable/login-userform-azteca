import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  setLoginAttempts,
  setFormData,
} from "../../store/reduxSlice.js";
import UsersForm from "../users/UsersForm.js";
import CustomInput from "../common/CustomInput.js";
import {
  Form,
  FormContainer,
  FormGroup,
  SubmitButton,
  ErrorMessage,
} from "../../styles/LoginForm.styled.js";


const Login = () => {
  //auth
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginAttempts = useSelector((state) => state.auth.loginAttempts);
  const formData = useSelector((state) => state.auth.formData);
  //Validaciones
  const [messageTime, setMessageTime] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [usernameValid, setUsernameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (loginAttempts === 0) {
      setMessageTime(true);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        dispatch(setLoginAttempts(3));
        setMessageTime(false);
        setCountdown(10);
        setErrorMessage(false);
        clearInterval(timer);
        dispatch(setFormData({ username: "", password: "" }));
      }, 10000);
    }
  }, [dispatch, loginAttempts]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFormData({ ...formData, [name]: value }));
    setErrorMessage(false);
    const usernameRegex = /^azteca$/;
    const passwordRegex = /^12345$/;

    if (name === "username") {
      setUsernameValid(usernameRegex.test(value));
    } else if (name === "password") {
      setPasswordValid(passwordRegex.test(value));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = formData;
    if (username === "azteca" && password === "12345") {
      dispatch(login());
      setErrorMessage(false);
    } else {
      dispatch(setLoginAttempts(loginAttempts - 1));
      setErrorMessage(true);
      if (loginAttempts === 1) {
        console.log("Lo contraseña es incorrecta");
        setErrorMessage(false);
      }
    }
  };

  const error = loginAttempts === 0 || isLoggedIn;

  return (
    <>
      <FormContainer >
        {!isLoggedIn ? (
          <Form  height="550px" onSubmit={onSubmit}>
            <h1>Login</h1>
            <FormGroup>
              <CustomInput
                label="Usuario:"
                htmlFor="username"
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleInputChange}
                required
                w="100%"
                valid={usernameValid}
              />
            </FormGroup>
            <FormGroup>
              <CustomInput
                label="Contraseña:"
                htmlFor="password"
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleInputChange}
                required
                w="100%"
                valid={passwordValid}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={error}>
              Iniciar Sesión
            </SubmitButton>
            <br />
            <br />
            {errorMessage === true && (
              <ErrorMessage>
                El usuario o la contraseña es incorrecta
              </ErrorMessage>
            )}
            {messageTime === true && (
              <ErrorMessage>
                Excedio el número de intentos. Intente de nuevo en {countdown}
              </ErrorMessage>
            )}
          </Form>
        ) : (
          <UsersForm />
        )}
      </FormContainer>
    </>
  );
};

export default Login;
