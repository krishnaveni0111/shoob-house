
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="text-2xl font-serif font-bold tracking-wider bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent"
    >
      SHOOB
    </Link>
  );
};

export default Logo;
