import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
