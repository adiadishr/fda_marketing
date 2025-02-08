"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/constants";
import { Component, Home, LayoutList, Menu, Phone, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const navVariants = {
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const Header = () => {

    const [nav, setNav] = useState(false);
    function iconMap(title) {
        switch (title) {
            case "Home":
                return <Home strokeWidth={1} />;
            case "About":
                return <Component strokeWidth={1} />;
            case "Catalog":
                return <LayoutList strokeWidth={1} />;
            case "Contact":
                return <Phone strokeWidth={1} />;
            default:
                return <Home strokeWidth={1} />;
        }
    }
    const pathname = usePathname();

    return (
        <>
            <header className="w-full fixed h-[56px] top-0 z-[1000] bg-neutral-50/95 backdrop-blur-md border-b px-4">
                <div className="container flex items-center justify-between w-full h-full mx-auto">
                    <div className="flex items-center">
                        <Link href="/" className="relative lg:pr-4 lg:border-r">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={60}
                                height={0}
                                className="w-full"
                            />
                        </Link>
                        <div className="items-center hidden gap-4 pl-4 border-l lg:flex">
                            {menuData.map((menuItem, idx) => {
                                return (
                                    <Link key={idx} href={menuItem.path} className={cn("flex items-center gap-2 py-1 px-2 duration-300 rounded-full hover:bg-red-500 hover:text-white group", pathname == menuItem.path && "backdrop-blur-md text-white bg-red-600")}>
                                        {menuItem.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="items-center hidden lg:flex">
                        <Link href="/search/" className="flex items-center px-2 py-1 mr-4 bg-white border text-neutral-500 w-72 rounded-xl cursor-text">
                            <Search size={20} strokeWidth={1} />
                            <span className="pl-4 font-extralight">Search Products...</span>
                        </Link>
                        <Link href="/store" className="flex items-center px-2 py-1 text-white duration-300 bg-red-600 rounded-xl hover:bg-red-500">
                            <span>Order now</span>
                            <div className="flex items-center mt-0.5 ml-2 bg-white rounded-full animate-pulse size-2" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 lg:hidden">
                        <Link href="/search/" className="flex px-2 py-1 bg-white border w-max items-cente text-neutral-500 rounded-xl cursor-text">
                            <Search size={20} strokeWidth={1} />
                            <span className="pl-4 font-extralight">Search Products...</span>
                        </Link>
                        <button onClick={() => setNav(!nav)} className="lg:hidden">
                            {nav ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
                        </button>
                    </div>
                </div>
            </header>
            <nav className={cn("w-full fixed px-4 top-[76px]", nav ? "z-[1000]" : "-z-[1000]")}>
                <motion.div
                    id="mobile-menu"
                    initial="closed" // Initial state
                    animate={nav ? "open" : "closed"} // Animate based on `nav` state
                    exit="closed" // Exit state
                    variants={navVariants} // Apply variants
                    className="container flex flex-col items-center justify-between w-full gap-4 p-4 mx-auto mt-5 overflow-hidden lg:flex rounded-xl bg-white/80 backdrop-blur-sm"
                >
                    {menuData.map((menuItem, idx) => (
                        <Link
                            onClick={() => setNav(!nav)}
                            key={idx}
                            href={menuItem.path}
                            className={cn(
                                "flex items-center gap-2 w-full py-1 pl-1 pr-4 rounded-full text-neutral-800 group",
                                pathname === menuItem.path && "font-bold" // Add active styling
                            )}
                        >
                            <span
                                className={cn(
                                    "flex items-center justify-center rounded-full group-hover:bg-white/60 size-8",
                                    pathname === menuItem.path && "bg-white"
                                )}
                            >
                                {iconMap(menuItem.title)}
                            </span>
                            <span>{menuItem.title}</span>
                        </Link>
                    ))}
                </motion.div>
            </nav>
        </>
    );
};

export default Header;
