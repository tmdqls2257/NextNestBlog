import React from "react";
import { classNameJoiner } from "../../utils/className";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <li
      className={classNameJoiner(
        "cursor-pointer p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      )}
    >
      {children}
    </li>
  );
}
