import React from "react";
import { BlogModel } from "../../data/blogData";
import { classNameJoiner } from "../../utils/className";
import { useRouter } from "next/router";

type CardProps = {
  // children: React.ReactNode;
  blogData: BlogModel;
};

export default function Card({ blogData }: CardProps) {
  const date = new Date(blogData.createdAt).toLocaleDateString().split(",");
  // console.log(date.toLocaleString());
  const router = useRouter();
  const onclick = () => {
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
    <li
      className={classNameJoiner(
        " cursor-pointer p-6 w-96 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      )}
      onClick={onclick}
    >
      <h5 className="py-3">{blogData.title}</h5>
      <p>{blogData.contents}</p>
      {/* {children} */}

      {/* <p>{Date.parse(blogData.createdAt)}</p> */}
      <p className="flex flex-row-revers">{date[0]}</p>
    </li>
  );
}
