import React from 'react';
import Button from './ui/buttonV2';


const steps = [
    {
      step: "Step 1",
      title: "Policy Confusion",
      src: "/policyConfusion.png",
      description: "Initial state of confusion about insurance policies",
    },
    {
      step: "Step 2",
      title: "Select Policy",
      src: '/selectPolicy.png',
      description: "Choosing a specific policy for detailed information",
    },
    {
      step: "Step 3",
      title: "Open Chatbot",
      src: '/openChatbot.png',
      description: "Engaging with an AI chatbot for assistance",
    },
    {
      step: "Step 4",
      title: "Ask Questions",
      src: '/askQuestions.png',
      description: "Interacting with the chatbot for tailored answers",
    },
    {
      step: "Step 5",
      title: "Breakdown Received",
      src: '/breakdown.png',
      description: "Receiving a clear summary of policy coverage",
    },
    {
      step: "Step 6",
      title: "Unlock Unlimited Support",
      src: '/unlockSupport.png',
      description: "Unlocking unlimited support through a premium subscription.",
    },
  ];
  

export default function PolicyBandhuFlow({ openChat }) {
    return (
      <div className="bg-[#F3F3FF]">
        <div className='flex flex-col py-20 mx-28 text-center gap-5'>
        <h2 className="text-3xl font-semibold text-black text-center">
          How <span className="text-indigo-600 font-bold">PolicyBandhu</span> works?
        </h2>
        <div className='flex flex-col gap-16'>
            <div className="flex justify-between">
            {steps.slice(0,3).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                <span className='text-[#7979DC] pt-16 font-semibold'>{item.step}</span>
                <div key={index} className="w-44 flex flex-col items-center text-center gap-3">
                    <img src={item.src} />
                    <div>
                        <h4 className="font-semibold text-black text-start">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 text-start">{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
            </div>
            <div className="flex justify-between">
            {steps.slice(3).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <span className='text-[#7979DC] pt-16 font-semibold'>{item.step}</span>
                    <div key={index} className="w-44 flex flex-col items-center text-center gap-3">
                        <img src={item.src} />
                        <div className='w-60'>
                            <h4 className="font-semibold text-black text-start">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1 text-start">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className='mt-10'>
            <Button text="Chat Now" className='text-white bg-[#7979DC] rounded-full px-10 py-2 text-center' onClick={()=>openChat()} />
        </div>
        </div>
      </div>
    );
  };
