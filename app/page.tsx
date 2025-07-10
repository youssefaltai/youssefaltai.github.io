import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-12">
      <Image
        alt="Picture of Youssef al-Tai"
        src={'/me.jpeg'}
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl">
          I design & build frontends
          <br />
          that <strong className="text-primary font-bold">work.</strong>
        </h1>
        <div className="flex gap-4">
          <Link href={'/request'} className="bg-primary text-background font-light py-3 px-4 rounded-sm">
            Work with me
          </Link>
          <Link href={'/work'} className="bg-background text-primary border-[0.5px] border-primary font-light py-3 px-4 rounded-sm">
            View my work
          </Link>
        </div>
      </div>

    </div>
  );
}
