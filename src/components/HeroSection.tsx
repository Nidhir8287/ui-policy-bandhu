
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-white to-accent-light">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ace Your Next Interview With Professional Coaching
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Our expert coaches have helped thousands of candidates land their dream jobs at top companies. 
            Get personalized coaching tailored to your industry and role.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "#contact"}
            >
              Book Your Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-primary-blue text-primary-blue hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => window.location.href = "#testimonials"}
            >
              See Success Stories
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16 mx-auto max-w-3xl w-full p-6 bg-white rounded-2xl shadow-lg">
          <div className="text-center p-4 bg-blue-50 rounded-lg mb-4">
            <span className="font-semibold text-primary-dark">93% Success Rate</span> - Our clients consistently receive job offers
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="font-bold text-2xl text-primary-blue">2,500+</div>
              <div className="text-gray-600">Successful Interviews</div>
            </div>
            <div className="p-4">
              <div className="font-bold text-2xl text-primary-blue">50+</div>
              <div className="text-gray-600">Industry Experts</div>
            </div>
            <div className="p-4">
              <div className="font-bold text-2xl text-primary-blue">200+</div>
              <div className="text-gray-600">Companies Hired Our Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
