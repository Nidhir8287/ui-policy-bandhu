import React, { useState } from "react";
import { postFormData } from '../../api/payment';
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = ({ onSuccess }) => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      if (formData.file) data.append("screenshot", formData.file);

      await postFormData(data);

      toast({
        title: "Success",
        description: "Payment proof submitted successfully!",
      });

      if (onSuccess) onSuccess(); // e.g., invalidate `userProfile`
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        title: "Error",
        description: "Unable to send form data. Please try again!",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#F3F3FF]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md border border-neutral-200"
      >
        <h2 className="text-xl font-bold mb-6 text-black">Fill in your details</h2>

        {["name", "email", "phone"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              name={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              value={formData[field]}
              onChange={onInputChange}
              className="w-full p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black"
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload screenshot</label>
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="w-full p-2.5 rounded-xl bg-[#FFA766] file:cursor-pointer file:border-0 file:bg-[#FFA766] file:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={onInputChange}
            rows={3}
            className="w-full p-2.5 rounded-xl bg-[#FFA766] placeholder:text-black resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-[#4B1D52] text-white py-2 px-6 rounded-full w-full flex justify-center items-center"
        >
          {submitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
