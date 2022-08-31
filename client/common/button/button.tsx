import React from "react";

type buttonProps = {
  label?: string;
  onClick?: () => void;
};

function Button({ label = "button", onClick }: buttonProps) {
  return (
    <button
      type="button"
      className="text-violet hover:text-white border border-violet focus:border-magenta hover:bg-violet focus:hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-magenta font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default React.memo(Button);
