import React from "react";
import { DEFAULT_TAB_COLOR } from "../constants";
import { IconProps } from "./personIcon";

export const WeatherIcon: React.FC<IconProps> = ({
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
      d="M5.33325 15.9999C5.33325 13.1709 6.45706 10.4578 8.45745 8.45745C10.4578 6.45706 13.1709 5.33325 15.9999 5.33325C18.8289 5.33325 21.542 6.45706 23.5424 8.45745C25.5428 10.4578 26.6666 13.1709 26.6666 15.9999H5.33325Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 16V24C16 24.7072 16.281 25.3855 16.781 25.8856C17.2811 26.3857 17.9594 26.6667 18.6667 26.6667C19.3739 26.6667 20.0522 26.3857 20.5523 25.8856C21.0524 25.3855 21.3333 24.7072 21.3333 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
