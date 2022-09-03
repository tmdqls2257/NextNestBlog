import React from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import BlogLayout from "../../layouts/BlogLayout";

const BlogDetail = () => {
  const router = useRouter();
  const { title, content } = router.query;
  return (
    <Layout>
      <BlogLayout>
        <section className="min-h-screen text-center">
          <h1>{"id"}</h1>
          <h1>{title}</h1>

          <h1>{content}</h1>
        </section>
      </BlogLayout>
    </Layout>
  );
};

export default BlogDetail;
