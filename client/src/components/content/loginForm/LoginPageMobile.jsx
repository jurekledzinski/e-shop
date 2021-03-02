import React, { useContext } from "react";

import "./LoginPageMobile.scss";

import { StoreContext } from "../../../store/StoreProvider";

import FormLogin from "./FormLogin";

const LoginPageMobile = () => {
  const { user } = useContext(StoreContext);

  return (
    <div className="page-login">
      {!Boolean(user) ? (
        <FormLogin />
      ) : (
        <div className="page-login__cover"></div>
      )}
    </div>
  );
};
export default LoginPageMobile;
