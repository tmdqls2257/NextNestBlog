import React from "react";
import Layout from "../../layouts/layout";
import { BlogData } from "../../data/blogData";
import BlogCard from "../../common/card/BlogCard";

export default function Blogs() {
  return (
    <Layout>
      <ul className="flex gap-3">
        {BlogData.map((data, idx) => (
          <BlogCard blogData={data} key={idx}></BlogCard>
        ))}
      </ul>
    </Layout>
  );
}
