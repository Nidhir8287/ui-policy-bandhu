import React, { useState } from "react";
import { postFormData } from '../../api/payment'
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    setSubmitting(true)
    try {
      e.preventDefault();
      await postFormData(formData)
      navigate('/payment')
    } catch (error) {
      console.error('something went wrong')
      toast({
        title: "Error",
        description: "Unable to send form data. Please try again!",
      });
    }
    setSubmitting(false)
  };

  return (
    <div className="flex items-center justify-center bg-[#F3F3FF]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md border border-neutral-200"
      >
        <h2 className="text-xl font-bold mb-6 text-black">Fill in your details</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Upload screenshot</label>
        <input
          name="file"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full mb-4 p-2.5 rounded-xl bg-[#FFA766] file:cursor-pointer file:border-0 file:bg-[#FFA766] file:text-black"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full mb-4 p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black resize-none"
        />

        {!submitting ? <button
          type="submit"
          className="bg-[#4B1D52] text-white py-2 px-6 rounded-full w-full"
        >
          Send
        </button> : 
          <div>
            <Loader2 className="animate-spin"/>
          </div>
        }
      </form>
    </div>
  );
};

export default ContactForm;
