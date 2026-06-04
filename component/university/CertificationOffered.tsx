"use client";

import Image from "next/image";

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Systems_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export default function CertificationsOffered() {
    // Triplicate the logos list to ensure smooth infinite loop
    const scrollingLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-16 bg-gray-100 overflow-hidden">

            {/* Synced Heading */}
            <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1.2]">
                    Certifications <span className="text-[#155DFC] not-italic">Offered</span>
                </h3>
            </div>

            {/* Slider */}
            <div className="overflow-hidden w-full relative">
                {/* Fading Edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

                <div className="flex items-center gap-14 w-max animate-scroll-logos hover:[animation-play-state:paused]">
                    {scrollingLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center shrink-0">
                            <img
                                src={logo}
                                alt="partner logo"
                                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll-logos {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-scroll-logos {
                    animation: scroll-logos 15s linear infinite;
                }
            `}</style>

        </section>
    );
}