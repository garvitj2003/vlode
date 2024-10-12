import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config";

interface Blog {
  title: string;
  content: string;
  published: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
