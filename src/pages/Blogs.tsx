import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionTitle from "@/components/SectionTitle";
import BlogCategories from "@/components/blogs/BlogCategories";
import BlogListing from "@/components/blogs/BlogListing";
import NewsletterSection from "@/components/blogs/NewsletterSection";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Media & Talent in 2023",
    excerpt: "An analysis of emerging trends in the media and talent industries.",
    category: "Industry Trends",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating the Perfect Campaign",
    excerpt: "A look at our process for developing impactful brand campaigns.",
    category: "Behind-the-Scenes",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 3,
    title: "Spotlight: Rising Fashion Photographer Emily Chen",
    excerpt: "Featuring the work and journey of an emerging talent in fashion photography.",
    category: "Talent Features",
    date: "May 10, 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 4,
    title: "How AI is Transforming Content Creation",
    excerpt: "Exploring the impact of artificial intelligence on the creative industry.",
    category: "Industry Trends",
    date: "April 22, 2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 5,
    title: "The Art of Visual Storytelling",
    excerpt: "Techniques for creating compelling visual narratives for brands.",
    category: "Behind-the-Scenes",
    date: "April 5, 2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 6,
    title: "Meet the Creative Mind Behind Award-Winning Campaigns",
    excerpt: "An interview with our Creative Director on creating memorable brand experiences.",
    category: "Talent Features",
    date: "March 18, 2023",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  }
];

const categories = ["All", "Industry Trends", "Behind-the-Scenes", "Talent Features"];

const testimonials = [
  {
    id: 1,
    quote: "Working with Shoob has transformed our brand presence. Their innovative approach to content creation has given us a unique edge in the market.",
    author: "Sarah Johnson",
    position: "Marketing Director, FashionForward",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    quote: "The talent Shoob connected us with understood our vision perfectly. The resulting campaign exceeded our expectations and resonated deeply with our audience.",
    author: "Michael Chen",
    position: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 3,
    quote: "Shoob's creative direction breathed new life into our brand narrative. They're not just service providers; they're true partners in success.",
    author: "Aisha Patel",
    position: "Brand Manager, Elemental",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  },
  {
    id: 4,
    quote: "From concept to execution, Shoob's attention to detail and commitment to our vision was unparalleled. They've redefined what we thought was possible.",
    author: "David Rodriguez",
    position: "Creative Director, Impulse Studios",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  }
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Shoob Insights: Creativity, Trends & Stories"
        subtitle="Dive into our collection of articles exploring the world of media, talent, and creativity."
        // className="bg-gradient-to-br from-shoob-800 to-shoob-900 text-white"
        className="bg-gradient-to-br from-[rgba(226, 222, 222, 0.1)] to-[rgba(255,255,255,0.3)] text-white"
      />

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Obsession Reflected in Every Story" 
            subtitle="Hear what our clients have to say about working with us"
            align="center"
          />
          
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Blog Categories & Search */}
      <BlogCategories 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Blog Listing */}
      <BlogListing 
        posts={filteredPosts}
        categoryTitle={activeCategory === "All" ? "All Articles" : activeCategory}
        postCount={filteredPosts.length}
      />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Blogs;
