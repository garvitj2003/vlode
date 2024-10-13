import { CreateBlogInput } from "@garvit__nmps/zod-common";
import axios from "axios";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Loader } from "lucide-react";
import { useState } from "react";
import { backendUrl } from "../config";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newBlog, setNewBlog] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });

  const postBlog = async () => {
    try {
      setLoading(true);
      await axios.post(`${backendUrl}/api/v1/blog`, newBlog, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Tp tpggle open the component
  const openToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:sticky lg:top-16 ease duration-300 hover:shadow-md w-full">
      <div className=" bg-darkGray z-20 text-white rounded-t-lg hover:bg-black ease duration-300">
        <button
          onClick={openToggle}
          className="inline-flex p-2 w-full justify-center"
        >
          {"Write a blog"}
          {isOpen ? (
            <ChevronUp className="mx-4" />
          ) : (
            <ChevronDown className="mx-4" />
          )}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className=" w-full bg-gray-100 rounded-b-lg"
        >
          <div className="flex flex-col gap-4">
            <input
              required
              type="text"
              placeholder="Title"
              className="p-2 my-4 mx-2 rounded"
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
            <textarea
              required
              placeholder="Write your story.."
              className="p-2 resize-none mx-2 mb-4 lg:h-52 rounded "
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
            />
            <button
              className="mx-2 mb-3 flex justify-center font-medium hover:bg-black ease duration-300 bg-darkGray w-1/3 self-end text-white py-2 rounded-full"
              type="submit"
              onClick={postBlog}
            >
              {loading ? <Loader className=" animate-spin-slow " /> : "Publish"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
