import FAQsSection from "@/component/main/FAQsSection";
import PlacementPartner from "@/component/main/PlacementPartner";
import TopPlacement from "@/component/main/TopPlacement";
import CertificationsOffered from "@/component/university/CertificationOffered";
import CoursesGrid from "@/component/university/CoursesGrids";

import HeroSection from "@/component/university/HeroSection";
import HowToReachUs from "@/component/university/HowToReach";
import HiringPartners from "@/component/university/HiringPartner";
import OurCampuses from "@/component/university/OurCampuse";
import UniversityHighlight from "@/component/university/UniversityHighlights";
import WhyUs from "@/component/university/WhyUs";
import UniversityHighlight2 from "@/component/university/university-highlight2";
import InquiryForm from "@/component/university/inquiry-form";
import HiringPartner from "@/component/university/HiringPartner";
import OurCampuseSlider from "@/component/university/OurCampuseSlider";




export default function UniversityPage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />

            <UniversityHighlight />
            <InquiryForm />
            {/* <UniversityHighlight2 /> */}
            {/* <WhyUs /> */}
            {/* <CertificationsOffered /> */}

            <CoursesGrid />
            {/* <TopPlacement /> */}
            <HiringPartner />
            <OurCampuses />
            <OurCampuseSlider />
            <HowToReachUs />
            <FAQsSection />

        </main>
    )
}