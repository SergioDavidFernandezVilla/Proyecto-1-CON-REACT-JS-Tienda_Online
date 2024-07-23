//Dependencies
import { useEffect, useState } from "react";

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

        const data = await response.json();

        if (
          data.message === ERROR_MESSAGE ||
          data.message === SUCCESS_MESSAGE
        ) {
          setErrorGeneral(true);
          setErrorMessageGeneral(data.message);
        }

        // Asegúrate de que 'user' sea un array
        const userArray = data.user ? [data.user] : [];

        setUser(userArray);

        console.log(userArray);
      } catch (error) {
        console.log(error);
      }
    }

    loginData();
  };

  useEffect(() => {
    // Si existe un usuario en la sesión, No mostrar el componente de login
    if (user.length > 0) {
      setIsOpenMenuAuth(false);
    }
  }, [user]);

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
