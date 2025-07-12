import Link from "next/link";
import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import SecondaryButtonLink from "@/components/Button/ButtonLink/SecondaryButtonLink";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            {/* 404 Number */}
            <div className="mb-8">
                <h2 className="text-8xl md:text-9xl font-bold text-spring-400 leading-none">
                    404
                </h2>
            </div>

            {/* Main Message */}
            <div className="max-w-md mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Oops! Page not found
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Did you type in an incorrect URL?
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <PrimaryButtonLink href="/">
                    Go back home
                </PrimaryButtonLink>

                <SecondaryButtonLink href="/request">
                    Get in touch
                </SecondaryButtonLink>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Or check out these pages:</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link href="/about" className="text-spring-600 hover:text-spring-700 transition-colors duration-200">
                        About
                    </Link>
                    <Link href="/work" className="text-spring-600 hover:text-spring-700 transition-colors duration-200">
                        Work
                    </Link>
                    <Link href="/services" className="text-spring-600 hover:text-spring-700 transition-colors duration-200">
                        Services
                    </Link>
                    <Link href="/testimonials" className="text-spring-600 hover:text-spring-700 transition-colors duration-200">
                        Testimonials
                    </Link>
                </div>
            </div>
        </div>
    );
} 