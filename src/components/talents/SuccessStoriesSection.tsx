
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
// import SuccessStoriesSection from "@/components/SuccessStoriesSection";

const SuccessStoriesSection = () => {
  const storiesRef = useRef(null);
  
  return (
    <section ref={storiesRef} className="py-20 bg-white relative overflow-hidden">
      {/* <section className="py-20 bg-white relative overflow-hidden"> */}

      {/* Background Shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"></div>
        <div className="absolute -top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-100/5 blur-3xl"></div>
        <div className="parallax-item" data-speed="-0.2">
          <div className="absolute top-[70%] left-[10%] w-5 h-5 rounded-full bg-purple-400/20"></div>
        </div>
        <div className="parallax-item" data-speed="0.3">
          <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-purple-500/20"></div>
        </div>
      </div>
      
      
      <div className="container max-w-7xl mx-auto relative">
        <SectionTitle 
          title="Success Stories" 
          subtitle="Discover how we've helped talent reach new heights and brands find their perfect ambassadors." 
          align="left"
          className="animate-on-scroll rotate-in"
        />
        
        <div className="mt-12 space-y-12">
          {/* Success Story 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll reveal-right">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-2 md:order-1 p-8">
                <h3 className="text-xl font-bold animate-on-scroll fade-up delay-200">From Local Market to Global Campaign</h3>
                <p className="mt-3 text-muted-foreground animate-on-scroll fade-up delay-300">Model Success Story</p>
                <p className="mt-4 animate-on-scroll fade-up delay-400">
                  When Mia joined Shoob Talents, she was modeling for local brands. Within a year, our team secured her international campaigns with luxury fashion houses and beauty brands.
                </p>
                <div className="mt-6 animate-on-scroll bounce-in delay-500">
                  <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white btn-glow">
                    Read Full Story
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-square md:aspect-auto relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549351236-caca0f174515" 
                  alt="Model Success Story" 
                  className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-900/20"></div>
              </div>
            </div>
          </div>
          
          {/* Success Story 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll reveal-left">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517345312877-60c9fb52a0dd" 
                  alt="Brand Partnership" 
                  className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-900/20"></div>
              </div>
              <div className="p-8">
              <h3 className="text-xl font-bold">
              Perfect Brand-Talent Match</h3>
                <p className="mt-3 text-muted-foreground animate-on-scroll fade-up delay-300">Brand Partnership Success</p>
                <p className="mt-4 animate-on-scroll fade-up delay-400">
                  When a leading lifestyle brand needed authentic voices for their new campaign, we connected them with the perfect mix of influencers and models, resulting in their most engaging campaign to date.
                </p>
                <div className="mt-6 animate-on-scroll bounce-in delay-500">
                  <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white btn-glow">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
