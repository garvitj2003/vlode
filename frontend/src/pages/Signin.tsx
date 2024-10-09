import { useState } from "react";
import LabelledInput from "../components/LabelledInput";
import { SigninInput } from "@garvit__nmps/zod-common";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.form
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-full justify-center items-center gap-8 my-4 "
        onSubmit={handleSubmit}
      >
        <div className="w-full font-popins">
          <div className="text-3xl text-center">Login to Vlode</div>
          <div className="text-sm text-center text-mediumGray">
            Don't have an account!
            <Link
              to={"/signup"}
              className="underline pl-1 hover:text-darkGray transition-all ease-in-out duration-500"
            >
              Sign up
            </Link>
          </div>
        </div>

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
            setInput({ ...input, email: e.target.value });
          }}
        />
        <button
          className="hover:bg-black bg-darkGray transition-all ease-in-out duration-500 text-white px-4 py-2 w-1/2 md:px-6 md:my-2 font-semibold rounded-full"
          type="submit"
        >
          Sign in
        </button>
      </motion.form>
      <motion.div
        className="hidden lg:block "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className=" text-8xl text-darkGray ">Welcome to Vlode</h2>
        <h2 className="text-7xl text-mediumGray">Your Ideas, Amplified</h2>
      </motion.div>
    </div>
  );
};
export default Signin;
