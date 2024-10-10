import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

interface AuthCardTypes {
  heading: string;
  subHeading: string;
  link: string;
  buttonText: string;
  handleSubmit: any;
  children: React.ReactNode;
}

const AuthCard = ({
  heading,
  subHeading,
  link,
  buttonText,
  handleSubmit,
  children,
}: AuthCardTypes) => {
  return (
    <motion.form
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-full justify-center items-center gap-8 my-4 "
      onSubmit={handleSubmit}
    >
      <div className="w-full font-popins">
        <div className="text-3xl text-center">{heading}</div>
        <div className="text-sm text-center text-mediumGray">
          {subHeading}
          <Link
            to={`/${link}`}
            className="underline pl-1 hover:text-darkGray transition-all ease-in-out duration-500"
          >
            {link}
          </Link>
        </div>
      </div>
      {children}

      <button
        className="hover:bg-black bg-darkGray transition-all ease-in-out duration-500 text-white px-4 py-2 w-1/2 md:px-6 md:my-2 font-semibold rounded-full"
        type="submit"
      >
        {buttonText}
      </button>
    </motion.form>
  );
};
export default AuthCard;
