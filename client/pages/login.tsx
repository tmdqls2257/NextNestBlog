import LogInForm from "elements/logInForm/LogInForm";
import React from "react";
import { RecoilRoot } from "recoil";
const Login = () => {
  return (
    <RecoilRoot>
      <LogInForm />
    </RecoilRoot>
  );
};

export default Login;
