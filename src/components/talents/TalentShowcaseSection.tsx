
import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const TalentShowcaseSection = () => {
  const showcaseRef = useRef(null);
  
  return (
    <section ref={showcaseRef} className="section-padding bg-muted relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"></div>
        <div className="absolute -top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-purple-200/5 blur-3xl"></div>
        <div className="absolute -bottom-[30%] right-[5%] w-[35%] h-[35%] rounded-full bg-purple-400/5 blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative">
        <SectionTitle 
          title="Our Talent" 
          subtitle="A glimpse into the diverse portfolio of exceptional talent we represent." 
          align="center"
          className="animate-on-scroll flip-x"
        />
        
        <div className="stagger-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div 
              key={item} 
              className="stagger-item aspect-square relative overflow-hidden rounded-md group cursor-pointer"
            >
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + item * 1111}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80`} 
                alt={`Talent ${item}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold">Talent Name</h4>
                  <p className="text-white/80 text-sm">Category</p>
                </div>
              </div>
              
              {/* Decorative corner border on hover */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-white/70 transition-all duration-500 delay-100"></div>
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-white/70 transition-all duration-500 delay-200"></div>
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-white/70 transition-all duration-500 delay-300"></div>
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-white/70 transition-all duration-500 delay-400"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll bounce-in delay-300">
          <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white btn-glow relative overflow-hidden group">
            <span className="relative z-10">View All Talent</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentShowcaseSection;
