import React from "react";
// import HeroSection from "@/component/department/NewHeroSection";
import Certificates from "@/component/department/Certificates";
import ProgramExplorer from "@/component/department/ProgramExplorer";
import TopPlacement from "@/component/main/TopPlacement";
import PlacementPartners from "@/component/department/PlacementPartners";
import FAQsSection from "@/component/main/FAQsSection";
import Footer from "@/component/Footer";
import CertificationsOffered from "@/component/university/CertificationOffered";
import PlacementPartner from "@/component/main/PlacementPartner";
import HeroSections from "@/component/department/HeroSection";
import HiringPartner from "@/component/department/hiring-partner";
import InquiryForm from "@/component/department/inquiry-form";
import PartnerCampuses from "@/component/department/partner-campus";

export default function DepartmentPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* <HeroSection /> */}
            <section className="relative w-full h-[100vh] overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-110 animate-zoomSlow"
                >
                    <source src="/videos/campus-videos/AjeenkyaDYPatil-BaneerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="relative z-10  md:mt-14 flex flex-col items-center justify-center h-full text-center px-6">

                    <h1 className="text-white text-xl md:text-5xl font-bold tracking-wide animate-fadeUp">
                        ADMISSIONS OPEN FOR 2026-27
                    </h1>

                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 animate-fadeUp delay-200">
                        APPLY NOW
                    </button>

                </div>
            </section>

            {/* About Section */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-fuchsia-100 blur-3xl opacity-40" />
                <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-100 blur-3xl opacity-40" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Heading */}
                    <div className="mb-10 text-center">
                        <h2 className="text-xl font-bold uppercase text-gray-900 sm:text-2xl md:text-5xl lg:text-5xl">
                            School of Management
                        </h2>

                        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#155DFC]"></div>
                    </div>

                    {/* Content */}
                    <div className="mx-auto max-w-6xl text-justify">
                        <p className="mb-6 text-base leading-slug text-gray-600 sm:text-md md:text-lg">
                            Our management courses focus on building future-ready leaders with an
                            emphasis on strategic thinking, digital transformation, and leadership.
                            Core to our program are certifications aligned with industry standards,
                            which set our students apart in the job market. Through strong industry
                            partnerships, we provide robust placement support to help students launch
                            impactful careers in business.

                        </p>

                        {/* Toggle Button for Mobile */}
                        {/* <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 md:hidden inline-flex items-center cursor-pointer gap-1.5 px-6 py-2.5 text-blue-600 text-sm font-semibold transition-all duration-300 "
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button> */}
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
            <InquiryForm />
            <ProgramExplorer />
            {/* <TopPlacement /> */}
            <HiringPartner />
            <PartnerCampuses />

            {/* <PlacementPartner titlePart1="Hiring" count="100" /> */}
            <FAQsSection />
            {/* <Footer /> */}
        </main>
    );
}
