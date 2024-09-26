import React from "react";
import { IconProps } from "./types";

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_902)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 24H19.2V15.6012C19.2 13.2972 18.1836 12.0117 16.3608 12.0117C14.3772 12.0117 13.2 13.3512 13.2 15.6012V24H8.4V8.4H13.2V10.1543C13.2 10.1543 14.706 7.51172 18.0996 7.51172C21.4944 7.51172 24 9.58333 24 13.8697V24ZM2.9304 5.90508C1.3116 5.90508 0 4.58275 0 2.95195C0 1.32235 1.3116 0 2.9304 0C4.548 0 5.85959 1.32235 5.85959 2.95195C5.8608 4.58275 4.548 5.90508 2.9304 5.90508ZM0 24H6V8.4H0V24Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_902">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedInIcon;
