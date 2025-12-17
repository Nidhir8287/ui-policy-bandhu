import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, Users } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyPolicyBandhu />
      {/* how it works */}
      <PolicyBandhuFlow />
      {/* Pain points */}
      <RelatableComp />
      {/* Customer Testimonials */}
      <Testimony />
      <FAQSection />
      {/* <MeetTheFounders /> */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
