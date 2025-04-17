
import { useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
  root?: Element | null;
  rootMargin?: string;
}

/**
 * Custom hook for enhanced scroll-triggered animations
 * @param options Configuration options for the animations
 * @returns A ref that can be attached to a container element
 */
const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    threshold = 0.1, 
    staggerDelay = 0.1, 
    root = null,
    rootMargin = "0px"
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("animate-in");
            
            // Handle staggered children if this is a stagger container
            if (target.classList.contains("stagger-container")) {
              const children = target.querySelectorAll(".stagger-item");
              children.forEach((child, index) => {
                // Apply progressive delay based on index
                const delay = `${index * staggerDelay}s`;
                (child as HTMLElement).style.transitionDelay = delay;
                child.classList.add("animate-in");
              });
            }

            // Handle parallax elements
            if (target.classList.contains("parallax-container")) {
              const parallaxItems = target.querySelectorAll(".parallax-item");
              const initParallax = () => {
                const containerTop = target.getBoundingClientRect().top;
                const containerHeight = target.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Calculate how far the container is through the viewport
                const scrollProgress = (windowHeight - containerTop) / (containerHeight + windowHeight);
                
                parallaxItems.forEach(item => {
                  const speed = parseFloat(item.getAttribute("data-speed") || "0.5");
                  const offset = (scrollProgress - 0.5) * 100 * speed;
                  (item as HTMLElement).style.transform = `translateY(${offset}px)`;
                });
              };
              
              // Initialize and add scroll listener for parallax effect
              initParallax();
              window.addEventListener("scroll", initParallax);
            }
          }
        });
      },
      { threshold, root, rootMargin }
    );

    // Observe all animate-on-scroll elements within the container
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".animate-on-scroll, .stagger-container, .parallax-container, .parallax-item");
      elements.forEach((el) => observer.observe(el));
    } else {
      // If no container ref is provided, observe all elements on the page
      const elements = document.querySelectorAll(".animate-on-scroll, .stagger-container, .parallax-container, .parallax-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".animate-on-scroll, .stagger-container, .parallax-container, .parallax-item");
        elements.forEach((el) => observer.unobserve(el));
      } else {
        const elements = document.querySelectorAll(".animate-on-scroll, .stagger-container, .parallax-container, .parallax-item");
        elements.forEach((el) => observer.unobserve(el));
      }
      
      // Clean up parallax scroll listeners
      window.removeEventListener("scroll", () => {});
    };
  }, [threshold, staggerDelay, root, rootMargin]);

  return containerRef;
};

export default useScrollAnimation;
