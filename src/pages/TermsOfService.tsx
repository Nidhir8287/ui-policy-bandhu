import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
    const navigate = useNavigate()
  return (
    <div className="bg-white px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <div className="relative flex items-center mb-2 h-12">
        <Button variant="outline" className="bg-white text-primary border-primary z-10 hover:bg-blue-400" onClick={()=>navigate("/")}>
          Back
        </Button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-center">
          Terms and Condition
        </h1>
      </div>
      
      <div className="w-full border-b border mb-6" />

      <p className="mb-4 font-semibold">Effective Date: 01 June, 2025</p>

      <p className="mb-6">
        Welcome to Policy Bandhu! These Terms of Service ("Terms") govern your
        access to and use of the Policy Bandhu website, services, tools, and
        products (collectively, the "Service"). By accessing or using our
        Service, you agree to be bound by these Terms. If you do not agree to
        these Terms, please do not use our Service.
      </p>

      {[
        {
          title: "1. Overview of Policy Bandhu",
          content:
            "Policy Bandhu is a digital platform designed to help users understand insurance policies (especially term and health insurance) in simple, jargon-free language. Our service provides AI-powered chat-based explanations and guidance based on publicly available and pre-trained policy documents from various insurance providers.",
        },
        {
          title: "2. Eligibility",
          content:
            "To use the Service, you must be at least 18 years old and legally capable of entering into a binding agreement. By using Policy Bandhu, you represent and warrant that you meet these requirements.",
        },
        {
          title: "3. No Financial or Legal Advice",
          content:
            "The information provided by Policy Bandhu is for informational and educational purposes only. We do not sell insurance, nor do we offer financial or legal advice. Always consult with a licensed insurance advisor or legal professional before making policy-related decisions.",
        },
        {
          title: "4. Accuracy of Information",
          content:
            "While we aim to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of any content on the platform. Policy Bandhu is not liable for any actions taken based on the information provided.",
        },
        {
          title: "5. User Conduct",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>Attempt to reverse-engineer or misuse the platform</li>
              <li>Upload or input false or malicious information</li>
              <li>Use automated tools to access the service in a disruptive manner</li>
            </ul>
          ),
        },
        {
          title: "6. Payments",
          content:
            "Some features of Policy Bandhu may be available only through one-time payments. By making a payment, you agree to our pricing, refund, and cancellation policies, which will be clearly displayed during checkout. Payments are securely processed through our third-party payment partners.",
        },
        {
          title: "7. Privacy",
          content:
            "Your use of the Service is also governed by our Privacy Policy. Please review it carefully to understand how we collect, use, and protect your personal information.",
        },
        {
          title: "8. Intellectual Property",
          content:
            "All content, logos, designs, and intellectual property on the Policy Bandhu platform are the property of Policy Bandhu or its licensors. You may not use, reproduce, or distribute any part of our platform without prior written consent.",
        },
        {
          title: "9. Termination",
          content:
            "We reserve the right to suspend or terminate your access to the Service at any time for any reason, including violation of these Terms.",
        },
        {
          title: "10. Limitation of Liability",
          content:
            "Policy Bandhu is not responsible for any direct, indirect, incidental, or consequential damages arising out of your use of the Service. Use of the platform is at your own risk.",
        },
        {
          title: "11. Changes to Terms",
          content:
            "We may update these Terms from time to time. Any changes will be posted on this page with the revised date. Continued use of the Service after changes implies acceptance.",
        },
        {
          title: "12. Contact Us",
          content:
            "If you have any questions about these Terms, please contact us at: care@policybandhu.info",
        },
      ].map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <div className="text-sm">{section.content}</div>
        </div>
      ))}

      <p className="mt-10 font-medium">Thank you for using Policy Bandhu!</p>
      <div className="flex justify-center border-t py-5 mt-5">
        <Button variant="outline" className="z-10 text-white" onClick={()=>navigate("/")}>
          Close
        </Button>
      </div>
    </div>
  );
}
