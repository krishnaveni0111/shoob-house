
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Code, Users, ArrowRight } from "lucide-react";

const Subsidiaries = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with light tint of e0c3fc */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #e0c3fc 0%, #f5f0ff 100%)" }}
      >
        <div className="container max-w-7xl mx-auto px-4 z-10 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#3c096c]">
              Meet Our Powerhouses
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-gray-700 animate-slide-up">
              The innovative engines driving excellence at Shoob.
            </p>
            
            <div className="mt-10 animate-fade-in">
              {/* Content if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Shoob Media Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Creative Agency
              </div>
              <SectionTitle 
                title="Shoob Media" 
                subtitle="Storytelling That Inspires" 
              />
              
              <p className="text-lg mb-6 text-muted-foreground">
                We craft engaging narratives that bring brands to life. At Shoob Media, 
                we believe in the power of storytelling to transform businesses and connect 
                with audiences on a deeper level.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <Code className="h-4 w-4 text-purple-700" />
                  </div>
                  <span className="ml-3 text-purple-800">Content Creation</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg className="h-4 w-4 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <span className="ml-3 text-purple-800">Branding & Identity</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg className="h-4 w-4 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="ml-3 text-purple-800">Digital Strategy</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg className="h-4 w-4 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-purple-800">Video Production</span>
                </div>
              </div>
              
              <Link to="/shoob-media">
                <Button className="group bg-purple-600 text-white hover:bg-purple-700 btn-glow">
                  <span>Explore Media Services</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="neon-card aspect-video overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Shoob Media Services" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 via-purple-800/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs text-purple-300 uppercase tracking-wider">Creative Solutions</span>
                  <h4 className="text-2xl font-bold text-white mt-1">Strategic Storytelling</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-7xl mx-auto py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      </div>

      {/* Shoob Talents Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glam-card aspect-video overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Shoob Talents Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/30 via-pink-300/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs text-purple-700 uppercase tracking-wider">Talent Management</span>
                  <h4 className="text-2xl font-bold text-purple-900 mt-1">Star Potential</h4>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Talent Agency
              </div>
              <SectionTitle 
                title="Shoob Talents" 
                subtitle="Talent, Elevated." 
              />
              
              <p className="text-lg mb-6 text-muted-foreground">
                We connect skilled professionals with industry-leading opportunities. Shoob Talents 
                is a bridge between exceptional talent and innovative brands, creating meaningful 
                collaborations that benefit both parties.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-700" />
                  </div>
                  <span className="ml-3 text-purple-800">Talent Management</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg className="h-4 w-4 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-purple-800">Model Partnerships</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 transition-colors hover:bg-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg className="h-4 w-4 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="ml-3 text-purple-800">Creative Collaborations</span>
                </div>
              </div>
              
              <Link to="/shoob-talents">
                <Button className="group bg-purple-600 text-white hover:bg-purple-700 btn-glow">
                  <span>Discover Talent Solutions</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="glassmorphism-card max-w-4xl mx-auto p-10">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey with Shoob?</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-white">
              Whether you need media services or talent solutions, we're here to help you achieve your goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shoob-media">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-6 btn-glow">
                  Explore Media Services
                </Button>
              </Link>
              <Link to="/shoob-talents">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-6 btn-glow">
                  Discover Talent Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subsidiaries;
