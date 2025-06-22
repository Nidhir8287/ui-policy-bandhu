import React from "react";

const steps = [
  {
    title: "Select Insurer",
    description: "Choose the specific insurer or policy name to focus your questions.",
  },
  {
    title: "Ask Questions",
    description: "Formulate your questions in plain English for clarity.",
  },
  {
    title: "Get Answers",
    description: "Receive instant, accurate answers to your queries.",
  },
  {
    title: "Unlock Clarity",
    description: "Pay once to access unlimited clarity on your policies.",
  },
];

export default function HowItWorks({ onChatClick }) {
  return (
    <div className="bg-[#c0d4e6] py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6 text-black">How PolicyBadhu Works?</h2>

      <div className="bg-[#1b3256] text-white rounded-md py-10 px-4 relative overflow-hidden">
        <div className="absolute text-[200px] text-[#c0d4e6] left-3 top-[40%] -translate-y-1/2 font-bold z-0">?</div>

        <div className="relative z-10 flex flex-col md:flex-row justify-around items-center  md:space-y-0 md:space-x-4 ml-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col w-40">
              <div className="w-2 h-2 bg-blue-400 rounded-full mb-2 -ml-[3px]" />
              <div className="flex gap-2 -mt-[7px]">
                <div className="h-40 w-0 border border-l border-white" />
                <div className="flex flex-col items-start">
                <h4 className="text-sm font-semibold mb-2 text-start">{step.title}</h4>
                <p className="text-xs text-start">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-blue-300 mb-4" />

        <button className="bg-white text-black font-semibold px-6 py-2 rounded-sm mt-2 mx-auto block" onClick={onChatClick}>
          CHAT NOW
        </button>
      </div>
    </div>
  );
}
