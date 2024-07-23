//Dependencies
import { useContext } from "react";

//Context
import { AuthContext } from "../../../context/AuthContext/useAuthContext";

//Components
import { AccountComponent } from "./AccountComponent/AccountComponent";
import { SignAccoutComponent } from "./SignAccoutComponent/SignAccoutComponent";

export const OtherOptionsComponent = () => {
  const { user } = useContext(AuthContext);

  console.log("user.length", user.length);
  console.log(user);

  return (
    <>
      {user.length ? <AccountComponent user={user} /> : <SignAccoutComponent />}
    </>
  );
};
