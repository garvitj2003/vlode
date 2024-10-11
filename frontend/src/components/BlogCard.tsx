import { Link } from "react-router-dom";
import { ChevronRight, User } from "lucide-react";
interface blogTypes {
  title: string;
  content: string;
  author: string;
  published: string;
}
export const BlogCard = ({ title, content, author, published }: blogTypes) => {
  return (
    <div className="max-w-lg bg-white overflow-hidden border-b border-mediumGray">
      <div className="md:p-6 p-2 ">
        <div className="flex items-center md:mb-4 mb-1">
          <div className="w-8 h-8 rounded-full bg-darkGray flex items-center justify-center mr-4">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-darkGray ">{author}</p>
            <p className="text-xs text-gray-600 ">Published on {published}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-1 md:mb-2 text-darkGray ">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
          {content.slice(0, 99) + "..."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-mediumGray hover:underline"
        >
          Read more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
