"use client";

import React, { useState, useEffect } from "react";
import { FaChartLine, FaUniversity, FaBullhorn, FaGlobe, FaSearchDollar, FaTv, FaDesktop, FaShieldAlt, FaCode, FaUsers, FaDatabase, FaChevronDown } from "react-icons/fa";

const undergraduateCourses = [
    {
        title: "BBA Finance",
        locations: ["Pune"],
        image: "images/department/BBA-Finance.png",
        icon: <FaChartLine className="text-white text-2xl" />,
    },
    {
        title: "BBA Banking & Financial Services",
        locations: ["Pune", "Gurugram"],
        image: "images/department/BBA Banking&Financial-service.png",
        icon: <FaUniversity className="text-white text-2xl" />,
    },
    {
        title: "BBA In Digital Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        icon: <FaBullhorn className="text-white text-2xl" />,
    },
    {
        title: "BBA International Business",
        locations: ["Pune", "Gurugram", "Kolkata"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        icon: <FaGlobe className="text-white text-2xl" />,
    },
    {
        title: "BBA In Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
        icon: <FaSearchDollar className="text-white text-2xl" />,
    },
    {
        title: "BBA In Media Management",
        locations: ["Pune"],
        image: "images/department/BBA Media Management.png",
        icon: <FaTv className="text-white text-2xl" />,
    },
];

const postgraduateCourses = [
    {
        title: "MBA Human Resources",
        locations: ["Pune", "Bangalore"],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
        icon: <FaUsers className="text-white text-2xl" />,
    },
    {
        title: "MBA Business Analytics",
        locations: ["Pune"],
        image: "images/department/MBA Business-Analytics.png",
        icon: <FaDatabase className="text-white text-2xl" />,
    },
    {
        title: "MBA Finance & Strategy",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
        icon: <FaChartLine className="text-white text-2xl" />,
    },
    {
        title: "MBA Digital Marketing",
        locations: ["Pune", "Gurugram"],
        image: "images/department/MBA-Digital-Marketing.png",
        icon: <FaBullhorn className="text-white text-2xl" />,
    },
];

export default function ProgramExplorer() {
    const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleTabChange = (tab: "UG" | "PG") => {
        setActiveTab(tab);
        setShowAll(false);
    };

    const courses = activeTab === "UG" ? undergraduateCourses : postgraduateCourses;
    const displayedCourses = (isMobile && !showAll) ? courses.slice(0, 2) : courses;

    return (
        <section className="bg-white py-8 font-sans text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header - Synced with Home Style */}
                <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                    {/* <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2 animate-fade-in">Academic Excellence</h2> */}
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1]">
                        Course <span className="text-blue-600 not-italic">Offering</span>
                    </h3>
                </div>

                {/* Modern Pill Toggle UI */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div className="p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-2xl flex items-center relative gap-1 border border-slate-200/60 shadow-inner">
                        {/* Dynamic sliding highlight */}
                        <div
                            className={`absolute h-[calc(100%-12px)] top-[6px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white rounded-xl shadow-sm z-0 
                                ${activeTab === "UG"
                                    ? "left-[6px] w-[135px] sm:w-[180px]"
                                    : "left-[145px] sm:left-[190px] w-[135px] sm:w-[180px]"}`}
                        />

                        <button
                            onClick={() => handleTabChange("UG")}
                            className={`relative z-10 w-[135px] sm:w-[180px] py-3.5 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === "UG" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"}`}
                        >
                            Under Graduate
                        </button>
                        <button
                            onClick={() => handleTabChange("PG")}
                            className={`relative z-10 w-[135px] sm:w-[180px] py-3.5 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === "PG" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"}`}
                        >
                            Post Graduate
                        </button>
                    </div>
                </div>

                {/* Grid Layout with smaller, less "bulky" cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {displayedCourses.map((course, index) => (
                        <div
                            key={index}
                            className="relative h-[340px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow- transition-all duration-700 bg-black border border-white/5"
                        >
                            {/* Image with Dark Zoom Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 transition-colors duration-700 group-hover:via-black/50" />
                            </div>

                            {/* Location Tags - Top Left */}
                            <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                                {course.locations.map((loc, lIdx) => (
                                    <span
                                        key={lIdx}
                                        className="bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-black shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                                    >
                                        {loc}
                                    </span>
                                ))}
                            </div>

                            {/* Icon Container - Top Right */}
                            {/* <div className="absolute top-5 right-5 z-20">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-lg transform transition-all duration-700 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 group-hover:-translate-y-1 shadow-xl">
                  {(course as any).icon}
                </div>
              </div> */}

                            {/* Content - Bottom */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="relative transform transition-all duration-500 group-hover:-translate-y-4">
                                    <div className="flex items-center gap-3 mb-2.5">
                                        {/* <div className="w-[2px] h-3 bg-blue-600/60 rounded-full" />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
                      {course.category}
                    </p> */}
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg group-hover:text-blue-200 transition-all duration-500 transform group-hover:sm:-translate-y-5">
                                        {course.title}
                                    </h3>

                                    {/* Action row - Always visible on mobile, interactive on desktop */}
                                    <div className="mt-4 flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:opacity-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">View Details</span>
                                        <svg className="w-4 h-4 text-blue-600 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Inner Border Glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/20 rounded-xl transition-all duration-700 pointer-events-none z-30" />
                        </div>
                    ))}

                </div>

                {/* Show More Button - Mobile Only */}
                {isMobile && !showAll && courses.length > 2 && (
                    <div className="mt-10 flex justify-center animate-in fade-in slide-in-from-top-4 duration-500">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            Show More Courses
                            <FaChevronDown className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                )}
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-20 -z-10" />
        </section>
    );
}
