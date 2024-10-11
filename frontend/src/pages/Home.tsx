import { BlogCard } from "../components/BlogCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-white  w-screen flex flex-col items-center">
      <Header />
      <BlogCard
        title={"The Future of Artificial Intelligence"}
        content={`Artificial Intelligence is rapidly evolving, transforming industries and reshaping our daily lives. In this
          article, we explore the potential impacts and ethical considerations of AI advancements.Artificial Intelligence is rapidly evolving, transforming industries and reshaping our daily lives. In this
          article, we explore the potential impacts and ethical considerations of AI advancements.`}
        published={"2nd feb 2024"}
        author={"Garvit"}
      />
    </div>
  );
};
export default Home;
