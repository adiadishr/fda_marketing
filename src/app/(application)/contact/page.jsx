import LenisProvider from "../lenis-provider";

export default function Page() {
    return (
        <LenisProvider>
            <div className="container mt-[76px] px-4 py-32 mx-auto md:py-40">
                <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-7/12 xl:w-8/12">
                        <h2 className="text-2xl font-medium text-neutral-900 md:text-3xl">
                            Get in Touch
                        </h2>
                        <p className="mb-12 text-base md:text-lg text-neutral-800">
                            We’d love to hear from you! Whether you need a quote, want to place an order, or have questions about our products, our team is here to help.
                        </p>
                        <form>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="name"
                                            className="block mb-3 text-base text-neutral-800"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-3 text-base border-b rounded-sm outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="email"
                                            className="block mb-3 text-base text-neutral-800"
                                        >
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-3 text-base border-b rounded-sm outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="message"
                                            className="block mb-3 text-base text-neutral-800"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Enter your Message"
                                            className="w-full px-6 py-3 text-base border-b rounded-sm outline-none resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <button className="px-3.5 py-2.5 rounded-md text-base text-white duration-300 bg-red-600">
                                        Submit Ticket
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        {/* <NewsLatterBox /> */}
                    </div>
                </div>
            </div>
        </LenisProvider>
    )
}