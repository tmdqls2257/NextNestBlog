import React from "react";
import { BlogModel } from "../../data/blogData";
import { useRouter } from "next/router";
import Card from "./Card";
import IconBox, { IconType } from "../../common/IconBox/IconBox";

type CardProps = {
  // children: React.ReactNode;
  blogData: BlogModel;
};

export default function BlogCard({ blogData }: CardProps) {
  const date = new Date(blogData.createdAt).toLocaleDateString().split(",");
  const router = useRouter();
  const onClick = () => {
    router.push(
      {
        pathname: `blogs/${blogData.id}`,
        query: {
          title: blogData.title,
          content: blogData.contents,
        },
      },
      `blogs/${blogData.id}`
    );
  };

  return (
    <Card onClick={onClick}>
      <h5 className="py-3">{blogData.title}</h5>
      <p>{blogData.contents}</p>
      {/* {children} */}

      {/* <p>{Date.parse(blogData.createdAt)}</p> */}
      <section className="flex items-center justify-between">
        <p className="flex flex-row-revers">{date[0]}</p>
        <div className="flex">
          <IconBox iconName={IconType.update} />
          <IconBox iconName={IconType.trash} />
        </div>
      </section>
    </Card>
  );
}
