"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        title: "Life at Seamedu (ADYPU Campus, Pune)",
        desc: "Explore our state-of-the-art campus infrastructure, sound studios, and creative spaces in Pune.",
        image: "https://cdn-eu.aglty.io/sunstoneuniversity/Attachments/NewItems/4-12_20231020191325_0.jpg",
        videoId: "sSPHdV4FYd8",
        duration: "3:25",
        tag: "Featured",
    },
    {
        title: "Student Life & Culture",
        desc: "A sneak peek into the creativity, collaboration, and unforgettable campus moments.",
        image: "https://images.shiksha.com/mediadata/images/1715930914php4OIjjh.jpeg",
        videoId: "1juScckFKNQ",
        duration: "2:18",
        tag: "Campus Life",
    },
    {
        title: "Film & Media Production",
        desc: "See how students bring ideas to life with professional filmmaking gear and studios.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5Qw8LpZGo7jM1R2gKmugIDzXazjmEWNeYg&s",
        videoId: "LtIIJ1TnK80",
        duration: "2:45",
        tag: "Filmmaking",
    },
    {
        title: "Sound Engineering & Music Production",
        desc: "A walkthrough of our industry-grade sound recording, mixing, and mastering studios.",
        image: "https://eduscope.co.in/wp-content/uploads/2026/03/Techno-India-University-Main-Entrance.webp",
        videoId: "U00v9-uOTWk",
        duration: "4:10",
        tag: "Sound Engineering",
    },
    {
        title: "VFX & Animation Departments",
        desc: "Modern digital art labs equipped with high-end workstations and creative design software.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SLTG1caUOJJaGq1q1h7izjva0myIrq1sfA&s",
        videoId: "29ZC0D2JqMc",
        duration: "2:15",
        tag: "VFX & Animation",
    },
    {
        title: "Alumni Success & Placements",
        desc: "Hear from our graduates working at top media houses, studios, and production companies.",
        image: "https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/03/27/1679920635.jpeg",
        videoId: "vmoVv6g_Mv0",
        duration: "2:30",
        tag: "Success Stories",
    },
];

const CampusTour = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-20">

                {/* Heading */}
                {/* Header - Premium Synced */}
                <div className="flex flex-col items-center mb-16 text-center">

                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1]">
                        Campus <span className="text-blue-600 not-italic">Tour</span>
                    </h3>
                    <p className="text-slate-500 text-lg mt-8 max-w-2xl font-medium">
                        Experience world-class learning across our specialized hub in Pune.
                    </p>
                </div>

                {/* Life at ADYPU - Mosaic Grid */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Life at ADYPU</h3>
                    </div>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/20 to-transparent rounded-full hidden sm:block" />
                </div>
            </div>

            <div className="relative group w-full">
                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer cursor-pointer" aria-label="Previous slide">
                    <FaChevronLeft className="text-lg" />
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="pb-12"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => setSelectedVideo(slide.videoId)}
                                className="relative h-[480px] md:h-[500px] w-[480px] md:w-[800px] mx-auto overflow-hidden group cursor-pointer bg-black"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-colors duration-700 group-hover:via-black/50" />

                                <div className="absolute top-8 left-0 right-0 z-20">
                                    <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center w-full">
                                        <span className="bg-white/95 backdrop-blur px-4 py-2 rounded-xl font-bold text-xs text-blue-600 shadow-sm">
                                            {slide.tag}
                                        </span>
                                        <span className="bg-black/70 text-white px-4 py-1.5 rounded-xl text-xs font-semibold">
                                            {slide.duration}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                                        <FaPlay className="text-3xl text-white group-hover:text-blue-600 ml-1 transition-colors duration-500" />
                                    </div>
                                </div>

                                <div className="absolute bottom-12 left-0 right-0 z-20">
                                    <div className="max-w-7xl mx-auto px-6 md:px-20 w-full text-white">
                                        <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight max-w-4xl">
                                            {slide.title}
                                        </h3>

                                        <p className="text-sm md:text-lg text-gray-200 line-clamp-2 max-w-2xl font-medium">
                                            {slide.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer cursor-pointer" aria-label="Next slide">
                    <FaChevronRight className="text-lg" />
                </button>
            </div>

            {/* Video Modal Container */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-20"
                    >
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                            onClick={() => setSelectedVideo(null)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 350 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/10 transition-all duration-200 hover:scale-110 cursor-pointer"
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CampusTour;