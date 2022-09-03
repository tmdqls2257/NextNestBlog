import React from "react";
import Footer from "../elements/footer/footer";

type BlogLyaoutProps = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLyaoutProps) => {
  return (
    <>
      <img src="/black_girl.png" alt="" />
      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
