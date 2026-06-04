"use client";

import React from "react";

const InquiryForm: React.FC = () => {
    return (
        <section className="relative bg-slate-50 py-12 overflow-hidden">


            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1]">
                        Looking For More Information
                    </h3>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#155DFC]"></div>
                </div>

                {/* Form */}
                <form className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-3">

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name *"
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-800 placeholder:text-gray-500 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email *"
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-800 placeholder:text-gray-500 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        />

                        {/* Phone */}
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-800 placeholder:text-gray-500 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        />

                        {/* Country */}
                        <select
                            defaultValue=""
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value="" disabled>
                                Select Country
                            </option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>

                        {/* State */}
                        <select
                            defaultValue=""
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value="" disabled>
                                Select State
                            </option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Gujarat</option>
                        </select>

                        {/* City */}
                        <select
                            defaultValue=""
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value="" disabled>
                                Select City
                            </option>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                        </select>

                        {/* Course */}
                        <select
                            defaultValue=""
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value="" disabled>
                                Select Course
                            </option>
                            <option>B.Tech</option>
                            <option>BCA</option>
                            <option>MCA</option>
                            <option>MBA</option>
                        </select>

                        {/* University */}
                        <select
                            defaultValue="Ajeenkya DY Patil University"
                            className="h-14 rounded-xl border border-gray-300 bg-white px-5 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                            <option>Ajeenkya DY Patil University</option>
                            <option>Seamedu School</option>
                        </select>

                    </div>

                    {/* Submit Button */}
                    <div className="mt-14 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-full bg-[#155DFC] px-16 py-4 text-lg font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default InquiryForm;