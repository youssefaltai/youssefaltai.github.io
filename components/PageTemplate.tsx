import { env, pageUrl } from "@/lib/env";
import Head from "next/head";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    title: string;
    headTitle: string;
    headDescriptionContent: string;
    headOgImage?: string;
    headOgUrl: string;
}>;
export default function PageTemplate({ title, headTitle, headDescriptionContent, headOgImage, headOgUrl, children }: Props) {
    const _title = `${headTitle} | Youssef al-Tai`;
    return (
        <>
            <Head>
                <title>{_title}</title>
                <meta name="description" content={headDescriptionContent} />
                <meta property="og:title" content={_title} />
                <meta property="og:description" content={headDescriptionContent} />
                <meta property="og:image" content={pageUrl(headOgImage ?? '/images/og/og-image.jpg')} />
                <meta property="og:url" content={pageUrl(headOgUrl)} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={env.name} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="flex flex-col items-start px-4 md:px-8 py-8 md:py-16 gap-8 md:gap-16">
                <h1 className="text-3xl md:text-5xl font-bold">
                    {title}
                </h1>
                <div className="w-full flex flex-col items-start gap-8 md:gap-12">
                    {children}
                </div>
            </div>
        </>
    );
}