"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const placements = [
    {
        name: "Tanay Bhor",
        course: "B.Tech CSE",
        batch: "2025",
        package: "₹18 LPA",
        studentImage:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Acc_Logo_Black_Purple_png.png/960px-Acc_Logo_Black_Purple_png.png",
        // company: "Accenture",
    },
    {
        name: "Shoyab Mulani",
        course: "MCA",
        batch: "2026",
        package: "₹8.5 LPA",
        studentImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        // company: "Infosys",
    },
    {
        name: "Alif Shaikh",
        course: "MBA",
        batch: "2025",
        package: "₹12 LPA",
        studentImage:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/1920px-Logo_of_Deloitte.svg.png?_=20250812092143",
        // company: "Deloitte",
    },

    {
        name: "Shreyank Parab",
        course: "BCA",
        batch: "2025",
        package: "₹10 LPA",
        studentImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/TCS_Logo_%28cropped%29.jpg/960px-TCS_Logo_%28cropped%29.jpg",
        // company: "TCS",
    },
    {
        name: "Rahul Verma",
        course: "Game Development",
        batch: "2025",
        package: "₹15 LPA",
        studentImage:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800",
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Ubi_Soft_Entertainment_logo_1994.svg/960px-Ubi_Soft_Entertainment_logo_1994.svg.png",
        // company: "Ubisoft",
    },
];

