
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import FAQSection from "@/components/contact/FAQSection";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Let's Create Something Extraordinary Together"
        subtitle="Have a project in mind or want to learn more about our services? Get in touch with our team."
        // className="bg-gradient-to-br from-shoob-800 to-shoob-900 text-white"
        className="bg-gradient-to-br from-[rgba(226, 222, 222, 0.1)] to-[rgba(255,255,255,0.3)] text-white"
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="Fill out the form and we'll get back to you as soon as possible." 
              />
              
              <ContactForm />
            </div>
            
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Contact;
