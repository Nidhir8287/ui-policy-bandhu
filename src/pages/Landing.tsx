import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import PolicyClarifier from "@/components/PolicyClarifier";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import HowItWorks from "./HowItWorks";
import PainPoints from "./PainPoints";
import { Link } from "react-router-dom";
import ChatIcon from "@/icons/ChatIcon";

const Landing = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      quote:
        "Finally, someone who explains my health insurance without trying to sell me something else. PolicyBadhu gave me straight answers in seconds.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      rating: 5,
      quote:
        "I was confused about my car insurance coverage. PolicyBadhu broke it down in simple terms - no jargon, just facts.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      quote:
        "Best tool for understanding insurance policies. Quick, accurate, and completely unbiased. Exactly what I needed.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
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

  return (
    <div className="min-h-screen bg-background">
      <Header openChat={()=>setIsChatOpen(true)} />

      {/* Hero Section */}
      <section className="section-padding px-4 bg-[#C8D2DE]">
        {/* <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            PolicyBadhu: Your Insurance, Simplified
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get clear, to-the-point answers about your policy—no jargon, no bias, no advice.
          </p> */}
        {/* <Button 
            size="lg" 
            onClick={() => setIsChatOpen(true)}
            className="gradient-button text-lg px-6 md:px-8 py-3 md:py-4 h-auto text-white hover-scale min-h-[44px] w-full sm:w-auto"
          >
            Chat Now
          </Button> */}
        {/* </div> */}
        <div className="flex justify-between mx-5">
          <div className="flex flex-col gap-10">
            <div className="text-center flex flex-col gap-5 mx-5">
              <div className="text-black font-bold text-5xl">
                Because Trust Starts with Transparency
              </div>
              <div className="text-black">
                Enter your policy name, and our AI delivers a straightforward,
                jargon-free summary of your coverage, highlighting key benefits,
                tell what’s truly covered, what’s quietly excluded, and what you
                should care about.
              </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-8">
              <div className="text-center text-black font-semibold">
                Ask Bandhu, Let the truth behind your policy—unlocked
              </div>
              <div className="bg-[#213559] px-3 py-2 rounded-md">
                <button onClick={() => setIsChatOpen(true)}>
                  CHAT NOW
                </button>
              </div>
            </div>
          </div>
          <div className="border border-blue-50 rounded-lg">
            <img src="public/mobile-photo.png" className="w-full h-full object-cover" alt="Mobile" />
          </div>
        </div>
      </section>

      {/* About the Product */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-high">
            Why PolicyBadhu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {usps.map((usp, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 hover:shadow-lg transition-all hover-scale bg-card border-border/50 card-shadow animate-fade-in"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="text-primary mt-1 flex-shrink-0">
                      {usp.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-high text-base md:text-lg">
                        {usp.title}
                      </h3>
                      <p className="text-sm text-mid leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          
        </div>
      </section>
      
      {/* how it works */}
      <HowItWorks onChatClick={() => setIsChatOpen(true)} />
        
      {/* Pain points */}
      <PainPoints />

      {/* Founders */}
      <section className="section-padding px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-high">
            Meet the Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 md:mb-6 flex items-center justify-center card-shadow">
                <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-high">
                Priya Sharma
              </h3>
              <p className="text-mid text-sm md:text-base leading-relaxed">
                Priya, ex-insurer analyst turned PM, built PolicyBadhu to cut
                through policy confusion.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 md:mb-6 flex items-center justify-center card-shadow">
                <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-high">
                Arjun Patel
              </h3>
              <p className="text-mid text-sm md:text-base leading-relaxed">
                Arjun, tech lead and customer advocate, ensures every answer is
                clear and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-high">
            What Our Users Are Saying
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 bg-card border-border/50 card-shadow">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4"
                  loading="lazy"
                />

                <blockquote className="text-base md:text-lg mb-4 italic text-high leading-relaxed px-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <cite className="font-semibold text-high text-sm md:text-base">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 btn-secondary hover-scale min-h-[44px] min-w-[44px]"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 btn-secondary hover-scale min-h-[44px] min-w-[44px]"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer section-padding px-4 border-t border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                PolicyBadhu
              </div>
              <p className="text-sm text-mid">Your insurance, simplified.</p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-high">
                Quick Links
              </h4>
              <div className="space-y-2 text-sm">
                <Link className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1" to="./privacy-policy">
                    Privacy Policy
                </Link>
                <div>
                <Link className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1" to="./terms-and-services">
                    Terms & Condition
                </Link>
                </div>
                <div>
                <Link className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1" to="./disclaimer">
                    Disclaimer
                </Link>
                </div>
                <div>
                <Link className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1" to="./refund-policy">
                    Refund Policy
                </Link>
                </div>
                {/* <div>
                  <a
                    href="#"
                    className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1"
                  >
                    Travel Insurance
                  </a>
                </div> */}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-high">Contact</h4>
              <div className="text-sm text-mid space-y-2">
                <div>support@policybadhu.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 md:pt-8">
            {/* <div className="mb-4 p-4 bg-card rounded-lg border-l-4 border-primary card-shadow">
              <p className="text-sm italic text-high leading-relaxed">
                "PolicyBadhu's clarity engine is a game-changer for training new
                advisors."
              </p>
              <p className="text-sm font-semibold mt-2 text-high">
                — Rajesh Kumar, Insurance Expert
              </p>
            </div> */}

            <div className="text-center text-sm text-mid">
              ©2025 PolicyBadhu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 "
        title="Have a question? Click to chat."
        aria-label="Open chat"
      >
        <ChatIcon className="w-6 h-6 md:w-8 md:h-8" />
      </div>


      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* <Button
              onClick={() => setIsChatOpen(false)}
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 z-10 btn-secondary hover-scale min-h-[44px] min-w-[44px]"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button> */}
            <PolicyClarifier onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}

      {/* <BackToTop /> */}
    </div>
  );
};

export default Landing;
