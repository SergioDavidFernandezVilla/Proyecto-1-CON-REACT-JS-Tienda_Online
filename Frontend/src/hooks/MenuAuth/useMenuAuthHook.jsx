import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useMenuAuthHook = () => {
  const [isOpenMenuAuth, setIsOpenMenuAuth] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState(false);
  const [errorMessageGeneral, setErrorMessageGeneral] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const [dataUser, setDataUser] = useState([]);
  const [dataRegister, setDataRegister] = useState([]);

  const ERROR_MESSAGE = "Correo o contraseña incorrectos";
  const SUCCESS_MESSAGE = "Login exitoso";

  const handleClickRegister = () => {
    setIsOpenAccount(!isOpenAccount);
  };

  const handleClickLogin = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
  };

  const handleClickLogout = () => {
    setDataUser([]);
    Cookies.remove("token"); // Eliminar el token de las cookies al cerrar sesión
    console.log("Se ha cerrado sesión");
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setErrorEmail(false);
    setErrorMessageEmail("");
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setErrorPassword(false);
    setErrorMessagePassword("");
  };

  const handleSubmitData = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.message === ERROR_MESSAGE || data.message === SUCCESS_MESSAGE) {
        setErrorGeneral(true);
        setErrorMessageGeneral(data.message);
      }

      setDataUser(data);
      console.log("data", data);

      // Si el login es exitoso, guardar el token en una cookie
      if (data.token) {
        Cookies.set("token", data.token, { expires: 1 }); // Expira en 1 día
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitDataRegister = async (event, url) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const confirmpassword = event.target.confirmpassword.value;

    const userData = {
      email: email,
      password: password,
      name: name,
      confirmpassword: confirmpassword,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.message === ERROR_MESSAGE || data.message === SUCCESS_MESSAGE) {
        setErrorGeneral(true);
        setErrorMessageGeneral(data.message);
      }

      const userArray = data.user ? [data.user] : [];
      setDataRegister(userArray);

      // Si el registro es exitoso, guardar el token en una cookie
      if (data.token) {
        Cookies.set("token", data.token, { expires: 1 }); // Expira en 1 día
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Si existe un usuario en la sesión, No mostrar el componente de login
  }, [dataUser]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // Verificar si el token es válido
      const verifyToken = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/v1/verify-token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          if (data.user) {
            setDataUser([data.user]);
          }
        } catch (error) {
          console.log("Error al verificar el token:", error);
          Cookies.remove("token");
        }
      };
      verifyToken();
    }
  }, []);

  return {
    handleSubmitDataRegister,
    dataUser,
    setDataUser,
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    isOpenAccount,
    setIsOpenAccount,
    handleSubmitData,
    handleChangeEmail,
    handleChangePassword,
    errorEmail,
    errorMessageEmail,
    errorPassword,
    errorGeneral,
    errorMessageGeneral,
    errorMessagePassword,
    handleClickLogin,
    handleClickLogout,
    handleClickRegister,
  };
};
