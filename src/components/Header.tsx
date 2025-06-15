
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary-blue">
          InterviewPro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary-blue">
            Features
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary-blue">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-blue">
            Pricing
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary-blue">
            About
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-primary-blue hover:bg-primary-dark text-white">
            Book a Session
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-blue py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-blue py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-primary-blue py-2"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-blue py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <Button 
              className="bg-primary-blue hover:bg-primary-dark text-white w-full"
              onClick={() => {
                window.location.href = "#contact";
                toggleMenu();
              }}
            >
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
