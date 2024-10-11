import { Plus } from "lucide-react";
import { BlogCard } from "../components/BlogCard";

const Container = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mx-4 w-11/12">
      <div className="col-span-2 grid lg:grid-cols-2 gap-2">
        <div className="lg:col-span-2 flex justify-between sticky top-0 font-popins p-2  backdrop-blur-xl rounded shadow-sm">
          <span className="mx-2 text-mediumGray tracking-wider">
            Have something in mind
          </span>
          <button className="mx-2 bg-darkGray inline-flex gap-1 py-1 px-5 rounded-full text-white">
            <Plus />
            Write
          </button>
        </div>
        <BlogCard
          title={"The Future of Artificial Intelligence"}
          content={`Artificial Intelligence is rapidly evolving, transforming industries and reshaping our daily lives In this
    article, we explore the potential impacts and ethical considerations of AI advancements..`}
          published={"2nd feb 2024"}
          author={"Garvit"}
        />
        <BlogCard
          title={"The Future of Artificial Intelligence can be very scary"}
          content={`Artificial Intelligence is rapidly evolving, transforming industries and reshaping our daily lives In this
    article, we explore the potential impacts and ethical considerations of AI advancements..`}
          published={"2nd feb 2024"}
          author={"Garvit"}
        />
      </div>
      <div></div>
    </div>
  );
};
export default Container;
