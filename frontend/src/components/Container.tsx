import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
const Container = () => {
  //@ts-ignore
  const { loading, blogs } = useBlogs();
  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-4 w-11/12">
      <div className="col-span-2 grid lg:grid-cols-2 gap-2">
        {blogs.map((blogs) => (
          <BlogCard
            title={blogs.title}
            content={blogs.content}
            published={"2nd feb 2024"}
            author={blogs.author.name}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default Container;
