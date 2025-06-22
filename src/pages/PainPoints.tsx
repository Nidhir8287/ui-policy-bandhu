import React from "react";

const painPoints = [
  {
    title: "Misselling/Hidden Terms",
    description:
      "Over 30% of complaints arise from mis-selling or hidden policy terms.",
    icon: "public/confusion.png",
  },
  {
    title: "Uninsured Population",
    description:
      "Around 40 crore Indians (~30%) remain uninsured, facing catastrophic expenses.",
    icon: "public/high-risk.png",
  },
  {
    title: "Claim Processing",
    description:
      "43% of individuals face difficulties in processing their insurance claims.",
    icon: "public/process.png",
  },
  {
    title: "Confusing Policy Terms",
    description:
      "67% of people find the terms & conditions of policies to be confusing.",
    icon: "public/confused.png",
  },
  {
    title: "Reliance on Others",
    description:
      "58% of individuals depend on others when selecting their health insurance plans.",
    icon: "public/certainty.png",
  },
];

export default function PainPoints() {
  return (
    <div className="bg-[#c0d4e6] py-10 px-4 text-center text-black">
      <h2 className="text-2xl font-bold mb-10">
        You’re Not Alone If This Sounds Familiar…
      </h2>

      <div className="bg-[#1b3256] text-white rounded-md py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {painPoints.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-2">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
            <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
            <p className="text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
