"use client";

import Image from "next/image";

function ProfilePicture() {
  return (
    <Image
      priority
      src="/Youssef al-Tai.png"
      alt="Youssef al-Tai"
      width={200}
      height={200}
      className="rounded-full page blur-transition"
      onLoadingComplete={(image) => image.classList.remove("blur-transition")}
    />
  );
}

export default ProfilePicture;
