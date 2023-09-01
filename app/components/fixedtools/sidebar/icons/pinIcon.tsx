import * as React from "react";

function PinIcon({ fill = "#6C7281",stroke = "#6C7281", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="arcs"
    >
      <circle cx="11.5" cy="8.5" r="5.5" />
      <path d="M11.5 14v7" />
    </svg>
  );
}

export default PinIcon;
