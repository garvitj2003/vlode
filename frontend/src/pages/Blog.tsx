import { useNavigate, useParams } from "react-router-dom";
import { useSingleBlog } from "../hooks";
import { User } from "lucide-react";
import { PageSkeleton } from "../components/Skeleton";

const Blog = () => {
  const { id } = useParams();
  const { blog } = useSingleBlog(Number(id));
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/home");
  };
  // Function to give date a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Skeleton component
  if (!blog) {
    return <PageSkeleton />;
  }

  return (
    <div className="flex justify-center bg-white w-screen h-screen">
      <div className="max-w-3xl mx-auto  rounded-lg shadow w-3/4">
        <div className="p-6">
          <button
            className="mb-4 text-blue-600 hover:underline"
            onClick={navigateBack}
          >
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
