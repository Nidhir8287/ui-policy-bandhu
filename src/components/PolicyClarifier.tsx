import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, MessageCircle, ArrowLeft, RotateCcw, CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

type Screen = 'welcome' | 'askQuestion' | 'retrieveContext' | 'getAnswer' | 'followUp' | 'done';

interface ChatMessage {
  type: 'bot' | 'user';
  content: string;
}

const PolicyClarifier = () => {
  const { user } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [policyName, setPolicyName] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'bot', content: "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?" }
  ]);

  // Sample policies - can be customized later
  const samplePolicies = [
    'Privacy Policy',
    'Terms of Service',
    'Return Policy',
    'Data Protection Policy',
    'Cookie Policy',
    'Employee Handbook',
    'Safety Guidelines'
  ];

  const addMessage = (type: 'bot' | 'user', content: string) => {
    setMessages(prev => [...prev, { type, content }]);
  };

  const saveChatHistory = async (question: string, response: string) => {
    if (!user) return;

    try {
      await supabase
        .from('chat_history')
        .insert({
          user_id: user.id,
          message: question,
          response: response
        });
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  };

  const handlePolicySelect = (selectedPolicy: string) => {
    setPolicyName(selectedPolicy);
    addMessage('user', selectedPolicy);
    addMessage('bot', `Great—what would you like to know about ${selectedPolicy}?`);
    setCurrentScreen('askQuestion');
  };

  const handleQuestionSubmit = () => {
    if (!userQuestion.trim()) return;
    
    addMessage('user', userQuestion);
    addMessage('bot', "Let me search for relevant information...");
    setCurrentScreen('retrieveContext');
    
    // Simulate RetrieveContext action
    setTimeout(() => {
      addMessage('bot', "Now generating your answer...");
      setCurrentScreen('getAnswer');
      
      // Simulate GetAnswer action
      setTimeout(() => {
        // Mock answer - in real implementation this would come from the API
        const mockAnswer = `Based on the ${policyName}, here's what I found regarding "${userQuestion}": This policy outlines the specific guidelines and procedures that apply to your question. The relevant sections indicate that proper protocols must be followed, and all stakeholders should be informed of any changes or updates.`;
        
        setAnswer(mockAnswer);
        addMessage('bot', mockAnswer);
        
        // Save to chat history if user is logged in
        saveChatHistory(userQuestion, mockAnswer);
        
        setCurrentScreen('followUp');
      }, 2000);
    }, 1500);
  };

  const handleAskAnother = () => {
    setUserQuestion('');
    addMessage('bot', `What else would you like to know about ${policyName}?`);
    setCurrentScreen('askQuestion');
  };

  const handleChangePolicy = () => {
    setPolicyName('');
    setUserQuestion('');
    setAnswer('');
    addMessage('bot', "Which policy would you like to ask about?");
    setCurrentScreen('welcome');
  };

  const handleDone = () => {
    addMessage('bot', "Glad to help!");
    setCurrentScreen('done');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <div className="space-y-4">
            <Select value={policyName} onValueChange={handlePolicySelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a policy..." />
              </SelectTrigger>
              <SelectContent>
                {samplePolicies.map((policy) => (
                  <SelectItem key={policy} value={policy}>
                    {policy}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 'askQuestion':
        return (
          <div className="space-y-4">
            <Textarea
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="min-h-[100px] resize-none"
            />
            <div className="flex gap-2">
              <Button 
                onClick={handleQuestionSubmit}
                disabled={!userQuestion.trim()}
                className="flex-1"
              >
                Ask Question
              </Button>
              <Button 
                variant="outline" 
                onClick={handleChangePolicy}
                size="icon"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 'retrieveContext':
      case 'getAnswer':
        return (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              {currentScreen === 'retrieveContext' 
                ? 'Searching for relevant information...' 
                : 'Generating your answer...'}
            </p>
          </div>
        );

      case 'followUp':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-2">
              <Button onClick={handleAskAnother} variant="default">
                Ask another question
              </Button>
              <Button onClick={handleChangePolicy} variant="outline">
                Change policy
              </Button>
              <Button onClick={handleDone} variant="secondary">
                Done
              </Button>
            </div>
          </div>
        );

      case 'done':
        return (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <p className="text-center text-muted-foreground">
              Thank you for using Policy Clarifier!
            </p>
            <Button onClick={() => {
              setMessages([{ type: 'bot', content: "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?" }]);
              setPolicyName('');
              setUserQuestion('');
              setAnswer('');
              setCurrentScreen('welcome');
            }} variant="outline">
              Start Over
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          Policy Clarifier
          {user && (
            <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded-full ml-auto">
              History Saved
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 border-b">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Screen Interface */}
        <div className="p-4">
          {renderCurrentScreen()}
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyClarifier;
