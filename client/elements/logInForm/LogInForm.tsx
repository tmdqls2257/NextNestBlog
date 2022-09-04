import Card from "../../common/card/Card";
import React, { useRef, useState } from "react";
import Button from "../../common/button/button";
import NetworkService, { MethodType } from "service/axios";

const LogInForm = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onLogIn = () => {
    NetworkService.request("users/login", MethodType.post, {
      data: {
        email: account.email,
        password: account.password,
      },
    }).then((res) => console.log(res));
    console.log(account);
  };

  const onReset = () => {
    const resetInputs = {
      email: "",
      password: "",
    };
    //초기화 객체값을 넣은 변수로 변경하도록 셋인풋 실행
    setAccount(resetInputs);
  };

  //anerim.tistory.com/180 [디발자 뚝딱:티스토리]
  출처: https: return (
    <Card style="absolute_center">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="email"
        >
          {"email"}
        </label>
        <input
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          placeholder="email"
          onBlur={onChangeAccount}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          {"Password"}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          name="password"
          id="password"
          type="password"
          onChange={onChangeAccount}
          placeholder="******************"
        />
        {/* <p className="text-red text-xs italic">{"Please choose a password."}</p> */}
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={onLogIn}>{"Sign In"}</Button>

        <a
          className="inline-block align-baseline font-bold text-sm text-violet hover:text-blue-darker"
          href="#"
        >
          {"Forgot Password?"}
        </a>
      </div>
    </Card>
  );
};

export default LogInForm;
