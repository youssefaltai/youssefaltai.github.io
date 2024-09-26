import React from "react";

function FancyBullet() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10.5447L6.72763 5.27237L12 0L17.2724 5.27237L12 10.5447ZM18.7276 17.2724L13.4553 12L18.7276 6.72764L24 12L18.7276 17.2724ZM5.27237 17.2724L0 12L5.27237 6.72764L10.5447 12L5.27237 17.2724ZM12 24L6.72763 18.7276L12 13.4553L17.2724 18.7276L12 24Z"
        fill="url(#paint0_linear_36_430)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_36_430"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1F51BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FancyBullet;
