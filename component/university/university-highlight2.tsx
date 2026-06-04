"use client";

import React from "react";

export default function UniversityHighlight2() {
    return (
        <section className="py-20 bg-slate-50/50 relative overflow-hidden font-sans">
            {/* Subtle background gradient elements for a premium look */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col group transition-all duration-300">
                        <span className="font-serif italic text-slate-800 text-lg md:text-xl mb-4 block leading-tight">
                            Fostering a generation of innovators
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-5 transition-colors">
                            Script your own <span className="text-[#c2272d] block sm:inline md:block lg:inline">success story</span>
                        </h3>
                        <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed font-medium">
                            ADYPU believes that every learner is unique with diverse strengths and interests. Our flexible curriculum allows students to explore their potential and choose courses they're most passionate about. This way, they get to become the architect of their own story!
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col pt-0 md:pt-11 group transition-all duration-300">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-5 transition-colors">
                            <span className="text-[#c2272d] block sm:inline md:block lg:inline">T-shaped</span> Professional
                        </h3>
                        <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed font-medium">
                            ADYPU pioneers T-Shaped education by combining specialized expertise with interdisciplinary knowledge to promote versatile, well-rounded professionals. This holistic approach equips students to excel in dynamic, globally connected careers.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col pt-0 md:pt-11 group transition-all duration-300">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-5 transition-colors">
                            The world is <span className="text-[#c2272d] block sm:inline md:block lg:inline">your home</span>
                        </h3>
                        <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed font-medium">
                            ADYPU has partnered with an extensive array of universities in the US, UK and Europe to create a truly global community. Through our rich immersion programs, students can share their ideas and cultural experiences with their peers. This enables them to shape education with a more global and well rounded future.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
