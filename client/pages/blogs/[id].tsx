import React, { useState } from "react";
import Image from "next/image";

import Layout from "../../layouts/layout";
import BlogLayout from "../../layouts/BlogLayout";
import BlogService from "../../service/blogService";
import { BlogModel } from "data/blogData";
import parse from "html-react-parser";

type BlogDetailProps = {
  // children: React.ReactNode;
  postDetail: BlogModel;
};

const BlogDetail = ({ postDetail }: BlogDetailProps) => {
  return (
    <Layout>
      <BlogLayout>
        <section className="min-h-screen text-center">
          <h1>{postDetail.title}</h1>

          {parse(postDetail.contents)}
        </section>
      </BlogLayout>
    </Layout>
  );
};

export const getServerSideProps = async (context: {
  query: { id: string };
}) => {
  try {
    const postDetail = await BlogService.getBlog(context.query.id);
    return { props: { postDetail } };
  } catch (err) {
    return { props: {} };
  }
};

export default BlogDetail;
