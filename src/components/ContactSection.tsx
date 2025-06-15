
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interviewDate: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Show success notification
    toast({
      title: "Request Received",
      description: "We'll contact you within 24 hours to schedule your session.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interviewDate: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-accent-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Session
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and one of our expert coaches will contact you to schedule your free consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="interviewDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Interview Date (if scheduled)
                  </label>
                  <input
                    type="date"
                    id="interviewDate"
                    name="interviewDate"
                    value={formData.interviewDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Single Session">Single Session</option>
                  <option value="Job Ready Package">Job Ready Package</option>
                  <option value="Executive Coaching">Executive Coaching</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Tell us about the role you're interviewing for and any specific areas you'd like help with."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary-blue hover:bg-primary-dark text-white font-medium py-3"
              >
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
