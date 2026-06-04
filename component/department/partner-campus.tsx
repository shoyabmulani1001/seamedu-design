import React from "react";
import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const campuses = [
    {
        name: "Ajeenkya DY Patil University",
        location: "Pune, Maharashtra",
        image:
            "https://bookuradmission.com/college_banner/Ajeenkya%20DY%20Patil%20University%20(ADYPU),%20%20Pune%20-%20Lohgaon_banner210915053303.jpg",
        specializations: "7 Specializations",
        certifications: "10 Certifications",
        description: "An innovation-driven university focused on future-ready education and entrepreneurship. Offers modern infrastructure with strong industry integration.",
    },
    {
        name: "DY Patil University",
        location: "Ambi, Maharashtra",
        image:
            "https://scontent.fpnq9-1.fna.fbcdn.net/v/t39.30808-6/477775143_935222335428793_3286886686821797391_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=EyxpdX5ohQgQ7kNvwHnFRrJ&_nc_oc=AdpPcjjy8KdvWSIYiyUgDWeUD-Kr8KSsHh1V6xbW7fJlSamz34Yyep-hdQYvLKRbdYo&_nc_zt=23&_nc_ht=scontent.fpnq9-1.fna&_nc_gid=WgmFSUsT42iuLAeqDpbwEw&_nc_ss=7a289&oh=00_Af9H_8RoqppiVOYZcIbz4vJFk0GcVMI7Di_PCDG2t73MjQ&oe=6A259304",
        specializations: "8 Specializations",
        certifications: "12 Certifications",
        description: "A modern campus with advanced facilities and a vibrant learning environment. Known for advanced facilities and a vibrant industry-focused programs and holistic development.",
    },
    {
        name: "Techno India University",
        location: "Kolkata, West Bengal",
        image:
            "https://assets.seamedu.com/assets/img/campus_tour/tiu/tiu-banner-img.jpg",
        description: "A well-known university offering programs in engineering, management, and sciences. Emphasizes practical learning and strong industry exposure.",
    },
];

const PartnerCampuses = () => {
    return (
        <section className="bg-white py-20 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-12">
                    <span className="text-blue-600 uppercase tracking-wider font-semibold text-sm">
                        Partner Campuses
                    </span>

                    <h2 className="mt-3 text-3xl md:text-5xl lg:text-5xl font-semibold text-black leading-tight">
                        Explore Our Partner

                        Campuses Across India
                    </h2>
                </div>

                {/* Campus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campuses.map((campus, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={campus.image}
                                    alt={campus.name}
                                    className="w-full h-45 object-cover"
                                />

                                {/* <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                                    <Heart size={20} className="text-gray-700" />
                                </button> */}
                            </div>

                            {/* Content */}
                            <div className="p-2 m-3">
                                <h3 className="text-2xl font-bold text-black mb-2">
                                    {campus.name}
                                </h3>


                                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                                    <FaMapMarkerAlt size={10} className="text-blue-600" />
                                    <span>{campus.location}</span>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-medium text-gray-400">
                                        {campus.description}
                                    </p>
                                </div>


                                {/* <div className="flex items-center gap-2 text-blue-600">
                                    <CheckCircle size={18} />
                                    <span>{campus.certifications}</span>
                                </div> */}
                            </div>

                            {/* Button */}
                            <div className="mx-7 my-7">
                                <button className="w-full  bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-xl flex items-center justify-center gap-2 transition">
                                    Explore Campus
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Buttons */}
                {/* <div className="flex flex-wrap gap-4 mt-12">
                    <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
                        View All Campuses
                    </button>

                    <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition">
                        Create Shortlist
                    </button>
                </div> */}
            </div>
        </section >
    );
};

export default PartnerCampuses;