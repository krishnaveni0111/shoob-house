
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="parallax-item absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-green-100/10" data-speed="0.2"></div>
        <div className="parallax-item absolute bottom-[20%] left-[10%] w-[15vw] h-[15vw] rounded-full bg-yellow-200/10" data-speed="-0.1"></div>
        <div className="parallax-item absolute top-[35%] left-[20%] w-[5vw] h-[5vw] rounded-full bg-pink-300/10" data-speed="0.3"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll reveal-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight relative">
              <span className="animate-on-scroll typing-animation delay-100 inline-block">Elevate Your Talent.</span>
              <br />
              <span className="animate-on-scroll typing-animation delay-700 inline-block">Find Your Spotlight.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-on-scroll fade-up delay-1000">
              Shoob Talents connects the world's best creatives with career-changing opportunities and helps brands find the perfect talent for their campaigns.
            </p>
            <div className="mt-8 animate-on-scroll scale-in delay-1000">
              <Link to="/contact">
                <Button className="bg-purple-700 hover:bg-purple-800 btn-glow relative overflow-hidden group">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg animate-on-scroll flip-y">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-200/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-300/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
            
            <img 
              src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc" 
              alt="Shoob Talents" 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-800/70 to-transparent"></div>
            
            {/* Floating stats */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-3 rounded-lg animate-on-scroll fade-up delay-800">
              <p className="text-white text-sm font-medium">500+ Talents</p>
              <p className="text-white/80 text-xs">Worldwide Network</p>
            </div>
            
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-lg animate-on-scroll fade-up delay-900">
              <p className="text-white text-sm font-medium">100% Success</p>
              <p className="text-white/80 text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
