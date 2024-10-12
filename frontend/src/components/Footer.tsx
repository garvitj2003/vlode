import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center text-lg text-mediumGray m-2 border-t border-black">
        Made with{" "}
        <motion.span
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="inline-block"
        >
          {/* ❤️ */}🖤
        </motion.span>{" "}
        by{" "}
        <a
          target="_blank"
          href="https://x.com/GarvitXalt"
          className="border-b border-black italic hover:text-black transition-all ease-in-out duration-500"
        >
          Garvit
        </a>
      </div>
    </motion.div>
  );
};
export default Footer;
