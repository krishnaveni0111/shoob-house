import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const particleCount = 20;
  const generateParticles = () =>
    Array.from({ length: particleCount }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.3;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      return (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity,
            animation: `float ${duration}s infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });

  return (
    <section className="py-20 bg-[#3c096c] text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0">{generateParticles()}</div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll reveal-up">
          Ready to Take Your Career to New Heights?
        </h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto animate-on-scroll fade-up delay-200">
          Whether you're looking to join our roster or find the perfect talent for your next project, we're here to help.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="animate-on-scroll flip-x delay-400">
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3c096c] btn-glow w-full sm:w-auto"
              >
                Get Discovered
              </Button>
            </Link>
          </div>
          <div className="animate-on-scroll flip-x delay-600">
            <Link to="/contact">
              <Button className="bg-white text-[#3c096c] hover:bg-purple-50 btn-glow w-full sm:w-auto">
                Find Talent
              </Button>
            </Link>
          </div>
        </div>

        {/* Metrics Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { count: "500+", label: "Talents Represented", delay: 700 },
            { count: "50+", label: "Countries", delay: 800 },
            { count: "1000+", label: "Projects Completed", delay: 900 },
            { count: "100%", label: "Client Satisfaction", delay: 1000 },
          ].map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll fade-up delay-${item.delay}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold">{item.count}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
