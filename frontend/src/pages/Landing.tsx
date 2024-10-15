import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Landing = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen flex-col flex justify-between w-11/12 md:w-3/4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-4 md:py-6 flex justify-between border-b border-black font-popins">
          <p className="text-2xl md:text-3xl text-darkGray  font-Pacifico">
            Vlode
          </p>
          <div className="inline-flex items-baseline text-sm text-mediumGray gap-6 ">
            <a
              href="https://handy-antique-370.notion.site/Project-Journal-Vlode-11eb447e1380801a9a21efb807b93c79"
              target="_blank"
              className="hover:text-darkGray  invisible md:visible transition-all ease-in-out duration-500"
            >
              About
            </a>
            <Link
              to="/signin"
              className="hover:text-darkGray transition-all ease-in-out duration-500"
            >
              Signin
            </Link>
            <button
              onClick={navigateToSignup}
              className="bg-darkGray hover:bg-black  py-2 px-4 transition-all ease-in-out duration-500 text-white tracking-tighter rounded-full font-semibold"
            >
              Get started
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-3/5 font-popins ">
          <h2 className=" text-5xl md:text-8xl text-darkGray ">
            Innovation Paths & Reflections
          </h2>
          <h3 className="text-mediumGray text-lg md:text-xl tracking-tighter my-2 md:my-4">
            A Hub for Reading, Sharing & Inspiring Ideas!
          </h3>
          <button
            onClick={navigateToSignup}
            className="hover:bg-black bg-darkGray transition-all ease-in-out duration-500 text-white px-4 py-2 md:px-6 md:my-2 font-semibold rounded-full"
          >
            Start Reading
          </button>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
export default Landing;
