import { useState } from "react";
import LabelledInput from "../components/LabelledInput";
import { SigninInput } from "@garvit__nmps/zod-common";
import Quote from "../components/Quote";
import AuthCard from "../components/AuthCard";

const Signin = () => {
  const [input, setInput] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen flex w-4/5 lg:grid lg:grid-cols-2 lg:gap-8 justify-center items-center font-popins lg:w-full overflow-hidden">
      <AuthCard
        heading={"Login to Vlode"}
        subHeading={"Dont' have an Account!"}
        link={"signup"}
        buttonText={"Sign in"}
        handleSubmit={handleSubmit}
      >
        <LabelledInput
          type="email"
          label="Email"
          placeholder="your@mail.com"
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
        />
        <LabelledInput
          type="password"
          label="Password"
          placeholder="password"
          onChange={(e) => {
            setInput({ ...input, password: e.target.value });
          }}
        />
      </AuthCard>
      <Quote />
    </div>
  );
};
export default Signin;
