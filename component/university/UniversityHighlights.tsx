"use client";

import React, { useState } from "react";

export default function UniversityHighlight() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-fuchsia-100 blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-100 blur-3xl opacity-40" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-xl font-bold uppercase text-gray-900 sm:text-2xl md:text-5xl lg:text-5xl">
                        Ajeenkya DY Patil University
                    </h2>

                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#155DFC]"></div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-6xl text-justify">
                    <p className="mb-6 text-base leading-slug text-gray-600 sm:text-md md:text-lg">
                        Choose Ajeenkya DY Patil University, to not only explore and
                        discover your path but also for far-reaching guidance towards your
                        goals. We recognize that each student is significant, and hence we
                        empower them to personalize their coursework and shape their
                        curriculum to meet their specific goals. A flexible curriculum
                        allows them to enhance skills and knowledge in areas that interest
                        them, while they are also free to choose courses across departments
                        and schools at university.
                    </p>

                    <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
                        <p className="mb-6 text-base leading-slug text-gray-600 sm:text-md md:text-lg">
                            Ajeenkya DY Patil University is the perfect match for students
                            enthusiastic about personal growth and development, alongside
                            traditional education. We encourage you to explore all aspects that
                            develop your career and guide you toward your path to success. We
                            are proud to say our university flourishes young adults into
                            confident, successful beings to rise above in an ever-growing world.
                        </p>

                        <p className="text-base leading-slug text-gray-600 sm:text-md md:text-lg">
                            Ajeenkya DY Patil University is here to help you construct
                            meaningful careers. Our priority is to impart a student-centric
                            environment and a learning-centric curriculum. At the fundamental
                            level, education is an activity undertaken in search of truth and
                            its utility is manifested in outcomes for society. A college degree
                            is an amalgam of subjects put together to fast-track development in
                            a particular domain of knowledge.
                        </p>
                    </div>

                    {/* Toggle Button for Mobile */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-2 md:hidden inline-flex items-center cursor-pointer gap-1.5 px-6 py-2.5 text-blue-600 text-sm font-semibold transition-all duration-300 "
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </div>

                {/* Stats Section */}
                {/* <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
                        <h3 className="mb-2 text-4xl font-bold text-[#155DFC]">500+</h3>
                        <p className="text-gray-600">Industry Partners</p>
                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
                        <h3 className="mb-2 text-4xl font-bold text-[#155DFC]">50+</h3>
                        <p className="text-gray-600">Global Collaborations</p>
                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
                        <h3 className="mb-2 text-4xl font-bold text-[#155DFC]">95%</h3>
                        <p className="text-gray-600">Placement Assistance</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}


/* Slimmer Card Component */
