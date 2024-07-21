//Dependencies
import { useContext } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { AccountComponent } from "./AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const { user } = useContext(AuthContext);
  console.log("user tamaño", user.length);

  return (
    <>
      {user.length > 0 ? (
        <AccountComponent user={user} />
      ) : (
        <SignAccoutComponent />
      )}
    </>
  );
};
