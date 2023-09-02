import * as React from "react";

function PinIcon({ fill = "#fff",stroke = "#fff", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}


    >
      <circle cx="11.5" cy="8.5" r="5.5" />
      <path d="M11.5 14v7" />
    </svg>
  );
}

export default PinIcon;
