import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Disclaimer() {
    const navigate = useNavigate()
  return (
    <div className="bg-white px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <div className="relative flex items-center mb-2 h-12">
        <Button variant="outline" className="bg-white text-primary border-primary z-10 hover:bg-blue-400" onClick={()=>navigate("/")}>
          Back
        </Button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-center">
          Disclaimer
        </h1>
      </div>
      <div className="w-full border-b border mb-6" />

      <p className="mb-4 font-semibold">Effective Date: 01 June, 2025</p>

      <p className="mb-6">
        The information provided on the Policy Bandhu website and through our
        services is for general informational purposes only. While we strive to
        keep all content accurate and up-to-date, Policy Bandhu makes no
        warranties or representations of any kind regarding the completeness,
        accuracy, reliability, or suitability of the information provided.
      </p>

      {[
        {
          title: "1. Not Financial or Legal Advice",
          content: (
            <>
              <p className="mb-2">
                Policy Bandhu is not a licensed insurance company, financial
                advisor, or legal consultant. The content provided through our
                AI chat, guides, summaries, and breakdowns should not be
                interpreted as official insurance advice, legal guidance, or a
                recommendation to purchase or avoid any insurance product.
              </p>
              <p>
                Always consult a certified financial planner, legal advisor, or
                licensed insurance agent for advice specific to your financial
                or insurance needs.
              </p>
            </>
          ),
        },
        {
          title: "2. No Client Relationship",
          content:
            "Use of Policy Bandhu’s platform does not establish any advisor-client, agent-client, or legal relationship. Users remain fully responsible for their own decisions related to insurance purchases, claims, or legal matters.",
        },
        {
          title: "3. AI-Generated Responses",
          content: (
            <>
              <p className="mb-2">
                Our responses are generated using AI models based on publicly
                available policy documents and generalized policy knowledge.
                While we aim to provide simplified and helpful explanations,
                these responses may not reflect the most recent changes or
                terms in specific policies.
              </p>
              <p>
                We encourage users to verify any critical information directly
                with their insurance provider.
              </p>
            </>
          ),
        },
        {
          title: "4. Limitation of Liability",
          content:
            "Policy Bandhu shall not be held liable for any loss or damage arising from reliance on information obtained through our service. Users access and use the platform at their own risk.",
        },
        {
          title: "5. External Links",
          content:
            "Our website may contain links to third-party websites or resources. Policy Bandhu is not responsible for the content, accuracy, or reliability of any external sites linked from our platform.",
        },
        {
          title: "6. Contact Information",
          content: (
            <>
              For questions about this disclaimer or the use of our platform,
              contact us at:{" "}
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
        Thank you for using Policy Bandhu responsibly.
      </p>
      <div className="flex justify-center border-t py-5 mt-5">
        <Button variant="outline" className="z-10 text-white" onClick={()=>navigate("/")}>
          Close
        </Button>
      </div>
    </div>
  );
}
