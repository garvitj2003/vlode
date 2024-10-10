import { motion } from "framer-motion";

const Quote = () => {
  return (
    <motion.div
      className="hidden lg:block ml-5"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className=" text-8xl text-darkGray ">Welcome to Vlode</h2>
      <h2 className="text-7xl text-mediumGray">Your Ideas, Amplified</h2>
    </motion.div>
  );
};
export default Quote;
