//Dependencies
import { useContext } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const { dataUSer } = useContext(AuthContext);

  console.log("user.length", dataUSer.length);

  return (
    <>
      {dataUSer.length ? (
        <AccountComponent user={dataUSer} />
      ) : (
        <SignAccoutComponent />
      )}
    </>
  );
};
