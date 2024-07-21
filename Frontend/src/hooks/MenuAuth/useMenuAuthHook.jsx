//Dependencies
import { useState } from "react";

export const useMenuAuthHook = () => {
  const [isOpenMenuAuth, setIsOpenMenuAuth] = useState(false);

  const [user, setUser] = useState([
    {
      id: 1,
      name: "Pedro",
      email: "pedro@gmail.com",
      password: "123456",
      role: "user",
    },
  ]);

  const handleClickLogin = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
    console.log("click login");
  };

  const handleClickLogout = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
    console.log("click logout");
  };

  return {
    isOpenMenuAuth,
    setIsOpenMenuAuth,
    user,
    setUser,
    handleClickLogin,
    handleClickLogout,
  };
};
