export default function Page() {
    return (
        <div className="container px-4 pt-32 mx-auto md:pt-40">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-7/12 xl:w-8/12">
                    <h2 className="text-2xl font-medium text-neutral-900 md:text-3xl">
                        Need help? Contact us directly.
                    </h2>
                    <p className="mb-12 text-base md:text-lg text-neutral-800">
                        Leave your details and our support team will get back to you ASAP.
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
                                        className="w-full px-6 py-3 text-base border-b rounded-sm outline-none border-stroke text-body-color"
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
                                        className="w-full px-6 py-3 text-base border rounded-sm outline-none border-stroke text-body-color"
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
                                        className="w-full px-6 py-3 text-base border rounded-sm outline-none resize-none text-body-color"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <button className="py-4 text-base text-white duration-300 bg-red-600 rounded-sm px-9">
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
    )
}