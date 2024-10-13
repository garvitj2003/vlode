import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between sticky top-0 z-50 bg-transparent backdrop-blur-lg w-11/12 p-2 border-b border-darkGray">
      <p className="text-2xl md:text-3xl text-darkGray  font-Pacifico">Vlode</p>
      <div className="inline-flex items-baseline">
        <Link
          to={"/user"}
          className="w-8 h-8 rounded-full bg-darkGray hover:bg-gray-600 transition-all ease duration-300 flex items-center justify-center mr-4"
        >
          <User className="w-4 h-4 text-white" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
