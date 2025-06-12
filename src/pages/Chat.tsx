
import PolicyClarifier from '@/components/PolicyClarifier';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Policy Clarifier Chat Widget
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An intelligent chat interface to help users understand and navigate company policies with ease.
          </p>
        </div>
        
        <div className="flex justify-center">
          <PolicyClarifier />
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">Smart Policy Selection</h3>
            <p className="text-sm text-muted-foreground">
              Choose from predefined policies or customize the list for your organization
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">Natural Language Queries</h3>
            <p className="text-sm text-muted-foreground">
              Ask questions in plain English and get relevant, contextualized answers
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">Interactive Flow</h3>
            <p className="text-sm text-muted-foreground">
              Seamless conversation flow with options to ask follow-ups or switch policies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
