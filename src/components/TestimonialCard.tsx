
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xl font-semibold text-gray-500">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
