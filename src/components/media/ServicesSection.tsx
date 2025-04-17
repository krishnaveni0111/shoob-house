
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { PenTool, Camera, Film, Monitor, BarChart, Users } from "lucide-react";

const MediaServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container max-w-7xl mx-auto">
        <SectionTitle 
          title="Core Services" 
          subtitle="Our team delivers creative solutions across multiple disciplines to help your brand stand out." 
          align="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            icon={PenTool}
            title="Branding & Identity"
            description="We craft unique brand identities that resonate with your audience, from logo design to complete visual systems."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
          
          <ServiceCard
            icon={Camera}
            title="Content Creation"
            description="From photography to copywriting, we create engaging content that tells your brand's story across all platforms."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
          
          <ServiceCard
            icon={Film}
            title="Video Production"
            description="Our team produces high-quality video content from concept to final delivery, optimized for all platforms."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
          
          <ServiceCard
            icon={Monitor}
            title="Digital Campaigns"
            description="Integrated digital marketing campaigns that engage audiences and drive conversions through multiple touchpoints."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
          
          <ServiceCard
            icon={BarChart}
            title="Growth Marketing"
            description="Data-driven strategies to expand your audience, increase engagement, and drive measurable business results."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
          
          <ServiceCard
            icon={Users}
            title="Social Media Management"
            description="Comprehensive social media strategies including content creation, community management, and paid advertising."
            className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaServicesSection;
