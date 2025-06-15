
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonLabel: string;
}

const PricingCard = ({ 
  tier, 
  price, 
  description, 
  features, 
  isPopular = false,
  buttonLabel 
}: PricingCardProps) => {
  return (
    <div className={`
      bg-white rounded-xl overflow-hidden shadow-sm border 
      ${isPopular ? 'border-primary-blue shadow-md relative' : 'border-gray-100'}
    `}>
      {isPopular && (
        <div className="bg-primary-blue text-white py-1 px-4 text-xs font-semibold uppercase text-center">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tier}</h3>
        <div className="mb-4">
          <span className="text-3xl md:text-4xl font-bold text-gray-900">{price}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-primary-blue shrink-0 mr-2 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${isPopular 
            ? 'bg-primary-blue hover:bg-primary-dark text-white' 
            : 'bg-white border border-primary-blue text-primary-blue hover:bg-blue-50'}`}
          onClick={() => window.location.href = "#contact"}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
