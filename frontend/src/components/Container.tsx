import { Link } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { Skeleton } from "./Skeleton";
const Container = () => {
  const { loading, blogs } = useBlogs();

  // To check if the user is Logged in.
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="w-full h-full justify-center items-center">
        <h1 className="font-popins text-center text-2xl">
          you are not logged in.{" "}
          <Link
            to={"/signin"}
            className="text-xl underline hover:text-mediumGray"
          >
            login
          </Link>
        </h1>
      </div>
    );
  }

  // Function to give date into a pretty format
  const formatDate = (dateTimeString: string) => {
    const dateString = dateTimeString.split("T")[0]; // Extract date part
    const date = new Date(dateString);
    const options: any = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-4 w-11/12">
      <div></div>
      <div className="col-span-2 grid lg:grid-cols-2 gap-2">
        {loading
          ? // Create an array of length 6 and map over it to render 6 Skeleton components
            Array(6)
              .fill(0)
              .map((_, index) => <Skeleton key={index} />)
          : blogs.map((blogs) => (
              <BlogCard
                key={blogs.id}
                title={blogs.title}
                content={blogs.content}
                published={formatDate(blogs.published)}
                author={blogs.author.name}
              />
            ))}
      </div>
    </div>
  );
};
export default Container;
