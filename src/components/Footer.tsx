
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InterviewPro</h3>
            <p className="text-gray-400">
              Professional interview coaching to help you land your dream job.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Interview Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@interviewpro.com</li>
              <li>(555) 123-4567</li>
              <li>123 Interview Street</li>
              <li>San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InterviewPro. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
