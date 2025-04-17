
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-shoob-50">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Answers to common questions about our services" 
          align="center"
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="px-4 font-bold">
                What services does Shoob Media offer?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Shoob Media offers a comprehensive range of services including branding & identity, 
                video production, social media campaigns, and growth marketing strategies.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-card p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="px-4 font-bold">
                How can I join Shoob Talents?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                To join Shoob Talents, you can submit your portfolio through our contact form or 
                the specific talent registration form on our Shoob Talents page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-card p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="px-4 font-bold">
                What types of talent does Shoob represent?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Shoob Talents represents a diverse range of creatives including models, influencers, 
                photographers, videographers, creative directors, and digital content creators.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-card p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="px-4 font-bold">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Project timelines vary depending on scope and complexity. During our initial 
                consultation, we'll provide a detailed timeline based on your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
