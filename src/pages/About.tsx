
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="The Vision Behind Shoob"
        subtitle="We craft experiences that inspire, connect, and transform."
        // className="bg-gradient-to-br from-shoob-800 to-shoob-900 text-white"
        className="bg-gradient-to-br from-[rgba(226, 222, 222, 0.1)] to-[rgba(255,255,255,0.3)] text-white"
      />

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="How Shoob came to be a creative force in the industry" 
              />
              
              <p className="text-lg mb-6">
                Shoob is more than a media company; it's a movement. Founded with a passion for creativity 
                and a commitment to excellence, we've grown from a small creative agency to a 
                comprehensive hub for media and talent.
              </p>
              
              <p className="text-lg mb-6">
                Our journey began with a simple belief: that storytelling has the power to transform 
                brands and that talent deserves a platform to shine. From these principles, Shoob 
                Media and Shoob Talents were born, creating a unique ecosystem where creativity 
                and opportunity intersect.
              </p>
              
              <p className="text-lg">
                Today, we continue to push boundaries, crafting compelling narratives and connecting 
                exceptional talent with innovative brands. Our obsession with quality and 
                innovation blooms in every project we undertake.
              </p>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Shoob Story" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section-padding bg-shoob-50">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and forward-thinking, constantly pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnerships and teamwork to achieve exceptional results.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in everything we do.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptability</h3>
              <p className="text-muted-foreground">
                We embrace change and evolve with the industry, always staying ahead of trends.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We love what we do, and this enthusiasm shines through in every project.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and respect in all our relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Key Pillars" 
            subtitle="The foundation of our business and what makes us unique" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-gradient-to-br from-shoob-800 to-shoob-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Shoob Media</h3>
              <p className="text-lg mb-6">
                Brand storytelling, content creation, and digital marketing strategies that bring 
                your vision to life. We craft narratives that resonate with audiences and drive 
                meaningful engagement.
              </p>
              <Link to="/shoob-media">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-shoob-600">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-shoob-600 to-shoob-400 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Shoob Talents</h3>
              <p className="text-lg mb-6">
                A bridge connecting exceptional talent to opportunities across industries. We elevate 
                talent and connect them with brands and projects that allow their skills to shine.
              </p>
              <Link to="/shoob-talents">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-shoob-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-shoob-100">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-shoob-800">Ready to Join Our Journey?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto text-shoob-700">
            Whether you're a brand looking for creative solutions or a talent seeking opportunities, 
            we'd love to connect with you.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button className="bg-shoob-600 text-white hover:bg-shoob-700">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
