'use client';

import { ArrowDown01, ArrowDownAZ, ArrowUp10, Check } from "lucide-react";
import Image from "next/image";
import { products, suppliers } from "@/constants";
import { convertCurrency } from "@/lib/utils";
import { useState, useMemo } from "react";
import "./catalog.css";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Page() {
    const sortOptions = [
        { key: "alphabetical", label: "Alphabetical" },
        { key: "priceLowHigh", label: "Price (Low to High)" },
        { key: "priceHighLow", label: "Price (High to Low)" },
    ];

    const [sortOrder, setSortOrder] = useState("alphabetical");
    const [selectedSuppliers, setSelectedSuppliers] = useState([]);

    const getSortIcon = () => {
        switch (sortOrder) {
            case "priceLowHigh":
                return <ArrowDown01 size={20} strokeWidth={1} />;
            case "priceHighLow":
                return <ArrowUp10 size={20} strokeWidth={1} />;
            default:
                return <ArrowDownAZ size={20} strokeWidth={1} />;
        }
    };

    const toggleSupplierSelection = (supplierName) => {
        setSelectedSuppliers((prev) =>
            prev.includes(supplierName)
                ? prev.filter((name) => name !== supplierName)
                : [...prev, supplierName]
        );
    };

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;

        // Filter by selected suppliers
        if (selectedSuppliers.length > 0) {
            filtered = filtered.filter((product) =>
                selectedSuppliers.includes(product.supplier)
            );
        }

        // Apply sorting
        return filtered.sort((a, b) => {
            if (sortOrder === "priceLowHigh") return a.price - b.price;
            if (sortOrder === "priceHighLow") return b.price - a.price;
            return a.name.localeCompare(b.name);
        });
    }, [products, selectedSuppliers, sortOrder]);

    return (
        <div className="container relative max-h-screen mt-[56px] mx-auto border-x">
            <div className="px-4 flex items-center h-[45px] border-b justify-between">
                <div className="text-base md:text-lg">Product Catalog</div>
                <div className="flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <div className="flex items-center p-1.5 cursor-pointer rounded-xl border hover:bg-neutral-50">
                                {getSortIcon()}
                                <div className="pl-2 text-sm font-thin">Sort by</div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="font-thin text-neutral-800">
                            {sortOptions.map((option) => (
                                <DropdownMenuItem
                                    key={option.key}
                                    className="justify-between cursor-pointer"
                                    onClick={() => setSortOrder(option.key)}
                                >
                                    {option.label}
                                    {sortOrder === option.key && <Check strokeWidth={1} />}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-4 max-h-[calc(100vh-100px)]">
                <div className="border-r h-[calc(100vh-100px)] overflow-y-scroll scrollbar-hidden">
                    {suppliers.map((supplier) => (
                        <div
                            key={supplier.name}
                            onClick={() => toggleSupplierSelection(supplier.name)}
                            className={`relative flex flex-col items-center justify-center w-full h-24 px-4 border-b cursor-pointer md:h-20 md:justify-start md:flex-row hover:bg-neutral-100 md:border-r-transparent border-r-2 ${selectedSuppliers.includes(supplier.name) && 'border-r-red-600'}`}
                        >
                            <div className="relative bg-white rounded-lg aspect-square size-12">
                                <Image fill src={supplier.src} alt={supplier.name} className="object-cover" />
                            </div>
                            <div className="text-base font-light capitalize text-neutral-800 md:ml-4">{supplier.name}</div>
                            {selectedSuppliers.includes(supplier.name) && (
                                <Check strokeWidth={1} size={20} className="absolute hidden -translate-y-1/2 right-4 top-1/2 md:block" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="col-span-3 h-[calc(100vh-100px)] overflow-y-scroll scrollbar">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredAndSortedProducts.map((product, idx) => (
                            <div key={idx} className="relative flex flex-col items-center h-64 bg-white border rounded-xl">
                                <div className="relative w-[90%] mb-2 aspect-square md:size-36">
                                    <Image fill src={product.src} alt={product.alt} className="object-cover" />
                                </div>
                                <div className="px-2 mb-2 text-sm line-clamp-2">{product.name}</div>
                                <div className="absolute bottom-0 w-full py-1 text-sm text-center bg-neutral-200">{convertCurrency(product.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}