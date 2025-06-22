import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
    const navigate = useNavigate()
  return (
    <div className="bg-white px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <div className="relative flex items-center mb-2 h-12">
        <Button variant="outline" className="bg-white text-primary border-primary z-10 hover:bg-blue-400" onClick={()=>navigate("/")}>
          Back
        </Button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-center">
          Privacy Policy
        </h1>
      </div>
      <div className="w-full border-b border mb-6" />

      <p className="mb-4 font-semibold">Effective Date: 01 June, 2025</p>

      <p className="mb-6">
        At Policy Bandhu, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, share, and protect your information when
        you use our website and services (collectively referred to as the
        "Service").
      </p>

      {[
        {
          title: "1. Information We Collect",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email address, and
                contact details (only when you provide them voluntarily).
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you interact
                with our platform (e.g., page views, chat interactions).
              </li>
              <li>
                <strong>Policy-related Queries:</strong> Questions you ask via
                chat to help us improve our AI responses. These are anonymized
                unless linked with personal info.
              </li>
            </ul>
          ),
        },
        {
          title: "2. How We Use Your Information",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve our services</li>
              <li>Respond to your queries</li>
              <li>Personalize your experience</li>
              <li>Ensure security and prevent misuse</li>
              <li>
                Communicate important updates or support information (only if
                you’ve opted in)
              </li>
            </ul>
          ),
        },
        {
          title: "3. Data Sharing & Disclosure",
          content: (
            <>
              <p className="mb-2">
                We do <strong>not</strong> sell, rent, or trade your personal
                information.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Trusted third-party service providers</strong> (e.g.,
                  cloud hosting, analytics) under strict confidentiality
                  agreements
                </li>
                <li>
                  <strong>Law enforcement</strong> if required by law
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Data Security",
          content:
            "We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "5. Cookies & Tracking Technologies",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>Understand site usage</li>
              <li>Improve website performance</li>
              <li>Offer a smoother user experience</li>
            </ul>
          ),
        },
        {
          title: "6. Your Rights & Choices",
          content:
            "You have the right to access or correct your personal data, request deletion of your data, and opt out of non-essential communication. To make such requests, contact us at care@policybandhu.info",
        },
        {
          title: "7. Data Retention",
          content:
            "We retain your information only as long as needed to fulfill the purposes stated in this policy, or as required by law.",
        },
        {
          title: "8. Third-Party Links",
          content:
            "Our site may contain links to external websites. We are not responsible for the privacy practices of those sites.",
        },
        {
          title: "9. Children's Privacy",
          content:
            "Policy Bandhu is not intended for children under 18. We do not knowingly collect data from minors.",
        },
        {
          title: "10. Changes to This Policy",
          content:
            "We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised date. Continued use of our Service implies your acceptance of the updated policy.",
        },
        {
          title: "11. Contact Us",
          content:
            "If you have any questions or concerns about this Privacy Policy, you can reach us at: 📧 care@policybandhu.info",
        },
      ].map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <div className="text-sm">{section.content}</div>
        </div>
      ))}

      <p className="mt-10 font-medium">Thank you for trusting Policy Bandhu.</p>
      <div className="flex justify-center border-t py-5 mt-5">
        <Button variant="outline" className="z-10 text-white" onClick={()=>navigate("/")}>
          Close
        </Button>
      </div>
    </div>
  );
}
