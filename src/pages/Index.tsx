import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Quote,
  ArrowRight,
  Star,
  Flower
} from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";
import { GlareCard } from "@/components/ui/glare-card";

const testimonials = [
  {
    id: 1,
    quote: "Working with Shoob Media transformed our brand identity. Their creative vision and strategic approach helped us connect with our audience in ways we never thought possible.",
    name: "Sarah Johnson",
    designation: "Marketing Director",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 2,
    quote: "Shoob Talents found us the perfect ambassadors for our campaign. Their understanding of our brand and attention to detail made all the difference in our product launch.",
    name: "Michael Chen",
    designation: "Brand Manager",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 3,
    quote: "The creative team at Shoob has an extraordinary ability to translate complex ideas into compelling visual narratives. They've been instrumental in our growth.",
    name: "Jessica Williams",
    designation: "Creative Director",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 4,
    quote: "From concept to execution, Shoob delivers excellence. Their attention to detail and creative problem-solving have made them our go-to partner for all creative needs.",
    name: "David Thompson",
    designation: "CEO",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 5,
    quote: "The talent management team at Shoob has an eye for finding exactly what our campaigns need. They've consistently exceeded our expectations.",
    name: "Emily Rodriguez",
    designation: "Campaign Manager",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  }
];

const formattedTestimonials = testimonials.map(t => ({
  quote: t.quote,
  name: t.name,
  designation: t.designation,
  src: t.src
}));

