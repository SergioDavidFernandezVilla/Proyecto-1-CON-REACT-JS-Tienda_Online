//Dependencies
import { useContext, useState } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const { dataUSer } = useContext(AuthContext);

  console.log("user.length", dataUSer);

  return (
    <>
      {dataUSer ? (
        <AccountComponent user={dataUSer} />
      ) : (
        <SignAccoutComponent />
      )}
    </>
  );
};
