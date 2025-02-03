import MagneticButton from "@/components/magnetic-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Marquee } from "@/components/ui/marquee";
import { suppliers } from "@/constants";
import { Calendar, CircleArrowRight, HandHeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageClient from "./page.client";

export default function Home() {
  return (
    <PageClient>
      <div className="container px-4 py-40 mx-auto">
        <Image src="/backdrop.png" alt="backdrop" className="absolute inset-0 md:-top-48 -z-10 opacity-5" width={20000} height={0} />
        <div className="px-4 py-2 mx-auto mb-10 text-center text-red-600 border border-red-400 rounded-full bg-gradient-to-tr from-red-600/20 max-w-max">Proven service you can rely on.</div>
        <h2 className="text-4xl font-medium tracking-tight text-center text-neutral-900 md:text-5xl">Food Distributors Australia</h2>
        <div className="mt-4 text-lg text-center text-neutral-800 md:text-xl">Your One-Stop Shop for Restaurant Essentials in Sydney</div>
        <div className="mb-20 text-lg text-center text-neutral-800 md:text-xl">From Nuts to Seafood, We Supply Everything Your Kitchen Needs.</div>
        <div className="flex flex-wrap w-full">
          <Carousel className="w-full mb-10 md:w-2/3 h-max md:mb-0">
            <CarouselContent>
              <CarouselItem>
                <Image width={1000} height={0} src="/hero.png" alt="hero" className="brightness-75 md:h-[24rem] object-cover object-center rounded-xl" />
              </CarouselItem>
              <CarouselItem>
                <Image width={1000} height={0} src="/hero.png" alt="hero" className="brightness-75 md:h-[24rem] object-cover object-center rounded-xl" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 h-full text-white duration-500 border-none rounded-none bg-black/20 rounded-l-xl" />
            <CarouselNext className="right-0 h-full text-white duration-500 border-none rounded-none bg-black/20 rounded-r-xl" />
          </Carousel>
          <div className="flex flex-col w-full md:pl-10 md:w-1/3">
            <div className="mt-4 text-lg text-neutral-800 md:text-xl">With over 20+ years of experience,</div>
            <div className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">We provide quality, that you can trust.</div>
            <div className="flex items-center justify-center w-full">
              <MagneticButton>
                <div className="z-50 p-2 text-xl translate-x-20 translate-y-12 bg-neutral-50">Explore <br /> Catalog</div>
                <Link href="/catalog">
                  <CircleArrowRight strokeWidth={0.25} className="z-0 duration-500 hover:-rotate-45" size={160} />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 md:py-32 bg-neutral-900">
        <div className="container relative px-4 mx-auto">
          <h1 className="max-w-5xl mb-10 text-4xl font-medium tracking-tight text-white md:text-5xl">
            Based in Sydney, we are a trusted supplier for businesses across the city.
          </h1>
          <div className="flex flex-col items-center gap-24 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h1 className="max-w-5xl mb-5 text-2xl font-medium tracking-tight text-neutral-50 md:text-3xl">
                About us,
              </h1>
              <p className="mb-5 text-base text-neutral-200 md:text-lg">
                At Food Distributors Australia, we understand the needs of Sydney’s bustling food industry. Whether you run a restaurant, cafe, pizza shop, or catering business, we provide high-quality nuts, spices, oils, cheese, flour, seafood, and more—all delivered fresh and on time.
              </p>
              <p className="mb-10 text-base text-neutral-200 md:text-lg">
                We pride ourselves on offering a wide range of essential products, from premium nuts and spices to fresh seafood and dry goods. Our goal is to make your life easier by providing everything you need in one place, with reliable delivery and competitive pricing.
              </p>
              <div className="flex items-center justify-start gap-x-6">
                <Link href="/store" className="rounded-md bg-white px-3.5 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-200 duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Order now <span className="float-right flex items-center mt-2.5 ml-2.5 bg-neutral-900 rounded-full animate-pulse size-2" />
                </Link>
                <Link href="/about" className="text-base font-medium text-neutral-200">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-x-5 sm:gap-x-10 lg:gap-x-20 place-items-center md:place-items-start lg:place-items-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-10 gap-y-5 sm:gap-y-10 lg:-translate-y-5">
                  <div className="relative overflow-hidden duration-300 aspect-square size-40 sm:size-56 md:size-44 lg:size-56 rounded-xl"><Image alt="image" className="object-cover" src="/hero.png" fill /></div>
                  <div className="relative overflow-hidden duration-300 aspect-square size-40 sm:size-56 md:size-44 lg:size-56 rounded-xl"><Image alt="image" className="object-cover" src="/hero.png" fill /></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-10 gap-y-5 sm:gap-y-10 lg:-translate-y-12">
                  <div className="relative overflow-hidden duration-300 aspect-square size-40 sm:size-56 md:size-44 lg:size-56 rounded-xl"><Image alt="image" className="object-cover" src="/hero.png" fill /></div>
                  <div className="relative overflow-hidden duration-300 aspect-square size-40 sm:size-56 md:size-44 lg:size-56 rounded-xl"><Image alt="image" className="object-cover" src="/hero.png" fill /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="text-4xl font-medium text-center text-neutral-900 md:text-5xl">We provide customers reliable products from top brands</div>
          <Marquee pauseOnHover className="[--duration:20s] mt-32 p-0 md:[--gap:4rem]" >
            {suppliers.map((supplier, idx) => (
              <Link key={idx} href={`/catalog/${supplier.name}`}>
                <Image src={supplier.src} alt={supplier.name} width={120} height={0} className="duration-500 hover:scale-125" />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="py-24 bg-red-600 md:py-32">
        <div className="container relative mx-auto overflow-hidden">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-between h-full max-w-xl lg:max-w-lg">
                <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">Subscribe to our newsletter</h2>
                <div className="flex max-w-md mt-6 gap-x-4 lg:mt-0">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-neutral-100 px-3.5 py-2.5 text-sm text-neutral-800 shadow-sm hover:bg-white duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex items-start md:flex-col">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <Calendar aria-hidden="true" className="text-white size-6" />
                  </div>
                  <div className="pl-4 mt-0 md:pl-0 md:mt-4">
                    <dt className="text-base font-medium text-white">Weekly articles</dt>
                    <dd className="mt-2 text-base/7 text-neutral-200">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </dd>
                  </div>
                </div>
                <div className="flex items-start md:flex-col">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <HandHeartIcon aria-hidden="true" className="text-white size-6" />
                  </div>
                  <div className="pl-4 mt-0 md:pl-0 md:mt-4">
                    <dt className="text-base font-medium text-white">Weekly articles</dt>
                    <dd className="mt-2 text-base/7 text-neutral-200">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </PageClient>
  )
}