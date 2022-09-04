import React from "react";
import { classNameJoiner } from "../../utils/className";

type CardProps = {
  // children: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  style?: string;
};

export default function Card({ style, children, onClick }: CardProps) {
  return (
    <li
      className={classNameJoiner(
        " cursor-pointer p-6 w-96 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
        style
      )}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
