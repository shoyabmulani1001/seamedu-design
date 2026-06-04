"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";

export default function HowToReachUs() {
  return (
    <section id="reach-us" className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#155DFC]/5 -skew-x-12 translate-x-24 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content: Typography & Quick Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8 lg:mb-10">

              <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-[1] mb-6">
                How to <span className="text-[#155DFC]">Reach Us</span>
              </h2>
              <p className="text-slate-500 text-base font-medium max-w-sm leading-relaxed">
                Connect with our Pune hub for admissions, corporate partnerships, or a campus walkthrough.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">

              {/* Address */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155DFC] flex items-center justify-center text-white shadow-lg shadow-[#155DFC]/20 transition-transform group-hover:scale-110">
                    <FaMapMarkerAlt size={14} />
                  </div>

                  <h4 className="text-sm md:text-sm font-bold uppercase tracking-widest text-slate-900">
                    Address
                  </h4>
                </div>

                <p className="text-slate-500 text-[12px] md:text-sm font-medium leading-relaxed">
                  Charoli Bk. via Lohegaon, Pune – 412105, Maharashtra, India.
                </p>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155DFC] flex items-center justify-center text-white shadow-lg shadow-[#155DFC]/20 transition-transform group-hover:scale-110">
                    <FaPhoneAlt size={14} />
                  </div>

                  <h4 className="text-sm md:text-sm font-bold uppercase tracking-widest text-slate-900">
                    Phone No.
                  </h4>
                </div>

                <p className="text-slate-500 text-[12px] md:text-sm font-medium leading-relaxed">
                  +91 9168067022
                </p>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155DFC] flex items-center justify-center text-white shadow-lg shadow-[#155DFC]/20 transition-transform group-hover:scale-110">
                    <FaEnvelope size={14} />
                  </div>

                  <h4 className="text-sm md:text-sm font-bold uppercase tracking-widest text-slate-900">
                    Email Id
                  </h4>
                </div>

                <p className="text-slate-500 text-[12px] md:text-sm font-medium leading-relaxed break-words">
                  info@seamedu.com
                </p>
              </div>

              {/* Timing */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155DFC] flex items-center justify-center text-white shadow-lg shadow-[#155DFC]/20 transition-transform group-hover:scale-110">
                    <FaClock size={14} />
                  </div>

                  <h4 className="text-sm md:text-sm font-bold uppercase tracking-widest text-slate-900">
                    Timing
                  </h4>
                </div>

                <p className="text-slate-500 text-[12px] md:text-sm font-medium leading-relaxed">
                  9 AM – 6 PM (Mon–Fri)
                </p>
              </div>

            </div>

            {/* <button className="mt-10 flex items-center gap-3 text-[#155DFC] group w-fit">
              <span className="text-xs font-bold uppercase tracking-none">Plan your visit</span>
              <div className="w-7 h-7 rounded-full bg-[#155DFC] text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-md shadow-[#155DFC]/20">
                <FaArrowRight size={10} />
              </div>
            </button> */}
          </div>

          {/* Right Content: Stylized Map Card */}
          <div className="lg:col-span-7 h-[400px] lg:h-[450px] w-full relative">
            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden border-4 border-white p-1">
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative">
                <iframe
                  src="https://maps.google.com/maps?q=Ajeenkya%20DY%20Patil%20University,%20Charoli%20Bk,%20Pune%2018.6214203,73.9123937&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contrast-110 opacity-100 transition-all duration-700 hover:scale-105"
                ></iframe>

                {/* Floating Map Interaction Card */}
                <div className="absolute bottom-4 left-40 md:left-120 right-4 p-5  flex items-center justify-between">
                  <div className="flex items-center gap-4">


                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}