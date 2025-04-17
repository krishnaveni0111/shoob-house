
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Film, 
  Gem, 
  ArrowRight, 
  Users, 
  PenTool, 
  BarChart 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Featured projects data
const projects = [
  {
    id: 1,
    title: "Evolve Brand Redesign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "NexGen Product Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Altitude Fashion Campaign",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Horizon Digital Experience",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ShoobMedia = () => {
  const containerRef = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-scene-for-video-or-photo-shoot-42067-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Where Creativity Meets Strategy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Full-service creative agency crafting exceptional brand experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/contact">
              <Button 
                className="px-8 py-6 bg-[#864cc6] text-white rounded-full shadow-lg hover:bg-[#864cc6]/90 transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-white" ref={containerRef}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We deliver creative solutions across multiple disciplines to help your brand stand out and connect with your audience.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={PenTool}
                title="Branding & Identity"
                description="We craft unique brand identities that resonate with your audience, from logo design to complete visual systems."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={Camera}
                title="Content Creation"
                description="From photography to copywriting, we create engaging content that tells your brand's story across all platforms."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={Film}
                title="Video Production"
                description="Our team produces high-quality video content from concept to final delivery, optimized for all platforms."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={Gem}
                title="Digital Campaigns"
                description="Integrated digital marketing campaigns that engage audiences and drive conversions through multiple touchpoints."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={BarChart}
                title="Growth Marketing"
                description="Data-driven strategies to expand your audience, increase engagement, and drive measurable business results."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard
                icon={Users}
                title="Social Media"
                description="Comprehensive social media strategies including content creation, community management, and paid advertising."
                className="border-l-4 border-[#864cc6] hover:border-[#864cc6]/80"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4"
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-xl"
              >
                A showcase of our recent work across different industries and mediums.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/portfolio" className="inline-block">
                <Button className="bg-[#864cc6] hover:bg-[#864cc6]/90 transition-colors">
                  View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <div className="group relative overflow-hidden rounded-xl shadow-md h-80">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 bg-[#864cc6] text-white text-xs rounded-full mb-2">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16"
          >
            A streamlined approach designed to bring your vision to life efficiently and effectively.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#864cc6] text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-center text-gray-600">We learn about your brand, goals, and audience to establish a solid foundation.</p>
              </div>
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-[#864cc6]/20 -z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#864cc6] text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-center text-gray-600">We develop a tailored plan that aligns with your business objectives and target audience.</p>
              </div>
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-[#864cc6]/20 -z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#864cc6] text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Creation</h3>
                <p className="text-center text-gray-600">Our creative team brings your vision to life with high-quality execution and attention to detail.</p>
              </div>
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-[#864cc6]/20 -z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#864cc6] text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-center text-gray-600">We launch your project and provide ongoing support to ensure lasting success.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#864cc6] text-white h-screen flex items-center">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl max-w-2xl mx-auto"
          >
            Let's create something extraordinary together. Our team is ready to help you achieve your goals.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#864cc6] transition-colors"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ShoobMedia;
