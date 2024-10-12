import { Link } from "react-router-dom";
import { ChevronRight, User } from "lucide-react";
import { motion } from "framer-motion";

interface blogTypes {
  title: string;
  content: string;
  author: string;
  published: string;
}
export const BlogCard = ({ title, content, author, published }: blogTypes) => {
  const truncatedTitle = title.length > 40 ? title.slice(0, 40) + "..." : title;
  const truncatedContent =
    content.length > 40 ? content.slice(0, 100) + "..." : content;
  return (
    <motion.div
      initial={{ opacity: 0.5, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg bg-white overflow-hidden border-b border-mediumGray shadow-md  hover:shadow-2xl duration-500"
    >
      <div className="md:p-6 p-2 ">
        <div className="flex items-center md:mb-4 mb-1">
          <div className="w-8 h-8 rounded-full bg-darkGray opacity-80 flex items-center justify-center mr-4">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-darkGray ">{author}</p>
            <p className="text-xs text-gray-600 ">Published on {published}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-1 md:mb-2 text-darkGray ">
          {truncatedTitle}
        </h3>
        <p className="text-gray-600 mb-2 md:mb-4">{truncatedContent}</p>
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-blue-500 hover:underline"
        >
          Read more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};
