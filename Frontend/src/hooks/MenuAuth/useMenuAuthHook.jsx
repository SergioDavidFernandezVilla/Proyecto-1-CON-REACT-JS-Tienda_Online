//Dependencies
import { useState } from "react";

export const useMenuAuthHook = () => {
  const [isOpenMenuAuth, setIsOpenMenuAuth] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState(false);
  const [errorMessageGeneral, setErrorMessageGeneral] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const [user, setUser] = useState([]);

  const ERROR_MESSAGE = "Correo o contraseña incorrectos";
  const SUCCESS_MESSAGE = "Login exitoso";

  const handleClickLogin = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
    console.log("click login");
  };

  const handleClickLogout = () => {
    setUser([]);
    console.log("Se ha cerrado sesión");
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setErrorEmail(false);
    setErrorMessageEmail("");

    console.log("email", email);
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setErrorPassword(false);
    setErrorMessagePassword("");

    console.log("password", password);
  };

  const handleSubmitData = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const userData = {
      email: email,
      password: password,
    };

    async function loginData() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const user = await response.json();

        if (
          user.message === ERROR_MESSAGE ||
          user.message === SUCCESS_MESSAGE
        ) {
          setErrorGeneral(true);
          setErrorMessageGeneral(user.message);
        }

        setUser(user);

        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }

    loginData();
  };

  return {
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    handleSubmitData,
    handleChangeEmail,
    handleChangePassword,
    errorEmail,
    errorMessageEmail,
    errorPassword,
    errorGeneral,
    errorMessageGeneral,
    errorMessagePassword,
    user,
    setUser,
    handleClickLogin,
    handleClickLogout,
  };
};
