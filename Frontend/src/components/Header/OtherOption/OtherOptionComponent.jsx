//Dependencies
import { useContext } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  return (
    <>
      <SignAccoutComponent />
    </>
  );
};
