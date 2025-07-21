import Header from '@/components/Header';
import { Mail, MapPinned, Phone } from 'lucide-react';
import React from 'react';

function ContactUs() {
  return (
    <div className="bg-[#F3F3FF] min-h-screen">
      <Header />
      <div className="flex justify-center gap-24 items-center min-h-[calc(100vh-64px)] px-8">
        {/* Left section */}
        <div className="max-w-md">
          <div className="mb-6">
            <p className="text-sm text-black">How can we help you ?</p>
            <h1 className="text-4xl font-bold text-black mt-1">Contact us</h1>
          </div>

          <p className="text-black text-sm mb-10">
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-6 text-sm text-black">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPinned className="mt-1" />
              <p className="max-w-[18rem]">
                B 190, Amrit Puri, Block B, Amritpuri, East of Kailash, New Delhi, Delhi 110065
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="mt-1" />
              <div>
                <p>+91 93042 98996</p>
                <p>+91 99902 64869</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="mt-1" />
              <p className="text-[#FFA766]">care@policybandhu.info</p>
            </div>
          </div>
        </div>

        {/* Right section - image */}
        <div>
          <img src="/contact-us.png" alt="Contact us illustration" className="max-w-sm w-full" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
