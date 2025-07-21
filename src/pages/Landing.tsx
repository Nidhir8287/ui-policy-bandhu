import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";
import PolicyClarifier from "@/components/PolicyClarifier";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import WhyPolicyBandhu from "@/components/WhyPolicyBandhu";
import PolicyBandhuFlow from "@/components/PolicyBandhuFlow";
import RelatableComp from "@/components/RelatableComp";
import MeetTheFounders from "@/components/MeetTheFounders";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import Testimony from "@/components/Testimony";

const Landing = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sristi Srivastav",
      rating: 4,
      quote:
        "Finally, someone who explains my health insurance without trying to sell me something else. PolicyBadhu gave me straight answers in seconds.",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQFPZQ_hDIwJSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732553760781?e=1756339200&v=beta&t=W_sCvAKpyOsS5qu_AZWnroMz3qOVjZ9Pw9I0_SnlvLI",
    },
    {
      name: "Vimmi Priyadarshini",
      rating: 4.5,
      quote:
        "I was confused about my car insurance coverage. PolicyBadhu broke it down in simple terms - no jargon, just facts.",
      avatar:
        "https://media.licdn.com/dms/image/v2/C4E03AQFIDwqYR-xRyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654815774394?e=1756339200&v=beta&t=zA0a0Ah7pfHWKQLPuNssTBCEVXbmg2TWrjPfFkHJSyo",
    },
    {
      name: "Tanishq Saini",
      rating: 4,
      quote:
        "Best tool for understanding insurance policies. Quick, accurate, and completely unbiased. Exactly what I needed.",
      avatar:
        "https://media.licdn.com/dms/image/v2/C4D03AQHrzTku6I-yrQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1640623159014?e=1756339200&v=beta&t=-T2jLHhEYlTeeRl07zZlyNBSx-iKrece_f--lV3RD20",
    },
    {
      name: "David Park",
      rating: 5,
      quote:
        "PolicyBadhu helped me understand my life insurance policy in minutes. No sales pitch, just clear information.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      quote:
        "As someone who hates insurance complexity, PolicyBadhu is a lifesaver. Simple, fast, and trustworthy.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const usps = [
    {
      icon: (
        <Shield className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "Information, not advice",
      description: "Zero bias, pure facts",
    },
    {
      icon: (
        <Clock className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "To-the-point answers",
      description: "No fluff, just what you need",
    },
    {
      icon: (
        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "Simple, jargon-free language",
      description: "Clear explanations anyone can understand",
    },
    {
      icon: (
        <Users className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "Clarifies policy—never recommends",
      description: "We explain, you decide",
    },
    {
      icon: (
        <Shield className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "Stays strictly within policy text",
      description: "Only what's in your actual policy",
    },
    {
      icon: (
        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 stroke-mid hover:stroke-secondary transition-colors" />
      ),
      title: "No sales pitches",
      description: "No 'buy now,' affiliate links, or recommendations",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  
  const openChat = () => {
    setIsChatOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header openChat={() => setIsChatOpen(true)} />

      <HeroSection />

      <WhyPolicyBandhu />

      {/* how it works */}
      {/* <HowItWorks onChatClick={() => setIsChatOpen(true)} /> */}
      <PolicyBandhuFlow openChat={openChat} />

      {/* Pain points */}
      <RelatableComp openChat={openChat} />
      <MeetTheFounders />
      <FAQSection />

      {/* Customer Testimonials */}
      {/* <Testimony /> */}

      {/* Footer */}
      <Footer />

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <PolicyClarifier onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
