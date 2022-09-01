import React from "react";
import { classNameJoiner } from "../../utils/className";

type IconBoxProps = {
  id?: string;
  style?: string;
  iconName: IconType;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
};

export enum IconType {
  newspaper = "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  bookmark = "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
  annotation = "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  phone = "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  menu = "M4 6h16M4 12h16M4 18h16",
  search = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  right_arrow = "M9 5l7 7-7 7",
  down_arrow = "M19 9l-7 7-7-7",
}

const IconBox = ({
  iconName,
  id,
  onClick,
  style = "h-16 w-16 p-5",
}: IconBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNameJoiner(
        style,
        " flex cursor-pointer items-center justify-center "
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      id={id}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconName} />
    </svg>
  );
};

export default React.memo(IconBox);
