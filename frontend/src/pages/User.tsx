import { User } from "lucide-react";
import { useUserDetails } from "../hooks";
import { BlogCard } from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserPageSkeleton } from "../components/Skeleton";

const UserPage = () => {
  const { userDetails, posts } = useUserDetails();
  const navigate = useNavigate();

  // Function to give date a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: object = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function for user Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logged out!");
  };

  if (!userDetails) {
    return <UserPageSkeleton />;
  }
  return (
    <div className="w-screen bg-white flex flex-col items-center p-6">
      <div className="max-w-3xl sticky top-2 bg-transparent backdrop-blur-lg z-20 w-full shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-6">
              <User className="w-10 h-10 text-gray-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {userDetails.name}
              </h1>
              <p className="text-sm text-gray-600">{userDetails.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout} // Add your logout function here
            className="px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-700 font-popins ease duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="w-full lg:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((blogs) => (
          <BlogCard
            id={blogs.id}
            key={blogs.id}
            title={blogs.title}
            content={blogs.content}
            published={formatDate(blogs.published)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
