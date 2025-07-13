import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { postMessage } from "../../api/postChat";
import { getConversations } from "../../api/getPrevChat";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  MessageCircle,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  X,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";

type Screen =
  | "welcome"
  | "askQuestion"
  | "retrieveContext"
  | "getAnswer"
  | "followUp"
  | "done";

interface ChatMessage {
  type: "bot" | "user";
  content: string;
}

const PolicyClarifier = ({ onClose }: { onClose ?: () => void }) => {
  const { user } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [policyName, setPolicyName] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [suggestions, setSuggestions] = useState([])
  // @ts-ignore
  const windowRef = useRef(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      content:
        "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?",
    },
  ]);

  const queryClient = useQueryClient();
  

  const postChat = useMutation({
    mutationFn: postMessage,
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: data.data.bot_reply.content
            .replace(/#\^\^#.*?#\^#\^#/gs, '')    // remove suggestions
            .replace(/#\^\^\^#.*?#\^\^\^#/gs, '') // remove links
            .replaceAll('**', '')                // remove all ** markers
            .trim()
        },
      ]);
      const suggestions = [...data.data.bot_reply.content.matchAll(/#\^\^#(.*?)#\^#\^#/gs)].map(m => m[1].trim())
      setSuggestions(suggestions)
      queryClient.invalidateQueries({ queryKey: ["postMessage"] });
    },
  });

  const getPrevChat = useMutation({
    mutationFn: getConversations,
    onSuccess: (data) => {
      const earlierMessages = data.data[0].messages.map((message) => ({
        type: message.role === "user" ? "user" : "bot",
        content: message.content
      }));
      setMessages(earlierMessages);
      queryClient.invalidateQueries({ queryKey: ["getPrevConversations"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong!",
      });
    },
  });

  // useEffect(() => {
  //   const conversationId = localStorage.getItem(
  //     "policy-bandhu-conversation-id"
  //   );
  //   if (conversationId) {
  //     getPrevChat.mutate(conversationId);
  //   }
  // }, []);

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTo({
        top: windowRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Sample policies - can be customized later
  const samplePolicies = [
    "Privacy Policy",
    "Terms of Service",
    "Return Policy",
    "Data Protection Policy",
    "Cookie Policy",
    "Employee Handbook",
    "Safety Guidelines",
  ];

  const addMessage = (type: "bot" | "user", content: string) => {
    setMessages((prev) => [...prev, { type, content }]);
  };

  // const saveChatHistory = async (question: string, response: string) => {
  //   if (!user) return;

  //   try {
  //     await supabase
  //       .from('chat_history')
  //       .insert({
  //         user_id: user.id,
  //         message: question,
  //         response: response
  //       });
  //   } catch (error) {
  //     console.error('Error saving chat history:', error);
  //   }
  // };

  const handlePolicySelect = (selectedPolicy: string) => {
    setPolicyName(selectedPolicy);
    addMessage("user", selectedPolicy);
    addMessage(
      "bot",
      `Great—what would you like to know about ${selectedPolicy}?`
    );
    setCurrentScreen("askQuestion");
  };

  const handleQuestionSubmit = (question: string = '') => {
    if (!userQuestion.trim() && !question.trim()) return;
    if (question.trim().length === 0) {
      addMessage("user", userQuestion);
    } else {
      addMessage("user", question);
    }
    setSuggestions([])
    let convId = user?.id;
    let uuid: string;
    if (!convId) {
      convId = localStorage.getItem("policy-bandhu-conversation-id");
    }
    if (!convId) {
      uuid = uuidv4();
      localStorage.setItem("policy-bandhu-conversation-id", uuid);
      convId = uuid
    }
    postChat.mutate({
      text: question.trim().length > 0 ? question : userQuestion.trim(),
      conversationId: convId,
    });
    setUserQuestion("");
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleQuestionSubmit();
    }
  };
  
  const onSuggestionClick = (question: string) => {
    handleQuestionSubmit(question)  
  }

  const handleAskAn = () => {
    setUserQuestion("");
    addMessage("bot", `What else would you like to know about ${policyName}?`);
    setCurrentScreen("askQuestion");
  };

  const handleChangePolicy = () => {
    setPolicyName("");
    setUserQuestion("");
    setAnswer("");
    addMessage("bot", "Which policy would you like to ask about?");
    setCurrentScreen("welcome");
  };

  const handleDone = () => {
    addMessage("bot", "Glad to help!");
    setCurrentScreen("done");
  };

  const renderCurrentScreen = () => {
    switch (postChat.isPending) {
      // case 'welcome':
      //   return (
      //     <div className="space-y-4">
      //       <Select value={policyName} onValueChange={handlePolicySelect}>
      //         <SelectTrigger className="w-full input-field min-h-[44px]">
      //           <SelectValue placeholder="Select a policy..." />
      //         </SelectTrigger>
      //         <SelectContent>
      //           {samplePolicies.map((policy) => (
      //             <SelectItem key={policy} value={policy}>
      //               {policy}
      //             </SelectItem>
      //           ))}
      //         </SelectContent>
      //       </Select>
      //     </div>
      //   );

      case false:
        return (
          <div className="space-y-4">
            <Textarea
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="h-4"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={()=>handleQuestionSubmit()}
                disabled={!userQuestion.trim()}
                className="flex-1 bg-[#213e72] text-white hover-scale min-h-[44px] order-2 sm:order-1 hover:bg-[#395486]"
                onKeyDown={handleKeyDown}
              >
                Ask Question
              </Button>
            </div>
          </div>
        );

      // case 'retrieveContext':
      case true:
        return (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-mid text-center px-4">
              {currentScreen === "retrieveContext"
                ? "Searching for relevant information..."
                : "Generating your answer..."}
            </p>
          </div>
        );

      // case 'followUp':
      //   return (
      //     <div className="space-y-3">
      //       <div className="grid grid-cols-1 gap-3">
      //         <Button onClick={handleAskAn} className="gradient-button text-white hover-scale min-h-[44px] w-full">
      //           Ask another question
      //         </Button>
      //         <Button onClick={handleChangePolicy} variant="outline" className="btn-secondary hover-scale min-h-[44px] w-full">
      //           Change policy
      //         </Button>
      //         <Button onClick={handleDone} variant="secondary" className="hover-scale min-h-[44px] w-full">
      //           Done
      //         </Button>
      //       </div>
      //     </div>
      //   );

      // case 'done':
      //   return (
      //     <div className="flex flex-col items-center justify-center py-8 space-y-4">
      //       <CheckCircle className="h-12 w-12 text-green-500" />
      //       <p className="text-center text-mid px-4">
      //         Thank you for using Policy Clarifier!
      //       </p>
      //       <Button onClick={() => {
      //         setMessages([{ type: 'bot', content: "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?" }]);
      //         setPolicyName('');
      //         setUserQuestion('');
      //         setAnswer('');
      //         setCurrentScreen('welcome');
      //       }} variant="outline" className="btn-secondary hover-scale min-h-[44px]">
      //         Start Over
      //       </Button>
      //     </div>
      //   );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto card-shadow bg-card">
      <div className="bg-[#C8D2DE] text-white p-1 md:p-1">
        <div className="flex flex-row sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-36 h-12 object-contain" />
          </div>
          {onClose && <span
              onClick={onClose}
              className="mr-5 cursor-pointer"
            >
              <X className="h-4 w-4 text-black" />
          </span>}
        </div>
      </div>
      <CardContent className="p-0">
        {/* Chat Messages */}
        <div
          className="h-64 sm:h-80 md:h-96 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 border-b border-border"
          ref={windowRef}
        >
          {getPrevChat.isPending ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 md:px-4 py-2 md:py-3 ${
                      message.type === "user"
                        ? "chat-bubble-user"
                        : "chat-bubble-bot"
                    }`}
                  >
                    <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-row gap-2 py-5 overflow-x-auto whitespace-nowrap mx-5">
          {
            suggestions.map((item, index) => (
              <div
                key={index}
                className="text-blue-200 cursor-pointer px-2 py-1 border border-blue-200 flex-shrink-0"
                onClick={() => onSuggestionClick(item)}
              >
                {item}
              </div>
            ))
          }
        </div>
        {/* Current Screen Interface */}
        <div className="p-3 md:p-4">{renderCurrentScreen()}</div>
      </CardContent>
    </div>
  );
};

export default PolicyClarifier;
