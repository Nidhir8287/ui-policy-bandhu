
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      tier: "Single Session",
      price: "$149",
      description: "Perfect for candidates with specific interview preparation needs.",
      features: [
        "60-minute one-on-one coaching session",
        "Personalized feedback",
        "Interview strategy development",
        "Common questions preparation",
        "24-hour email support"
      ],
      buttonLabel: "Get Started",
      isPopular: false
    },
    {
      tier: "Job Ready Package",
      price: "$449",
      description: "Our most popular package for comprehensive interview preparation.",
      features: [
        "3 one-hour coaching sessions",
        "2 mock interviews with feedback",
        "Resume and LinkedIn review",
        "Behavioral interview techniques",
        "Tailored preparation for target company",
        "60-day email support"
      ],
      buttonLabel: "Select Package",
      isPopular: true
    },
    {
      tier: "Executive Coaching",
      price: "$999",
      description: "For senior professionals and leadership positions.",
      features: [
        "5 one-hour coaching sessions",
        "3 mock interviews with detailed feedback",
        "Leadership narrative development",
        "Salary negotiation coaching",
        "Executive presence training",
        "90-day email support",
        "Priority scheduling"
      ],
      buttonLabel: "Contact Us",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that fits your needs. All plans come with our satisfaction guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonLabel={plan.buttonLabel}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        <div className="text-center mt-10 text-gray-600">
          Need a custom solution? <a href="#contact" className="text-primary-blue hover:underline">Contact us</a> for enterprise and group pricing.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
