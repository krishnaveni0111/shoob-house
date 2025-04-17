
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Users, Star, Handshake, Award, Globe, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const servicesRef = useRef(null);
  
  return (
    <section ref={servicesRef} className="section-padding bg-muted relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-[15%] -right-[15%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute top-[30%] -left-[10%] w-[25%] h-[25%] rounded-full bg-purple-300/5 blur-2xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative">
        <SectionTitle 
          title="Talent Services" 
          subtitle="Our agency offers comprehensive talent management services for models, influencers, and creative professionals." 
          align="center"
          className="animate-on-scroll blur-in"
        />
        
        <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="stagger-item">
            <ServiceCard
              icon={Users}
              title="Talent Management"
              description="Full-service representation for models, influencers, and creative professionals to develop and advance their careers."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
          
          <div className="stagger-item">
            <ServiceCard
              icon={Handshake}
              title="Brand Partnerships"
              description="Strategic matchmaking between brands and talent for authentic campaigns and long-term collaborations."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
          
          <div className="stagger-item">
            <ServiceCard
              icon={Star}
              title="Model Booking"
              description="Connecting clients with the perfect models for fashion, editorial, commercial, and runway projects."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
          
          <div className="stagger-item">
            <ServiceCard
              icon={Globe}
              title="International Representation"
              description="Global opportunities for talent through our network of industry partners and clients worldwide."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
          
          <div className="stagger-item">
            <ServiceCard
              icon={Award}
              title="Talent Development"
              description="Personalized coaching, portfolio development, and career guidance for emerging and established talent."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
          
          <div className="stagger-item">
            <ServiceCard
              icon={Briefcase}
              title="Project Casting"
              description="Comprehensive casting services for advertising campaigns, fashion shows, films, and special events."
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
