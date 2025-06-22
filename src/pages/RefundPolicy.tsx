import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RefundPolicy() {
    const navigate = useNavigate()
  return (
    <div className="bg-white px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <div className="relative flex items-center mb-2 h-12">
        <Button variant="outline" className="bg-white text-primary border-primary z-10 hover:bg-blue-400" onClick={()=>navigate("/")}>
          Back
        </Button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-center">
          Refund Policy
        </h1>
      </div>
      
      <div className="w-full border-b border mb-6" />

      <p className="mb-4 font-semibold">Effective Date: 01 June, 2025</p>

      <p className="mb-6">
        Thank you for choosing Policy Bandhu. We aim to ensure complete
        satisfaction with your experience. This Refund and Cancellation Policy
        outlines the conditions under which refunds and cancellations are
        processed.
      </p>

      {[
        {
          title: "1. One-Time Payments",
          content:
            "Policy Bandhu operates on a one-time payment model for accessing our AI-based insurance explanation tools. Once a payment is completed, users are granted full access to the selected features and services.",
        },
        {
          title: "2. Refund Eligibility",
          content: (
            <>
              <p className="mb-2">
                We offer a <strong>7-day refund window</strong> for users who
                meet the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  The request is made within <strong>7 calendar days</strong> of
                  the original payment date.
                </li>
                <li>
                  The user has not excessively used or misused the service (e.g.,
                  automated scraping, system abuse).
                </li>
                <li>
                  The refund request includes a clear explanation of
                  dissatisfaction or technical issues faced.
                </li>
              </ul>
              <p className="mt-2">
                To request a refund, please email us at{" "}
                <a
                  href="mailto:care@policybandhu.info"
                  className="text-blue-600 underline"
                >
                  care@policybandhu.info
                </a>{" "}
                with your payment details and reason for the request.
              </p>
            </>
          ),
        },
        {
          title: "3. Non-Refundable Scenarios",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>The refund request is made after 7 days of purchase.</li>
              <li>The user has significantly used the service.</li>
              <li>
                The dissatisfaction is not related to product performance but
                due to a change of mind.
              </li>
              <li>
                The account was found to be in violation of our Terms of
                Service.
              </li>
            </ul>
          ),
        },
        {
          title: "4. Cancellation Policy",
          content:
            "As we do not operate on a recurring subscription model, cancellation is not applicable to one-time services already delivered. If we introduce any subscription-based services in the future, users will be able to cancel via account settings or by contacting support.",
        },
        {
          title: "5. Processing Refunds",
          content:
            "Approved refunds will be processed to the original payment method within 7–10 business days. Delays may vary based on your bank or payment provider.",
        },
        {
          title: "6. Contact Information",
          content: (
            <>
              If you have questions regarding this policy, please contact:
              <br />
              📧 Email:{" "}
              <a
                href="mailto:care@policybandhu.info"
                className="text-blue-600 underline"
              >
                care@policybandhu.info
              </a>
            </>
          ),
        },
      ].map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <div className="text-sm">{section.content}</div>
        </div>
      ))}

      <p className="mt-10 font-medium">
        Thank you for trusting Policy Bandhu. We’re here to help simplify your
        insurance journey.
      </p>
      <div className="flex justify-center border-t py-5 mt-5">
        <Button variant="outline" className="z-10 text-white" onClick={()=>navigate("/")}>
          Close
        </Button>
      </div>
    </div>
  );
}
