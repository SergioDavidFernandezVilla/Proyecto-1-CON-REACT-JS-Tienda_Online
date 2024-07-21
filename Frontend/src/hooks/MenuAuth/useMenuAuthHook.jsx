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
      avatarURL: "https://avatars.dicebear.com/api/initials/Pedro.svg",
    },
  ]);

  const handleClickLogin = () => {
    setIsOpenMenuAuth(!isOpenMenuAuth);
    console.log("click login");
  };

  const handleClickLogout = () => {
    setUser([]);
    console.log("Se ha cerrado sesión");
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
