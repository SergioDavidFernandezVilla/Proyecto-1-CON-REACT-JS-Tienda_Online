//Dependencies
import { useContext, useState } from "react";

//Hooks
import { useMenuAuthHook } from "../../../hooks/MenuAuth/useMenuAuthHook";

//Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const { dataUser } = useMenuAuthHook();

  console.log("user.length", dataUser);

  return (
    <>
      {dataUser ? (
        <AccountComponent user={dataUser} />
      ) : (
        <SignAccoutComponent />
      )}
    </>
  );
};
