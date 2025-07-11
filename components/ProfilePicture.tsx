import Image from "next/image";

type ProfilePictureProps = {
    alt?: string;
    src?: string;
    size?: number;
}

export default function ProfilePicture({ alt = 'Picture of Youssef al-Tai', src = '/me.jpeg', size = 200 }: ProfilePictureProps) {
    return (
        <Image
            alt={alt}
            src={src}
            width={size}
            height={size}
            priority
            className="min-w-max min-h-max rounded-full hover:shadow transition-shadow duration-300"
        />
    );
}
