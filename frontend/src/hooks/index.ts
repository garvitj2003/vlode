import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config";

// Blog types
interface Blog {
  id: number;
  title: string;
  content: string;
  published: string;
  author: {
    name: string;
  };
}

// Hook to fetch blogs from the backend
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
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

// hook to fetch a single blog from backend
export const useSingleBlog = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/key/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blog,
  };
};
