import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  SubmitButton,
  CardContainer,
  Card,
} from "../../styles/LoginForm.styled.js";
import { UserImage, Loading } from "../../styles/General.styled.js";
import CustomInput from "../common/CustomInput.js";
import Modal from "../common/Modal.js";
import { getUserServices } from "../../utils/api/api.js";
import loading from "./../../resources/gif/loading.gif";

const UsersForm = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalTimeout, setModalTimeout] = useState(null);
  const [invalidInputMessage, setInvalidInputMessage] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        try {
          const userInfoData = await getUserServices(userId);
          setUserInfo(userInfoData);
        } catch (error) {
          console.error(error.message);
          setUserInfo({});
        }
      }
    };

    fetchUserInfo();
  }, [userId]);

  useEffect(() => {
    return () => {
      clearTimeout(modalTimeout);
    };
  }, [modalTimeout]);

  const handleUserFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserIdChange = (event) => {
    const input = event.target.value;
    const onlyNumbers = input.replace(/[^0-9]/g, "");
    setUserId(onlyNumbers);
    setIsSearchEnabled(!!onlyNumbers);
    setUserInfo({});
    if (input !== onlyNumbers) {
      setInvalidInputMessage("Solo se aceptan números");
    } else {
      setInvalidInputMessage("");
    }
  };

  const handleSearch = () => {
    setIsLoading(true);
    setShowModal(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    setModalTimeout(timeout);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Form onSubmit={handleUserFormSubmit}>
        <h1>Usuarios</h1>
        <FormGroup >
          <CustomInput
            label="ID usuario:"
            htmlFor="userId"
            type="text"
            name="userId"
            value={userId}
            onChange={handleUserIdChange}
            w="100%"
          />
          <span style={{ color: "red" }}>{invalidInputMessage}</span>
        </FormGroup>
        <FormGroup>
          <CustomInput
            label="Nombre:"
            htmlFor="firstName"
            type="text"
            name="firstName"
            value={userInfo.firstName || ""}
            readOnly={true}
            disabled={true}
            w="100%"
          />
        </FormGroup>
        <FormGroup>
          <CustomInput
            label="Apellido Paterno:"
            htmlFor="lastName"
            type="text"
            name="lastName"
            value={userInfo.lastName || ""}
            readOnly={true}
            disabled={true}
            w="100%"
          />
        </FormGroup>
        <FormGroup>
          <CustomInput
            label="Apellido Materno:"
            htmlFor="middleName"
            type="text"
            name="middleName"
            value={userInfo.middleName || ""}
            readOnly={true}
            disabled={true}
            w="100%"
          />
        </FormGroup>
        <SubmitButton
          type="button"
          onClick={handleSearch}
          disabled={!isSearchEnabled}
        >
          {isSearchEnabled ? "Buscar usuario por ID" : "Buscar"}
        </SubmitButton>
      </Form>

      {showModal && (
        <Modal close="X" onClose={closeModal}>
          <CardContainer>
            {isLoading ? (
              <Loading src={loading} alt="loading" />
            ) : (
              <>
                <UserImage src={userInfo.image} alt="User" />

                <h3>Información del Usuario</h3>
                <Card>
                  <label>Nombre:</label>
                  <span>{userInfo.firstName}</span>
                </Card>
                <Card>
                  <label>Apellido Paterno:</label>
                  <span>{userInfo.lastName}</span>
                </Card>
                <Card>
                  <label>Apellido Materno:</label>
                  <span>{userInfo.middleName}</span>
                </Card>
              </>
            )}
          </CardContainer>
        </Modal>
      )}
    </>
  );
};

export default UsersForm;
