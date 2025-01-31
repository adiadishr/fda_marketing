import { suppliers } from "@/constants";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container px-4 py-32 mx-auto md:py-40">
        <Image src="/backdrop.png" alt="backdrop" className="absolute inset-0 -top-48 -z-10 opacity-5" width={20000} height={0} />
        <div className="text-3xl font-bold text-center text-neutral-900 md:text-5xl">Food Distributors Australia</div>
        <div className="text-xl font-light text-center text-neutral-800 md:text-3xl">Delivering Culinary Excellence</div>
        <div className="px-4 py-2 mx-auto mt-10 mb-12 text-center text-red-600 border border-red-400 rounded-full md:mb-20 bg-gradient-to-tr from-red-600/20 w-max">Proven service you can rely on.</div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-2/3 h-max mb-10 md:mb-0 md:h-[24rem] rounded-xl overflow-hidden">
            <Image src="/hero.png" alt="hero" className="brightness-75" width={2000} height={0} />
          </div>
          <div className="flex flex-col w-full md:pl-10 md:w-1/3">
            <div className="text-xl text-neutral-800">With over 20+ years of experience,</div>
            <div className="text-3xl text-neutral-900">We provide quality, that you can trust.</div>
            <div className="flex items-center justify-center w-full mt-10 md:mt-20">
              <div className="absolute z-10 p-2 text-xl -translate-y-16 bg-white translate-x-14">Explore <br /> Catalog</div>
              <Link href="/catalog">
                <CircleArrowRight strokeWidth={0.25} className="z-0 animate-rotate" size={160} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 md:py-40 bg-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="text-3xl font-bold text-center text-white md:text-5xl">We service top brands</div>
          <div className="grid w-full grid-cols-2 pt-10 md:pt-20 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-4">
            {suppliers.map((supplier, idx) => {
              return (
                <div key={idx} className="relative w-full h-full">
                  <Image className="duration-300 saturate-0 hover:saturate-100" src={supplier.src} alt={supplier.name} width={1000} height={0} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}