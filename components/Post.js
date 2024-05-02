"use client";
import { fetchPosts } from "@/utils/fetchData";
import useStore from "@/utils/useStore";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function Post() {
  const setPosts = useStore((state) => state.setPosts);
  const posts = useStore((state) => state.posts);
  const { data, isLoading, isError } = useQuery("posts", fetchPosts);
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <div>
      <h1>Posts</h1>
      <div>Total Posts: {data?.length}</div>

      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
