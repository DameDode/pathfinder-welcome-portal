
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-6 w-6 text-pathfinder-600"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
            <span className="text-lg font-bold text-pathfinder-800">PathFinder</span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-4 md:mb-0">
            <Link to="/" className="text-gray-600 hover:text-pathfinder-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-pathfinder-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-pathfinder-600">Contact</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-pathfinder-600">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-pathfinder-600">Terms of Service</Link>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PathFinder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
