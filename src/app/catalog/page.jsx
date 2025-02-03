'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { Filter, Minus, Plus, X } from 'lucide-react';
import { suppliers } from '@/constants';
import PageClient from '../page.client';
const filters = [
    {
        id: 'brand',
        name: 'Brands',
        options: suppliers.map(supplier => ({
            value: supplier.name,
            label: supplier.name,
            checked: false,
        })),
    },
    {
        id: 'category',
        name: 'Categories',
        options: suppliers.map(supplier => ({
            value: supplier.name,
            label: supplier.name,
            checked: false,
        })),
    },
];
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/hero.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
    },
]

export default function Page() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    return (
        <div className="container px-4 py-24 mx-auto md:py-32">
            {/* Mobile filter dialog */}
            <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-[2000] lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-1000 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto  py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                    >
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md size-10"
                            >
                                <span className="sr-only">Close menu</span>
                                <X aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">

                            {filters.map((section) => (
                                <Disclosure key={section.id} as="div" className="px-4 py-6 border-t border-gray-200">
                                    <h3 className="flow-root -mx-2 -my-3">
                                        <DisclosureButton className="flex items-center justify-between w-full px-2 py-3 text-gray-400 group hover:text-gray-500">
                                            <span className="font-medium text-gray-900">{section.name}</span>
                                            <span className="flex items-center ml-6">
                                                <Plus aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                <Minus aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-6">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.value} className="flex items-center gap-3">
                                                    <div className="flex items-center h-5 shrink-0">
                                                        <div className="grid grid-cols-1 group size-4">
                                                            <input
                                                                defaultValue={option.value}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 border border-gray-300 rounded appearance-none checked:border-red-600 checked:bg-red-600 indeterminate:border-red-600 indeterminate:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="flex-1 min-w-0 text-gray-500"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
            <div className="flex items-baseline justify-between pb-6 border-b border-gray-200 n">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900 md:text-5xl">Product Catalog</h1>
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    >
                        <span className="sr-only">Filters</span>
                        <Filter aria-hidden="true" className="size-5" />
                    </button>
                </div>
            </div>
            <section className="pt-10">
                <div className="relative grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden lg:block z-10 sticky top-24 h-[400px] overflow-y-scroll">
                        {filters.map((section) => (
                            <Disclosure key={section.id} as="div" className="py-6 border-b border-gray-200" defaultOpen={true}>
                                <h3 className="flow-root -my-3">
                                    <DisclosureButton className="flex items-center justify-between w-full py-3 text-lg text-gray-400 group hover:text-gray-500">
                                        <span className="font-medium text-gray-900">{section.name}</span>
                                        <span className="flex items-center ml-6">
                                            <Plus aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                            <Minus aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel className="pt-6">
                                    <div className="space-y-4">
                                        {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center gap-3">
                                                <div className="flex items-center h-5 shrink-0">
                                                    <div className="grid grid-cols-1 group size-4">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="col-start-1 row-start-1 border border-gray-300 rounded appearance-none checked:border-red-600 checked:bg-red-600 indeterminate:border-red-600 indeterminate:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                        />
                                                        <svg
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                        >
                                                            <path
                                                                d="M3 8L6 11L11 3.5"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-[:checked]:opacity-100"
                                                            />
                                                            <path
                                                                d="M3 7H11"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-gray-800 capitalize">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </form>
                    {/* Product grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8">
                            {products.map((product, idx) => (
                                <div key={idx} className="relative group">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="object-cover w-full duration-300 bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                    />
                                    <div className="flex justify-between mt-4">
                                        <div>
                                            <h3 className="text-gray-900">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-gray-800">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

