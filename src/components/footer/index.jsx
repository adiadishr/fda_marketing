"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative z-10 pt-10 md:pt-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-10 md:pr-16 md:w-1/2 lg:w-2/5">
                        <p className="text-justify text-neutral-800">
                            With over 25 years of food service experience, we are a 100% Australian owned family business, committed to meeting all your food-related needs. Offering an extensive range of products across all food categories, including smallgoods, fresh meat, poultry, frozen seafood, dry and frozen goods, packaging, and chemicals, we ensure a one-call solution for our valued customers.
                        </p>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/5">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-bold text-neutral-900">
                                Useful Links
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/catalog"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Catalog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-1/5">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-bold text-neutral-900">
                                Terms
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        TOS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
                        <div className="mb-12 lg:mb-16">
                            <h2 className="mb-5 text-xl font-bold text-neutral-900">
                                Support & Help
                            </h2>
                            <ul>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="inline-block mb-4 text-base duration-300 text-neutral-800 hover:text-red-600 :"
                                    >
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                <div className="py-8">
                    <p className="text-base text-center">
                        All rights reserved © 2025 Food Distributors Australia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
