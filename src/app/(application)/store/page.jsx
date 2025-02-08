import Link from "next/link";

import { ArrowLeftIcon, Construction } from "lucide-react";

export default function Page() {
    return (
        <div className='flex items-center justify-center min-h-screen px-4 grow sm:px-6 sm:py-24 lg:px-8'>
            <div className='mx-auto'>
                <main className='flex flex-col translate-x-28'>
                    <div className="flex items-center max-w-3xl gap-4">
                        <Construction className="flex size-24 w-max" />
                        <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                            <h1 className='flex flex-col max-w-xl text-3xl font-bold tracking-tight sm:text-5xl'>
                                We are working hard to develop our online store!
                            </h1>
                            <p className='mt-1 text-base text-muted-foreground'>
                                Thanks for your patience, and visit another page.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <div className='flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                            <Link
                                href='/'
                                className='inline-flex items-center gap-3 transition-colors text-muted-foreground hover:text-foreground'
                            >
                                <ArrowLeftIcon className='w-5 h-5' />
                                <span>Go back home</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}