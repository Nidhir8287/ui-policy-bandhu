
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Coaches
            </h2>
            <p className="text-gray-600 mb-6">
              At InterviewPro, we believe that the key to interview success lies in expert guidance and dedicated practice. Our coaches are industry veterans who have conducted hundreds of interviews and know exactly what hiring managers are looking for.
            </p>
            <p className="text-gray-600 mb-6">
              Each coach has a minimum of 10 years of professional experience in their respective fields and has undergone rigorous training in our coaching methodology. Many have worked as hiring managers at Fortune 500 companies and can provide invaluable insider perspectives.
            </p>
            <p className="text-gray-600 mb-8">
              We carefully match you with the coach who has the most relevant experience for your target role and industry, ensuring you get specialized guidance that generic interview prep services simply cannot provide.
            </p>
            <Button 
              className="bg-primary-blue hover:bg-primary-dark text-white"
              onClick={() => window.location.href = "#contact"}
            >
              Meet Our Coaching Team
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg h-64 md:h-72"></div>
              <div className="bg-gray-200 rounded-lg h-40 md:h-48"></div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-200 rounded-lg h-40 md:h-48"></div>
              <div className="bg-gray-200 rounded-lg h-64 md:h-72"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
