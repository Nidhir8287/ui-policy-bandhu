
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Shield, Clock, CheckCircle, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import PolicyClarifier from '@/components/PolicyClarifier';

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
      icon: <Shield className="h-6 w-6" />,
      title: "Information, not advice",
      description: "Zero bias, pure facts"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "To-the-point answers",
      description: "No fluff, just what you need"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Simple, jargon-free language",
      description: "Clear explanations anyone can understand"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clarifies policy—never recommends",
      description: "We explain, you decide"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Stays strictly within policy text",
      description: "Only what's in your actual policy"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
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
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">PolicyBadhu</div>
          <Button onClick={() => setIsChatOpen(true)} className="bg-primary hover:bg-primary/90">
            Chat Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            PolicyBadhu: Your Insurance, Simplified
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get clear, to-the-point answers about your policy—no jargon, no bias, no advice.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsChatOpen(true)}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto"
          >
            Chat Now
          </Button>
        </div>
      </section>

      {/* About the Product */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why PolicyBadhu?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {usps.map((usp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{usp.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{usp.title}</h3>
                      <p className="text-sm text-muted-foreground">{usp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <p className="text-lg mb-4">
              Trusted by <span className="font-bold text-primary">15,000+ users</span>, over{' '}
              <span className="font-bold text-primary">50,000 questions</span> answered in under 10 seconds.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="bg-background rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 10s</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="bg-background rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Clarity Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Priya Sharma</h3>
              <p className="text-muted-foreground">
                Priya, ex-insurer analyst turned PM, built PolicyBadhu to cut through policy confusion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Arjun Patel</h3>
              <p className="text-muted-foreground">
                Arjun, tech lead and customer advocate, ensures every answer is clear and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Are Saying</h2>
          
          <div className="relative">
            <Card className="p-8">
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
                
                <blockquote className="text-lg mb-4 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <cite className="font-semibold">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">PolicyBadhu</div>
              <p className="text-sm text-muted-foreground">
                Your insurance, simplified.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-muted-foreground hover:text-primary">Life Insurance</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary">Health Insurance</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary">Auto Insurance</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary">Travel Insurance</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>support@policybadhu.com</div>
                <div className="space-x-4">
                  <a href="#" className="hover:text-primary">Privacy Policy</a>
                  <a href="#" className="hover:text-primary">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8">
            <div className="mb-4 p-4 bg-background rounded-lg border-l-4 border-primary">
              <p className="text-sm italic">
                "PolicyBadhu's clarity engine is a game-changer for training new advisors."
              </p>
              <p className="text-sm font-semibold mt-2">— Rajesh Kumar, Insurance Expert</p>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              ©2025 PolicyBadhu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg animate-pulse z-50"
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
              className="absolute top-4 right-4 z-10 bg-background"
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
