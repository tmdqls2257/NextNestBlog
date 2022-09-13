import React, { useEffect, useState } from "react";
import Layout from "../../layouts/layout";
import { BlogData, BlogModel } from "../../data/blogData";
import BlogCard from "../../common/card/BlogCard";
import BlogService from "../../service/blogService";

type BlogsProps = {
  blogs: BlogModel[];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <Layout>
      <ul className="flex gap-3 w-2/3 flex-wrap justify-center">
        {blogs.map((data, idx) => (
          <BlogCard blogData={data} key={idx}></BlogCard>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const blogs = await BlogService.getAllBlogs();
    return { props: { blogs } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
