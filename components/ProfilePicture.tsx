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
      className="rounded-full page blur-transition w-48 h-48"
      onLoadingComplete={(image) => image.classList.remove("blur-transition")}
    />
  );
}

export default ProfilePicture;
