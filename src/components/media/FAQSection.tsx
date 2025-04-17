
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0c0c0c]">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll fade-up">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 animate-on-scroll fade-up delay-200">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="space-y-4 animate-on-scroll fade-up delay-300">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                What services does Shoob Media offer?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We offer a comprehensive range of visual content services including brand films, commercial production, documentary filmmaking, motion graphics, animation, photography, and full-service post-production.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                Can you handle end-to-end film production?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Absolutely. Our team handles every aspect of production from concept development and scriptwriting to filming, editing, color grading, sound design, and final delivery in any required format.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                Do you work with startups and global brands?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Yes, we work with companies of all sizes. We've partnered with early-stage startups to help establish their visual identity, as well as multinational corporations on large-scale campaigns and rebranding initiatives.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                What's your typical production timeline?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Timelines vary based on project scope. A standard commercial production might take 4-6 weeks from concept to delivery, while more complex projects like documentary series can span several months. We'll provide a detailed timeline during our initial consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                Do you offer photography alongside video production?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Yes, we offer both photography and videography services. Many clients benefit from capturing both formats during the same production to maintain visual consistency across different platforms and marketing materials.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white/5 rounded-xl border-white/10 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D3A8D] transition-colors">
                How does the initial consultation process work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We begin with a discovery call to understand your vision, goals, and requirements. From there, our creative team develops a concept proposal with estimated budget and timeline. Once approved, we move into pre-production and the full creative process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
