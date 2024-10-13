import { useParams } from "react-router-dom";
import { useBlogs } from "../hooks";
import { useState, useEffect } from "react";
import { User } from "lucide-react";

const Blog = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const [blog, setBlog] = useState<any>(null);

  // Function to give date into a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Use effect to filter the blog when blogs or id changes
  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === Number(id));
    setBlog(foundBlog);
  }, [id, blogs]);

  // Skeleton component
  if (!blog) {
    return (
      <div className="flex justify-center bg-white w-screen h-screen">
        <div className="max-w-3xl mx-auto rounded-lg shadow-lg lg:w-3/4 w-full">
          <div className="p-6">
            <div className="mb-4 w-32 h-6 bg-gray-200 animate-pulse"></div>
            <div className="h-10 bg-gray-200 animate-pulse w-3/4 mb-4"></div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 animate-pulse"></div>
              <div>
                <div className="h-4 w-24 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-3 w-20 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
            <div className="max-w-none">
              <div className="h-4 w-full bg-gray-200 animate-pulse mb-4"></div>
              <div className="h-4 w-full bg-gray-200 animate-pulse mb-4"></div>
              <div className="h-4 w-5/6 bg-gray-200 animate-pulse mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-white w-screen h-screen">
      <div className="max-w-3xl mx-auto  rounded-lg shadow w-3/4">
        <div className="p-6">
          <button className="mb-4 text-blue-600 hover:underline">
            ← Back to blogs
          </button>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {blog.title}
          </h1>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {blog.author.name}
              </p>
              <p className="text-xs text-gray-600">
                {formatDate(blog.published)}
              </p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="mb-4 text-gray-700">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
