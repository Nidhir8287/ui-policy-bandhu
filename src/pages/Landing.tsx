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
  LinkedinIcon,
  Linkedin,
} from "lucide-react";
import PolicyClarifier from "@/components/PolicyClarifier";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import HowItWorks from "./HowItWorks";
import PainPoints from "./PainPoints";
import { Link } from "react-router-dom";
import ChatIcon from "@/icons/ChatIcon";
import HeroSection from "@/components/HeroSection";
import WhyPolicyBandhu from "@/components/WhyPolicyBandhu";
import PolicyBandhuFlow from "@/components/PolicyBandhuFlow";
import RelatableComp from "@/components/RelatableComp";

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

      {/* Founders */}
      <section className="section-padding px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-high">
            Meet the Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 md:mb-6 flex items-center justify-center card-shadow">
                {/* <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" /> */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFU6gly5Bitpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732460302348?e=1756339200&v=beta&t=MQJ1XWN1BXrkik0bqNWJutyeNmgVdv9amBnUDHMBxSU"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mb-3 md:mb-4 ">
                <div className="flex items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-high">
                    Nidhi Rajput
                  </h3>
                </div>
                <a
                  className="flex items-center cursor-pointer"
                  href="https://www.linkedin.com/in/nidhi-rajput-kumar/"
                  target="_blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    className="w-5 h-5"
                  />
                </a>
              </div>
              <p className="text-mid text-sm md:text-base leading-relaxed">
                Peace of mind shouldn’t come with pressure, paperwork, or
                persuasion. It should come with clarity.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 md:mb-6 flex items-center justify-center card-shadow">
                {/* <Users className="h-12 w-12 md:h-16 md:w-16 text-primary" /> */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQE0Cm5-mQ5t8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693666401042?e=1756339200&v=beta&t=Em3UA0vcH_7z17SS52W3Zt8tXJhC7XuzCbemRnZ2YuU"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mb-3 md:mb-4 ">
                <div className="flex items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-high">
                    Shikhar Srivastava
                  </h3>
                </div>
                <a
                  className="flex items-center cursor-pointer"
                  target="_blank"
                  href="https://www.linkedin.com/in/shikhar2srivastava2/"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    className="w-5 h-5"
                  />
                </a>
              </div>
              <p className="text-mid text-sm md:text-base leading-relaxed">
                I didn’t build Policy Bhanu to disrupt insurance. I built it so
                no daughter ever has to beg 7 strangers to understand how to
                protect her mother.
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
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4"
                  loading="lazy"
                />
                {/* <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div> */}

                <blockquote className="text-base md:text-lg mb-4 italic text-high leading-relaxed px-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <cite className="font-semibold text-high text-sm md:text-base">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>

            {/* <Button
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
            </Button> */}
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
                <Link
                  className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1"
                  to="./privacy-policy"
                >
                  Privacy Policy
                </Link>
                <div>
                  <Link
                    className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1"
                    to="./terms-and-services"
                  >
                    Terms & Condition
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1"
                    to="./disclaimer"
                  >
                    Disclaimer
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-mid hover:text-primary transition-colors min-h-[44px] block py-1"
                    to="./refund-policy"
                  >
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
                <div>care@policybadhu.info</div>
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
      {/* <div
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 hover:cursor-pointer"
        title="Have a question? Click to chat."
        aria-label="Open chat"
      >
        <ChatIcon />
      </div> */}

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
