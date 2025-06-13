
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Shield, Clock, CheckCircle, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import PolicyClarifier from '@/components/PolicyClarifier';
import Header from '@/components/Header';

const Landing = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      quote: "Finally, someone who explains my health insurance without trying to sell me something else. PolicyBadhu gave me straight answers in seconds.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      rating: 5,
      quote: "I was confused about my car insurance coverage. PolicyBadhu broke it down in simple terms - no jargon, just facts.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      quote: "Best tool for understanding insurance policies. Quick, accurate, and completely unbiased. Exactly what I needed.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "David Park",
      rating: 5,
      quote: "PolicyBadhu helped me understand my life insurance policy in minutes. No sales pitch, just clear information.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      quote: "As someone who hates insurance complexity, PolicyBadhu is a lifesaver. Simple, fast, and trustworthy.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const usps = [
    {
      icon: <Shield className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "Information, not advice",
      description: "Zero bias, pure facts"
    },
    {
      icon: <Clock className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "To-the-point answers",
      description: "No fluff, just what you need"
    },
    {
      icon: <CheckCircle className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "Simple, jargon-free language",
      description: "Clear explanations anyone can understand"
    },
    {
      icon: <Users className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "Clarifies policy—never recommends",
      description: "We explain, you decide"
    },
    {
      icon: <Shield className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "Stays strictly within policy text",
      description: "Only what's in your actual policy"
    },
    {
      icon: <CheckCircle className="h-6 w-6 stroke-mid hover:stroke-secondary transition-colors" />,
      title: "No sales pitches",
      description: "No 'buy now,' affiliate links, or recommendations"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-padding px-4 text-center gradient-hero animate-fade-in">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            PolicyBadhu: Your Insurance, Simplified
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get clear, to-the-point answers about your policy—no jargon, no bias, no advice.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsChatOpen(true)}
            className="gradient-button text-lg px-8 py-4 h-auto text-white hover-scale"
          >
            Chat Now
          </Button>
        </div>
      </section>

      {/* About the Product */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-high">Why PolicyBadhu?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {usps.map((usp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover-scale bg-card border-border/50 card-shadow animate-fade-in">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{usp.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-high">{usp.title}</h3>
                      <p className="text-sm text-mid">{usp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center bg-primary/10 rounded-lg p-8 border border-border/50 card-shadow">
            <p className="text-lg mb-4 text-high">
              Trusted by <span className="font-bold text-primary">15,000+ users</span>, over{' '}
              <span className="font-bold text-primary">50,000 questions</span> answered in under 10 seconds.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="bg-card border border-border/50 rounded-lg p-6 hover-scale transition-transform cursor-pointer card-shadow">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 10s</div>
                <div className="text-sm text-mid">Average Response Time</div>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-6 hover-scale transition-transform cursor-pointer card-shadow">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-mid">Clarity Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding px-4 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-high">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center animate-fade-in">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-6 flex items-center justify-center card-shadow">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-high">Priya Sharma</h3>
              <p className="text-mid">
                Priya, ex-insurer analyst turned PM, built PolicyBadhu to cut through policy confusion.
              </p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-6 flex items-center justify-center card-shadow">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-high">Arjun Patel</h3>
              <p className="text-mid">
                Arjun, tech lead and customer advocate, ensures every answer is clear and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-high">What Our Users Are Saying</h2>
          
          <div className="relative">
            <Card className="p-8 bg-card border-border/50 card-shadow">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                
                <blockquote className="text-lg mb-4 italic text-high">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <cite className="font-semibold text-high">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-secondary hover-scale"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-secondary hover-scale"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-footer section-padding px-4 border-t border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">PolicyBadhu</div>
              <p className="text-sm text-mid">
                Your insurance, simplified.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-high">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-mid hover:text-primary transition-colors">Life Insurance</a></div>
                <div><a href="#" className="text-mid hover:text-primary transition-colors">Health Insurance</a></div>
                <div><a href="#" className="text-mid hover:text-primary transition-colors">Auto Insurance</a></div>
                <div><a href="#" className="text-mid hover:text-primary transition-colors">Travel Insurance</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-high">Contact</h4>
              <div className="text-sm text-mid space-y-2">
                <div>support@policybadhu.com</div>
                <div className="space-x-4">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8">
            <div className="mb-4 p-4 bg-card rounded-lg border-l-4 border-primary card-shadow">
              <p className="text-sm italic text-high">
                "PolicyBadhu's clarity engine is a game-changer for training new advisors."
              </p>
              <p className="text-sm font-semibold mt-2 text-high">— Rajesh Kumar, Insurance Expert</p>
            </div>
            
            <div className="text-center text-sm text-mid">
              ©2025 PolicyBadhu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-button shadow-lg animate-gentle-pulse z-50 text-white hover-scale"
        title="Have a question? Click to chat."
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <Button
              onClick={() => setIsChatOpen(false)}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 btn-secondary hover-scale"
            >
              ×
            </Button>
            <PolicyClarifier />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
