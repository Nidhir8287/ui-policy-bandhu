
import Header from '@/components/Header';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getConversations } from '../../api/getPrevChat';
import { toast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from "uuid";
import { postMessage } from "../../api/postChat";
import { Loader2, SendHorizonal } from 'lucide-react';

const Chat = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [policyName, setPolicyName] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [thinking, setThinking] = useState(false)
  // @ts-ignore
  const windowRef = useRef(null);
  const textareaRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?",
    },
  ]);
  
  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);

    // Auto-resize
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

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
      setThinking(false)
      const suggestions = [...data.data.bot_reply.content.matchAll(/#\^\^#(.*?)#\^#\^#/gs)].map(m => m[1].trim())
      setSuggestions(suggestions)
      queryClient.invalidateQueries({ queryKey: ["postMessage"] });
    },
  });

  const getPrevChat = useMutation({
    mutationFn: getConversations,
    onSuccess: (data) => {
      const earlierMessages = data?.data.reverse().map(({ content, author })=>
      ({
        type: author === 1 ? "bot" : "user",
        content: content.replace(/#\^\^#.*?#\^#\^#/gs, '')    // remove suggestions
        .replace(/#\^\^\^#.*?#\^\^\^#/gs, '') // remove links
        .replaceAll('**', '')                // remove all ** markers
        .trim()
      })
      )
      setMessages(earlierMessages)
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong!",
      });
    },
  });
  
  useEffect(() => {
      getPrevChat.mutate();
  }, []);

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTo({
        top: windowRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  
  useEffect(() => {
    if (!user && !loading) {
      signInWithGoogle();
    }
  }, [user, signInWithGoogle]);
  

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
    setThinking(true)
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
      event.preventDefault()
      handleQuestionSubmit();
    }
  };
  
  if (getPrevChat.isPending) {
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loader2 className='animate-spin' />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-[#F3F3FF]">
      <Header />
      <div className="flex flex-col justify-between min-h-[calc(100vh-64px)] bg-[#F3F3FF]">
        {/* Chat Header */}
        <div className="bg-white px-36 py-4 shadow-sm sticky top-0 z-10">
          <div className="flex gap-3 items-center">
            <img src="/bot.png" alt="bot" className="w-10 h-10" />
            <div className="flex flex-col">
              <p className="text-black font-semibold">PolicyBandhu</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                Online
                <div className="w-2 h-2 rounded-full bg-[#6E72FF]" />
              </div>
            </div>
          </div>
      </div>

  {/* Chat Body */}
  <div
    className="flex-1 overflow-y-auto px-10 py-6 space-y-4"
    ref={windowRef}
  >
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-[70%] text-sm p-4 rounded-xl ${
            msg.type === "user"
              ? "bg-[#FFD6AC] text-black rounded-tr-none"
              : "bg-[#BEBEFF] text-black rounded-tl-none"
          }`}
        >
          {msg.content}
        </div>
      </div>
    ))}
    {
      thinking && (
        <div
          className="max-w-[70%] w-fit text-sm p-4 rounded-xl 
              bg-[#BEBEFF] text-black rounded-tl-none"
        >
          Thinking...
        </div>
      )
    }
  </div>

  {/* Chat Input */}
  <div className="w-full bg-[#F3F3FF] px-10 pb-6 pt-2 sticky bottom-0">
    <div className="flex min-h-5 items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
    <textarea
      ref={textareaRef}
      placeholder="Start typing…"
      className="flex-1 text-sm text-black bg-transparent resize-none overflow-hidden leading-snug border-none focus:outline-none focus:ring-0"
      rows={1}
      value={userQuestion}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
      <button
        onClick={() => handleQuestionSubmit()}
        className="text-white bg-[#6E72FF] p-2 rounded-full"
      >
        <SendHorizonal />
      </button>
    </div>
  </div>
      </div>

    </div>
  );
};

export default Chat;
