
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      testimonial: "The coaching I received was invaluable. My coach identified blind spots in my interview responses and helped me refine my approach. I landed my dream job at Google after just 3 sessions!",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Amazon",
      testimonial: "I was struggling with behavioral interviews until I found InterviewPro. My coach helped me structure my responses using the STAR method, and I saw immediate improvements. Highly recommend!",
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      company: "Facebook",
      testimonial: "After being out of the job market for several years, I was nervous about interviewing again. My coach helped me regain my confidence and effectively communicate my experience. I got multiple offers!",
    },
    {
      name: "David Wilson",
      role: "Data Scientist",
      company: "Microsoft",
      testimonial: "The mock interviews felt just like the real thing. My coach's technical expertise and detailed feedback helped me identify key areas for improvement, which made all the difference.",
    },
    {
      name: "Aisha Rahman",
      role: "UX Designer",
      company: "Adobe",
      testimonial: "I was switching careers and worried about my portfolio presentation. My coach provided actionable insights that transformed how I presented my work. Worth every penny!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who have transformed their interview performance and landed their dream jobs.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      company={testimonial.company}
                      testimonial={testimonial.testimonial}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