export default function HiringPartner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);
    const mobileSliderRef = useRef<HTMLDivElement>(null);
    const desktopSliderRef = useRef<HTMLDivElement>(null);

    // Auto slide on mobile and desktop every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < 768) {
                const container = mobileSliderRef.current;
                if (!container) return;
                setActiveIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % placements.length;
                    const width = container.offsetWidth;
                    container.scrollTo({
                        left: nextIndex * width,
                        behavior: "smooth",
                    });
                    return nextIndex;
                });
            } else {
                const container = desktopSliderRef.current;
                if (!container) return;
                const card = container.querySelector(".placement-card") as HTMLElement;
                if (!card) return;
                const cardWidth = card.offsetWidth;
                const gap = 32;
                const scrollAmount = cardWidth + gap;

                setDesktopActiveIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % (placements.length - 2);
                    container.scrollTo({
                        left: nextIndex * scrollAmount,
                        behavior: "smooth",
                    });
                    return nextIndex;
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Sync activeIndex with manual scroll swipe events
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const width = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / width);
        if (index >= 0 && index < placements.length) {
            setActiveIndex(index);
        }
    };

    // Sync desktopActiveIndex with manual desktop scroll/swipe
    const handleDesktopScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const card = container.querySelector(".placement-card") as HTMLElement;
        if (!card) return;
        const cardWidth = card.offsetWidth;
        const gap = 32;
        const scrollAmount = cardWidth + gap;
        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / scrollAmount);
        if (index >= 0 && index <= placements.length - 3) {
            setDesktopActiveIndex(index);
        }
    };

    // Scroll desktop slider by one card width + gap
    const scrollDesktop = (direction: "left" | "right") => {
        const container = desktopSliderRef.current;
        if (!container) return;

        const card = container.querySelector(".placement-card") as HTMLElement;
        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 32; // gap-8 matches 32px
        const scrollAmount = cardWidth + gap;

        setDesktopActiveIndex((prevIndex) => {
            let nextIndex;
            if (direction === "left") {
                nextIndex = prevIndex === 0 ? placements.length - 3 : prevIndex - 1;
            } else {
                nextIndex = (prevIndex + 1) % (placements.length - 2);
            }
            container.scrollTo({
                left: nextIndex * scrollAmount,
                behavior: "smooth",
            });
            return nextIndex;
        });
    };

    return (
        <section className="bg-gradient-to-b from-white to-slate-50 py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 md:px-20">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1]">
                        Student <span className="text-blue-600 not-italic">Placements</span>
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                        Celebrating our students who transformed their education into
                        successful careers with top companies.
                    </p>

                    {/* <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600"></div> */}
                </div>

                {/* Slider */}
                <div className="py-6">

                    {/* Mobile swipeable snap slider (1 complete card visible at a time) */}
                    <div
                        ref={mobileSliderRef}
                        onScroll={handleScroll}
                        className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-6 px-6"
                    >
                        {placements.map((item, index) => (
                            <div
                                key={index}
                                className="w-[calc(100vw-3rem)] snap-center flex-shrink-0 rounded-xl overflow-hidden bg-white border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                            >
                                {/* Student Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.studentImage}
                                        alt={item.name}
                                        className="h-[320px] w-full object-cover"
                                    />
                                    {/* Package Badge */}
                                    {/* <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                                        {item.package}
                                    </div> */}
                                </div>

                                {/* Content */}
                                <div className="p-6 text-left">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-slate-500">
                                        {item.course} • Batch {item.batch}
                                    </p>
                                    <div className="mt-6 flex items-center gap-32">
                                        <div>
                                            {/* <h4 className="font-semibold text-slate-900">
                                                {item.company}
                                            </h4> */}
                                            <p className="text-sm text-slate-500">
                                                Placed At
                                            </p>
                                        </div>
                                        <div className="flex h-14 w-24 items-center justify-center ">
                                            <img
                                                src={item.companyLogo}
                                                // alt={item.company}
                                                className="max-h-20 w-20 object-contain"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Navigation controls (Left button, pagination dots, right button) */}
                    <div className="flex md:hidden justify-between items-center px-6 mt-4 pb-4">
                        <button
                            onClick={() => {
                                const container = mobileSliderRef.current;
                                if (container) {
                                    const width = container.offsetWidth;
                                    const nextIndex = (activeIndex - 1 + placements.length) % placements.length;
                                    container.scrollTo({
                                        left: nextIndex * width,
                                        behavior: "smooth",
                                    });
                                    setActiveIndex(nextIndex);
                                }
                            }}
                            className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-slate-800 shadow-md hover:bg-slate-50 transition-all duration-300"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Mobile Pagination Dots */}
                        <div className="flex justify-center gap-2">
                            {placements.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        const container = mobileSliderRef.current;
                                        if (container) {
                                            const width = container.offsetWidth;
                                            container.scrollTo({
                                                left: index * width,
                                                behavior: "smooth",
                                            });
                                            setActiveIndex(index);
                                        }
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                const container = mobileSliderRef.current;
                                if (container) {
                                    const width = container.offsetWidth;
                                    const nextIndex = (activeIndex + 1) % placements.length;
                                    container.scrollTo({
                                        left: nextIndex * width,
                                        behavior: "smooth",
                                    });
                                    setActiveIndex(nextIndex);
                                }
                            }}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-800 shadow-md hover:bg-slate-50 transition-all duration-300"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Desktop horizontal slider with navigation icons and scroll snapping */}
                    <div className="hidden md:block relative group/slider">
                        {/* Scroll Navigation Buttons */}
                        <button
                            onClick={() => scrollDesktop("left")}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div
                            ref={desktopSliderRef}
                            onScroll={handleDesktopScroll}
                            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide scroll-smooth"
                        >
                            {placements.map((item, index) => (
                                <div
                                    key={index}
                                    className="placement-card snap-start flex-shrink-0 w-[calc((100%-4rem)/3)] group"
                                >
                                    {/* Student Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.studentImage}
                                            alt={item.name}
                                            className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        {/* Package Badge */}
                                        {/* <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                                            {item.package}
                                        </div> */}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 text-left">
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 text-slate-500">
                                            {item.course} • Batch {item.batch}
                                        </p>

                                        <div className="mt-6 flex  justify-end gap-20">

                                            <div className="mt-4">
                                                {/* <h4 className="font-semibold text-slate-900">
                                                    {item.company}
                                                </h4> */}

                                                <p className="text-sm text-slate-500">
                                                    Placed At
                                                </p>
                                            </div>
                                            <div className="flex h-14 w-36 items-center justify-center">
                                                <img
                                                    src={item.companyLogo}

                                                    className="max-h-10 object-contain"
                                                />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollDesktop("right")}
                            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

            </div>

            <style jsx>{`
        .placement-card {
          flex-shrink: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .placement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}