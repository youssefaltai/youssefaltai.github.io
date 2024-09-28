"use client";

import Image from "next/image";

function ProfilePicture() {
  return (
    <Image
      priority
      src="/Youssef al-Tai.png"
      alt="Youssef al-Tai"
      width={1024}
      height={1024}
      className="rounded-full w-48 h-48 trans blur-transition"
      onLoad={(image) =>
        image.currentTarget.classList.remove("blur-transition")
      }
    />
  );
}

export default ProfilePicture;
