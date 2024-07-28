import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useMenuAuthHook = () => {
  const [isOpenMenuAuth, setIsOpenMenuAuth] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [token, setToken] = useState(Cookies.get("token") || "");

  const handleClickRegister = () => {
    setIsOpenAccount(!isOpenAccount);
  };

  const handleClickLogin = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
  };

  const handleClickLogout = () => {
    // Eliminar el token de las cookies al cerrar sesión y actualizar el estado del token en la cookie
    Cookies.remove("token");
    setToken("");
    setDataUser([]);

    console.log("Se ha cerrado sesión");
  };

  const handleSubmitData = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.user) {
        setDataUser([data.user]);
        Cookies.set("token", data.token, { expires: 1 });
        setToken(data.token);
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
    const userData = { email, password, name, confirmpassword };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.user) {
        setDataUser([data.user]);
        Cookies.set("token", data.token, { expires: 1 });
        setToken(data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
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
          setToken("");
        }
      }
    };
    verifyToken();
  }, [token]);

  useEffect(() => {
    const refreshToken = async () => {
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:3000/api/v1/refresh-token",
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
          console.log("Error al actualizar el token:", error);
          Cookies.remove("token");
          setToken("");
        }
      }
    };
    refreshToken();
  }, [token]);

  return {
    handleSubmitDataRegister,
    dataUser,
    token,
    setToken,
    setDataUser,
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    isOpenAccount,
    setIsOpenAccount,
    handleSubmitData,
    handleClickLogin,
    handleClickLogout,
    handleClickRegister,
  };
};
