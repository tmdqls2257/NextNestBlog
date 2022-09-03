import React from "react";
import Layout from "../../layouts/layout";
import { BlogData } from "../../data/blogData";
import Card from "../../common/card/card";

export default function Blogs() {
  return (
    <Layout>
      <ul className="flex gap-3">
        {BlogData.map((data, idx) => (
          <Card blogData={data} key={idx}></Card>
        ))}
      </ul>
    </Layout>
  );
}
