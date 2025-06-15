
import FeatureCard from "./FeatureCard";
import { Users, Calendar, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Coaches",
      description: "Our coaches have worked for top companies including Google, Amazon, and Microsoft and know what it takes to succeed."
    },
    {
      icon: Calendar,
      title: "Personalized Sessions",
      description: "Get one-on-one coaching sessions tailored to your specific industry, role, and experience level."
    },
    {
      icon: ArrowRight,
      title: "Mock Interviews",
      description: "Practice with realistic mock interviews and receive detailed feedback to improve your performance."
    },
    {
      icon: Users,
      title: "Resume Review",
      description: "Get expert feedback on your resume and cover letter to help you stand out from the competition."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work for you, with options available on evenings and weekends."
    },
    {
      icon: ArrowRight,
      title: "Industry Insights",
      description: "Learn insider tips and tricks for specific companies and roles from coaches with real experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose InterviewPro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive interview preparation services to help you land your dream job.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
