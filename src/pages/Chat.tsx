import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getConversations } from "../../api/getPrevChat";
import { toast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { postMessage } from "../../api/postChat";
import { Crown, Loader2, SendHorizonal } from "lucide-react";
import { getUserProfile } from "../../api/userProfile";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [policyName, setPolicyName] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // @ts-ignore
  const windowRef = useRef(null);
  const textareaRef = useRef(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I'm your Policy Clarifier. Which policy do you want to ask about?",
    },
  ]);
  const {
    data: userProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    enabled: !!user && !!localStorage.getItem("authToken_policy"),
    retry: 1,
  });

  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken_policy");

  const { is_subscribed } = userProfile || {};

  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);

    // Auto-resize
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  
  
  function formatBotMessage(content: string): string {
    if (!content) return "";
  
    let formatted = content
      .replace(/#\^\^#.*?#\^#\^#/gs, "") // remove internal markers
      .replace(/#\^\^\^#.*?#\^\^\^#/gs, "")
      .replace(/\\n/g, "\n")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Remove empty markdown links like []() or () 
      .replace(/\[\s*\]\(\s*\)/g, "")
      .replace(/\(\s*\)/g, "")
      // Convert valid [label](url) links
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" class="underline text-blue-600 hover:text-blue-800">$1</a>')
      // Convert custom #^# links into anchor tags
      .replace(/#\^#(https?:\/\/[^\s#]+)#\^#/g, `<a href="$1" target="_blank" class="underline text-blue-600 hover:text-blue-800">$1</a>`);
  
    // 🛠️ Fix mojibake / character encoding issues
    formatted = formatted
      .replace(/â¹/g, '₹')
      .replace(/â€“|â€”/g, '–')
      .replace(/â€œ|â€|â€"|"|â€˜|â€™|â|â|â|â/g, '"')
      .replace(/â€¦|â¦/g, '…')
      .replace(/â€¢|â¢/g, '•')
      .replace(/â€”|â”/g, '—')
      .replace(/â€“|â/g, '-');
  
    // Remove standalone or empty (#^#) tags
    formatted = formatted.replace(/\(#\^#\)/g, "");
  
    const [introPart, ...restParts] = formatted.split(/\n(?=- )/);
  
    let htmlOutput = `<p>${introPart.trim().replace(/\n/g, "<br/>")}</p>`;
  
    if (restParts.length) {
      const listItems = restParts
        .map(part =>
          part
            .trim()
            .replace(/^- /, "")
            .trim()
        )
        .map(item => item ? `<li>${item}</li>` : "")
        .join("");
  
      htmlOutput += `<ul class="list-disc list-inside space-y-1 mt-2">${listItems}</ul>`;
    }
  
    return htmlOutput.trim();
  }
  

  const queryClient = useQueryClient();

  const postChat = useMutation({
    mutationFn: postMessage,
    onSuccess: (data) => {
      const raw = data.data.bot_reply.content;
      const coversationId = data.data.chat_id
      if (coversationId) {
        localStorage.setItem('policy_bandhu_chat_id', coversationId)
      }
      // Extract suggestions
      const suggestions = [...raw.matchAll(/#\^\^#(.*?)#\^#\^#/gs)].map((m) =>
        m[1].trim()
      );
  
      const formatted = formatBotMessage(raw);
  
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: formatted,
        },
      ]);
  
      setThinking(false);
      setSuggestions(suggestions);
      queryClient.invalidateQueries({ queryKey: ["postMessage"] });
    },
  });

  const getPrevChat = useMutation({
    mutationFn: getConversations,
    onSuccess: (data) => {
      const earlierMessages = data?.data
        .reverse()
        .map(({ content, author }) => {
          const formatted =
            author === 1 ? formatBotMessage(content) : content;
  
          return {
            type: author === 1 ? "bot" : "user",
            content: formatted,
          };
        });
  
      setMessages(earlierMessages);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong!",
      });
    },
  });
  

  useEffect(() => {
    if (user && authToken) {
      // @ts-ignore
      getPrevChat.mutate();
    }
  }, [user, authToken]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (windowRef.current) {
        windowRef.current.scrollTo({
          top: windowRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 50); // small delay

    return () => clearTimeout(timeout);
  }, [messages]);

  useEffect(() => {
    if (!user && !loading) {
      signInWithGoogle();
    }
  }, [user, signInWithGoogle]);

  const addMessage = (type: "bot" | "user", content: string) => {
    setMessages((prev) => [...prev, { type, content }]);
  };

  const handleQuestionSubmit = (question: string = "") => {
    if (requiredLength <= 0 && !is_subscribed) {
      setShowModal(true);
      return;
    }
    if (!userQuestion.trim() && !question.trim()) return;
    if (question.trim().length === 0) {
      addMessage("user", userQuestion);
    } else {
      addMessage("user", question);
    }
    setThinking(true);
    setSuggestions([]);
    let convId = user?.id;
    let uuid: string;
    if (!convId) {
      convId = localStorage.getItem("policy-bandhu-conversation-id");
    }
    if (!convId) {
      uuid = uuidv4();
      localStorage.setItem("policy-bandhu-conversation-id", uuid);
      convId = uuid;
    }
    postChat.mutate({
      text: question.trim().length > 0 ? question : userQuestion.trim(),
      conversationId: convId,
    });
    setUserQuestion("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleQuestionSubmit();
    }
  };
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const messagesLength = messages.filter(({ type }) => type === "user").length;
  const requiredLength = 10 - messagesLength;

  if (getPrevChat.isPending || profileLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#F3F3FF]">
        <Header />
        <div className="flex flex-col justify-between min-h-[calc(100vh-64px)] bg-[#F3F3FF]">
          {/* Chat Header */}
          <div className="bg-white px-36 py-4 shadow-sm fixed top-20 z-10 w-screen">
            <div className="flex justify-between items-center">
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
              {!is_subscribed ? (
                <div className="text-black">queries left: {requiredLength}</div>
              ) : (
                <Crown fill="#FFD700" color="#FFD700" />
              )}
            </div>
          </div>

          {/* Chat Body */}
          <div
            className="flex-1 overflow-y-auto px-10 py-6 flex flex-col-reverse gap-4 mt-36"
            ref={windowRef}
          >
            {thinking && (
              <div className="flex justify-start">
                <div className="max-w-[70%] w-fit text-sm p-4 rounded-xl bg-[#BEBEFF] text-black rounded-tl-none">
                  Thinking...
                </div>
              </div>
            )}
            {[...messages].reverse().map((msg, index) => (
              <div
                key={index}
                ref={index === 0 ? lastMessageRef : null}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] text-sm p-4 rounded-xl prose prose-sm ${
                    msg.type === "user"
                      ? "bg-[#FFD6AC] text-black rounded-tr-none"
                      : "bg-[#BEBEFF] text-black rounded-tl-none"
                  }`}
                >
                  {msg.type === "bot" ? (
                    <div
                      className="prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: msg.content }}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
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
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Upgrade Required"
        style={{
          overlay: {
            zIndex: 10000,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            inset: "50% auto auto 50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            padding: 0,
            background: "none",
          },
        }}
      >
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
          <h2 className="text-2xl font-bold text-[#7979DC] mb-4">
            Upgrade Required
          </h2>
          <p className="text-gray-700 mb-6">
            To access this feature, please upgrade your plan.
          </p>

          <button
            onClick={() => navigate("/payment")}
            className="bg-[#7979DC] text-white font-medium py-2 px-6 rounded-md hover:bg-[#5f5fcf] transition duration-200 w-full mb-3"
          >
            Upgrade Now
          </button>

          <button
            onClick={() => setShowModal(false)}
            className="border border-gray-300 text-gray-600 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-200 w-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Chat;
