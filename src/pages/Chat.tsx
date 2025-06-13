
import PolicyClarifier from '@/components/PolicyClarifier';
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';

const Chat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container-custom section-padding px-4">
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4 text-high">
            Policy Clarifier Chat Widget
          </h1>
          <p className="text-lg md:text-xl text-mid max-w-2xl mx-auto px-4">
            An intelligent chat interface to help users understand and navigate company policies with ease.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 md:mb-12">
          <PolicyClarifier />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center">
          <div className="p-4 md:p-6 rounded-lg bg-card border border-border/50 card-shadow hover-scale animate-fade-in">
            <h3 className="font-semibold mb-2 text-high text-base md:text-lg">Smart Policy Selection</h3>
            <p className="text-sm text-mid">
              Choose from predefined policies or customize the list for your organization
            </p>
          </div>
          <div className="p-4 md:p-6 rounded-lg bg-card border border-border/50 card-shadow hover-scale animate-fade-in">
            <h3 className="font-semibold mb-2 text-high text-base md:text-lg">Natural Language Queries</h3>
            <p className="text-sm text-mid">
              Ask questions in plain English and get relevant, contextualized answers
            </p>
          </div>
          <div className="p-4 md:p-6 rounded-lg bg-card border border-border/50 card-shadow hover-scale animate-fade-in md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-2 text-high text-base md:text-lg">Interactive Flow</h3>
            <p className="text-sm text-mid">
              Seamless conversation flow with options to ask follow-ups or switch policies
            </p>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Chat;
