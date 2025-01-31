"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/constants";
import { Component, Home, LayoutList, Menu, Phone, SquareChevronLeft, Waypoints, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    const usePathName = usePathname();

    return (
        <>
            <header className="w-full fixed top-4 h-[60px] z-[1000] px-4">
                <div className="container flex items-center justify-between w-full h-full px-8 mx-auto rounded-full bg-white/80 backdrop-blur-sm">
                    <Link href="/" className="relative">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={80}
                            height={0}
                            className="w-full"
                        />
                    </Link>
                    <div className="items-center hidden gap-4 lg:flex">
                        {menuData.map((menuItem, idx) => {
                            return (
                                <Link key={idx} href={menuItem.path} className={cn("flex items-center gap-2 py-1 pl-1 pr-4 duration-300 rounded-full text-neutral-800 bg-neutral-200/60 hover:backdrop-blur-md backdrop-blur-sm group", usePathName == menuItem.path && "backdrop-blur-md bg-neutral-100")}>
                                    <span className={cn("flex items-center justify-center duration-300 rounded-full group-hover:bg-white/60 size-8", usePathName == menuItem.path && "bg-white")}>
                                        {iconMap(menuItem.title)}
                                    </span>
                                    <span>{menuItem.title}</span>
                                </Link>
                            )
                        })}
                    </div>
                    <Link href="/store" className="items-center hidden px-4 py-2 text-white duration-300 bg-red-600 rounded-full lg:flex hover:bg-red-500">
                        <span>Become a customer</span>
                        <div className="flex items-center mt-0.5 ml-2 bg-white rounded-full animate-pulse size-2" />
                    </Link>
                    <button onClick={() => setNav(!nav)} className="md:hidden">
                        {nav ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
                    </button>
                </div>
            </header>
            <nav className={cn("w-full fixed px-4 top-[76px]", nav ? "z-[1000]" : "-z-[1000]")}>
                {nav && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="container flex flex-col items-center justify-between w-full gap-4 p-4 mx-auto mt-5 overflow-hidden lg:flex rounded-xl bg-white/80 backdrop-blur-sm"
                    >
                        {menuData.map((menuItem, idx) => {
                            return (
                                <Link onClick={() => setNav(!nav)} key={idx} href={menuItem.path} className={cn("flex items-center gap-2 w-full py-1 pl-1 pr-4 rounded-full text-neutral-800 group")}>
                                    <span className={cn("flex items-center justify-center rounded-full group-hover:bg-white/60 size-8", usePathName == menuItem.path && "bg-white")}>
                                        {iconMap(menuItem.title)}
                                    </span>
                                    <span>{menuItem.title}</span>
                                </Link>
                            )
                        })}
                    </motion.div>
                )}
            </nav>
        </>
    );
};

export default Header;
