"use client"
import useStore from "@/utils/useStore";


export default function Pagination() {
  const posts = useStore((state) => state.posts);
  return (
    <div>
      <h1>post store : {posts.length}</h1>
    </div>
  )
}