const carouselImages = [
  {
    id: 1,
    title: "Creative Innovation",
    description: "We challenge conventions and explore new possibilities",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Strategic Execution",
    description: "Delivering high-quality results with precision",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Creative Collaboration",
    description: "Working together to realize your vision",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Excellence in Delivery",
    description: "Exceeding expectations at every turn",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Index = () => {
  const showcasingRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const ourRef = useRef<HTMLDivElement>(null);
  const obsessionRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);

  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [visionCarouselApi, setVisionCarouselApi] = useState<any>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (visionCarouselApi) {
      const interval = setInterval(() => {
        visionCarouselApi.scrollNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [visionCarouselApi]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animated-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="container max-w-7xl mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black">
              <span onClick={() => scrollToSection(showcasingRef)} className="cursor-pointer transition-colors duration-300 hover:text-[#864cc6]">Showcasing</span>{" "}
              <span onClick={() => scrollToSection(howRef)} className="cursor-pointer transition-colors duration-300 hover:text-[#864cc6]">How</span>{" "}
              <span onClick={() => scrollToSection(ourRef)} className="cursor-pointer transition-colors duration-300 hover:text-[#864cc6]">Our</span>{" "}
              <span onClick={() => scrollToSection(obsessionRef)} className="cursor-pointer transition-colors duration-300 hover:text-[#864cc6]">Obsession</span>{" "}
              <span onClick={() => scrollToSection(bloomRef)} className="cursor-pointer transition-colors duration-300 hover:text-[#864cc6]">Blooms</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A dynamic ecosystem of creative agencies and talent platforms, designed to transform your vision into reality.
            </p>
            <div className="mt-8">
              <Button className="bg-[#864cc6] hover:bg-[#864cc6]/90 hover:shadow-lg hover:shadow-[#864cc6]/20 transition-all group rounded-full animate-bounce-subtle">
                Discover Our Vision
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section ref={showcasingRef} className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Showcasing the Future of Media & Entertainment" 
            subtitle="Explore our interconnected subsidiaries, each designed to redefine creative delivery in the media industry." 
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Link to="/shoob-media" className="feature-card group shadow-md hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Shoob Media" className="w-full h-64 object-cover" />
              
              <div className="feature-card-content">
                <h3 className="text-xl font-bold text-white mb-2">SHOOB MEDIA</h3>
                <p className="text-sm text-white/90 mb-4">
                  A full-service creative agency specializing in branding, digital marketing, and strategic campaigns.
                </p>
                
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-transparent hover:border-[#864cc6] hover:text-white transition-all w-fit"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>
            
            <Link to="/shoob-talents" className="feature-card group shadow-md hover:shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Shoob Talents" className="w-full h-64 object-cover" />
              
              <div className="feature-card-content">
                <h3 className="text-xl font-bold text-white mb-2">Shoob Talents</h3>
                <p className="text-sm text-white/90 mb-4">
                  An international booking agency representing diverse talent for fashion, commercial, and promotional campaigns.
                </p>
                
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-transparent hover:border-[#864cc6] hover:text-white transition-all w-fit"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section ref={howRef} className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="How Our Vision Shapes the Now" 
            subtitle="Bold and refined strategies, collaborative client success teams that propel brands forward." 
            align="left"
          />
          
          <div className="mt-12">
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: "start" }}
              setApi={setVisionCarouselApi}
            >
              <CarouselContent>
                {carouselImages.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="carousel-card h-96">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="carousel-card-image" 
                      />
                      <div className="carousel-card-content">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-white/80 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <section ref={ourRef} className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Presence, Empowering Every Step" 
            subtitle="Guidance, support, expert solutions, and unwavering commitment—qualities that define us." 
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="h-[280px]">
              <GlareCard className="bg-[#864cc6] p-6 flex flex-col items-center justify-center text-white">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Expert Guidance</h3>
                <p className="mt-1 text-sm text-white/80 text-center">Strategic insights that illuminate paths to success</p>
              </GlareCard>
            </div>
            
            <div className="h-[280px]">
              <GlareCard className="bg-[#864cc6] p-6 flex flex-col items-center justify-center text-white">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Integrated Solutions</h3>
                <p className="mt-1 text-sm text-white/80 text-center">Beyond expectations with comprehensive approaches</p>
              </GlareCard>
            </div>
            
            <div className="h-[280px]">
              <GlareCard className="bg-[#864cc6] p-6 flex flex-col items-center justify-center text-white">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Seamless Support</h3>
                <p className="mt-1 text-sm text-white/80 text-center">Flexible solutions tailored to your unique needs</p>
              </GlareCard>
            </div>
          </div>
        </div>
      </section>

      <section ref={obsessionRef} className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Obsession Reflected in Every Story" 
            subtitle="See how our collaboration has transformed brands, businesses, and creative visions." 
            align="left"
          />
          
          <div className="mt-12">
            <AnimatedTestimonials 
              testimonials={formattedTestimonials} 
              autoplay={true}
              className="bg-white rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      <section ref={bloomRef} className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Bloom Into Possibilities" 
            subtitle="Discover how our creative ecosystem can help your brand flourish and reach new heights." 
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 border-t-4 border-[#864cc6]"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="mb-4 text-[#864cc6]">
                <Flower className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Creative Growth</h3>
              <p className="text-gray-600">
                Nurture your brand identity with innovative strategies that resonate with your audience and create lasting impressions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 border-t-4 border-[#864cc6]"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="mb-4 text-[#864cc6]">
                <Flower className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Market Expansion</h3>
              <p className="text-gray-600">
                Expand your reach through targeted campaigns designed to connect with new audiences and open untapped markets.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 border-t-4 border-[#864cc6]"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="mb-4 text-[#864cc6]">
                <Flower className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
              <p className="text-gray-600">
                Embrace digital evolution with cutting-edge solutions that position your brand at the forefront of industry innovation.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-[#864cc6] hover:bg-[#864cc6]/90 shadow-md hover:shadow-lg transition-all">
              Explore Possibilities
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white animated-section">
        <div className="container max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to transform your creative potential?</h3>
          <Link to="/contact">
            <Button className="bg-[#864cc6] hover:bg-[#864cc6]/90 shadow-lg hover:shadow-[#864cc6]/25 transition-all rounded-full">
              Contact Us Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
