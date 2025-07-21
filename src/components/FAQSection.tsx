import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

function FAQSection() {
    const [open, setOpen] = useState(null)
    const accordions = [
        {
            question: 'What is PolicyBandhu ?',
            ans: 'PolicyBandhu is an AI-powered platform designed to simplify the complexities of health insurance policies by breaking down technical jargon into simple, everyday language.'
        },
        {
            question: 'How can PolicyBandhu assist me ?',
            ans: 'We help you understand your health insurance policy better by answering your questions and explaining the terms in clear, easy-to-understand language.'
        },
        {
            question: "There are already many players assisting with policy. Why should I use PolicyBandhu ?",
            ans: 'Unlike other players, PolicyBandhu is completely unbiased—we do not sell any policies and do not earn commissions from insurance companies. Our sole focus is to help you clarify your policy details without any bias.'
        },
        {
            question: 'Can it help me with choosing my policy ?',
            ans: 'PolicyBandhu does not suggest or choose policies for you. We are here to help you understand and clarify the details of your chosen policy. For policy selection, you can refer to specialized platforms or agents.'
        },
        {
            question: 'Is it forever free ?',
            ans: 'You can ask up to 10 questions for free. After that, you can pay ₹49 for unlimited queries.'
        },
        {
            question: 'How does the subscription process work ?',
            ans: 'To get unlimited queries, simply pay for the subscription by scanning the QR code and upload payment screenshot on the payment page. After that, please wait up to 4 hours for your payment to be approved by our team. Our payment integration will be available soon for a faster process.'
        }
    ]
    const onAccordClick = (index) => {
        if (open !== index) {
            setOpen(index)
        } else {
            setOpen(null)
        }
    }
  return (
    <div className='p-20 flex flex-col gap-5 bg-white'>
        <div className='text-4xl text-black font-bold mb-10 text-center'>Frequently Asked Questions</div>
        <div className='flex flex-col gap-5 px-36'>
            {
                accordions.map(({ question, ans }, index) => (
                    <div className='border-b flex pb-3 flex-col gap-2 w-full' onClick={()=>onAccordClick(index)}>
                        <div className='flex justify-between'>
                            <span className='text-black font-semibold'>{question}</span>
                            {open !== index ? <ChevronDown color='black' /> : <ChevronUp color='black' />}
                        </div>
                        {
                            open === index && (
                                <div className='text-black'>
                                    {ans}
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQSection