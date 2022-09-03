import React from "react";
import { BlogModel } from "../../data/blogData";
import { classNameJoiner } from "../../utils/className";
import { useRouter } from "next/router";

type CardProps = {
  // children: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Card({ children, onClick }: CardProps) {
  return (
    <li
      className={classNameJoiner(
        " cursor-pointer p-6 w-96 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      )}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
