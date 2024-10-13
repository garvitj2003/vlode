import { useParams } from "react-router-dom";
import { useBlogs } from "../hooks";

const Blog = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const singleBlog = blogs.filter((blog) => blog.id === Number(id));
  console.log(singleBlog);
  return <div>Blog</div>;
};
export default Blog;
