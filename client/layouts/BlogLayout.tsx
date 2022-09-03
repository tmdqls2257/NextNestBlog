import React from "react";

type BlogLyaoutProps = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLyaoutProps) => {
  return (
    <>
      <img src="/black_girl.png" alt="" />
      {children}
    </>
  );
};

export default BlogLayout;
