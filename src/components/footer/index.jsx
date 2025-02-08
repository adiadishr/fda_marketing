"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative z-10 pt-24 bg-neutral-900">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap mb-10 -mx-4">
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/4">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-medium text-white">
                                Useful Links
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/catalog"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Catalog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/4">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-medium text-white">
                                Terms
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Terms of service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/4">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-medium text-white">
                                Support & Help
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/4">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-medium text-white">
                                Social Links
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-200 hover:text-red-500"
                                    >
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent"></div>
                <div className="py-8">
                    <p className="text-base text-center text-white">
                        All rights reserved © 2025 Food Distributors Australia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
