import React from "react";
import { DEFAULT_TAB_COLOR } from "../constants";
export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

export const PersonIcon: React.FC<IconProps> = ({
  width = "32",
  height = "32",
  color = DEFAULT_TAB_COLOR,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 28V25.3333C8 23.9188 8.5619 22.5623 9.5621 21.5621C10.5623 20.5619 11.9188 20 13.3333 20H18.6667C20.0812 20 21.4377 20.5619 22.4379 21.5621C23.4381 22.5623 24 23.9188 24 25.3333V28"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
