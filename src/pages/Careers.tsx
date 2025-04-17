
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const openPositions = [
  {
    id: 1,
    title: "Creative Director",
    department: "Media",
    location: "New York",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Digital Marketer",
    department: "Media",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Content Strategist",
    department: "Media",
    location: "Los Angeles",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Talent Manager",
    department: "Talents",
    location: "New York",
    type: "Full-time"
  }
];

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements and generous PTO policy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Growth & Development",
    description: "Continuous learning opportunities and career advancement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Creative Environment",
    description: "Collaborative workspace that fosters innovation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Join the Shoob Team"
        subtitle="We are looking for passionate creatives, strategists, and innovators to shape the future of media and talent."
        // className="bg-gradient-to-br from-shoob-100 to-shoob-200 text-white"
        className="bg-gradient-to-br from-[rgba(226, 222, 222, 0.1)] to-[rgba(255,255,255,0.3)] text-white"

      />

      {/* About Our Team Section */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Life at Shoob" 
                subtitle="What it's like to be part of our creative community" 
              />
              
              <p className="text-lg mb-6">
                At Shoob, we believe that extraordinary results come from extraordinary people. 
                We've built a culture that values creativity, collaboration, and continuous growth, 
                where every team member has the opportunity to make an impact.
              </p>
              
              <p className="text-lg mb-6">
                Our diverse team brings together talents from various backgrounds, experiences, and 
                perspectives, creating an environment where innovation thrives and big ideas come to life.
              </p>
              
              <p className="text-lg">
                If you're passionate about media, talent, or creative storytelling and want to be 
                part of a team that's redefining industries, Shoob might be the place for you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Shoob Team" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Shoob Office" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Shoob Culture" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="culture" className="section-padding bg-shoob-50">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Benefits & Perks" 
            subtitle="What we offer to our team members" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-shoob-100 rounded-full flex items-center justify-center text-shoob-600 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Open Positions" 
            subtitle="Current opportunities to join our team" 
          />
          
          <div className="mt-12 space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.id} 
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-shoob-300 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                  <div className="p-6 md:col-span-3">
                    <h3 className="text-xl font-bold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-block bg-shoob-100 text-shoob-700 text-sm px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:text-right bg-gray-50 md:bg-transparent">
                    <Link to={`/careers/${position.id}`}>
                      <Button variant="outline" className="w-full md:w-auto">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section-padding bg-shoob-800 text-white">
        <div className="container max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Hiring Process" 
            subtitle="What to expect when you apply to Shoob" 
            className="text-white"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12 relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-24 left-1/2 h-0.5 w-[calc(100%-100px)] -translate-x-1/2 bg-shoob-700"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-shoob-700 text-xl font-bold z-10 relative">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3">Application Review</h3>
              <p className="text-shoob-200">
                Our team reviews your application and portfolio to assess your experience and fit.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-shoob-700 text-xl font-bold z-10 relative">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3">Interviews</h3>
              <p className="text-shoob-200">
                You'll meet with potential team members and leadership to discuss your experience and our expectations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-shoob-700 text-xl font-bold z-10 relative">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3">Offer & Onboarding</h3>
              <p className="text-shoob-200">
                If there's a match, we'll extend an offer and welcome you to the Shoob family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-shoob-500 to-shoob-400 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Team?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Explore our open positions and take the first step toward a rewarding career at Shoob.
          </p>
          <div className="mt-10">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-shoob-500">
              View All Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
