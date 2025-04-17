
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const TestimonialCarousel = ({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000, 
  className 
}: TestimonialCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };
  
  // Auto-advance slides if autoPlay is true
  useEffect(() => {
    if (autoPlay) {
      timeoutRef.current = setInterval(nextSlide, interval);
      
      return () => {
        if (timeoutRef.current) {
          clearInterval(timeoutRef.current);
        }
      };
    }
  }, [autoPlay, interval]);
  
  return (
    <div ref={carouselRef} className={cn("relative", className)}>
      <div className="max-w-4xl mx-auto testimonial-card p-6 md:p-8 overflow-hidden relative">
        <div className="absolute top-4 right-4 opacity-20">
          <Quote size={32} className="text-purple-600 dark:text-purple-400" />
        </div>
        
        {/* Testimonial Content */}
        <div className="min-h-[200px] flex flex-col items-center">
          <div 
            className={cn(
              "text-md md:text-lg text-center leading-relaxed italic mb-6",
              isAnimating ? "opacity-0" : "opacity-100 animate-slide-right"
            )}
            style={{ transitionDuration: '500ms' }}
          >
            "{testimonials[currentIndex].quote}"
          </div>
          
          <div 
            className={cn(
              "flex items-center mt-auto",
              isAnimating ? "opacity-0" : "opacity-100 animate-slide-right"
            )}
            style={{ transitionDuration: '500ms', transitionDelay: '200ms' }}
          >
            <div className="flex-shrink-0 mr-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                className="h-10 w-10 rounded-full object-cover border-2 border-purple-300 dark:border-purple-700"
              />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-foreground text-sm">{testimonials[currentIndex].author}</h4>
              <p className="text-xs text-muted-foreground">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide} 
            className="rounded-full border-purple-200 dark:border-purple-700 hover:border-[#ad8cf6] hover:bg-[#ad8cf6] hover:text-white dark:hover:border-[#ad8cf6]"
          >
            <ArrowLeft size={16} />
          </Button>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-[#ad8cf6] dark:bg-[#ad8cf6] w-4"
                    : "bg-purple-300 dark:bg-purple-700"
                )}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide} 
            className="rounded-full border-purple-200 dark:border-purple-700 hover:border-[#ad8cf6] hover:bg-[#ad8cf6] hover:text-white dark:hover:border-[#ad8cf6]"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
