//Dependencies
import { useState, useEffect } from "react";

export default function useModalConfigHook() {
  const [isOpenModalConfiguracion, setIsOpenModalConfiguracion] =
    useState(false);

  const handleClickModalConfiguracion = () => {
    setIsOpenModalConfiguracion(!isOpenModalConfiguracion);

    console.log("isOpenModalConfiguracion", isOpenModalConfiguracion);
  };

  return {
    isOpenModalConfiguracion,
    handleClickModalConfiguracion,
  };
}
