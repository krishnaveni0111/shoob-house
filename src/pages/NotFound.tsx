
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-shoob-800 to-shoob-900 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <p className="text-2xl font-serif mb-8">Page Not Found</p>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-white text-shoob-700 hover:bg-shoob-100">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
