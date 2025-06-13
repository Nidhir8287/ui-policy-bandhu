import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, User, Bot, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

interface ChatHistoryItem {
  id: string;
  message: string;
  response: string;
  created_at: string;
}

const History = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [historyRows, setHistoryRows] = useState<ChatHistoryItem[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchChatHistory();
    }
  }, [user]);

  const fetchChatHistory = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHistoryRows(data || []);
    } catch (error) {
      console.error('Error fetching chat history:', error);
      toast({
        title: 'Error',
        description: 'Failed to load chat history',
        variant: 'destructive'
      });
    } finally {
      setLoadingHistory(false);
    }
  };

  const deleteChatItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('chat_history')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setHistoryRows(prev => prev.filter(item => item.id !== id));
      toast({
        title: 'Success',
        description: 'Chat deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting chat:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete chat',
        variant: 'destructive'
      });
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container-custom section-padding px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-high">
            Your Chat History
          </h1>
          <p className="text-xl text-mid">
            Review your previous conversations with PolicyBadhu
          </p>
        </div>

        {loadingHistory ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        ) : historyRows.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <MessageCircle className="h-16 w-16 text-mid mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-high">No chat history yet</h3>
            <p className="text-mid mb-6">
              Start a conversation to see your chat history here
            </p>
            <Button 
              onClick={() => navigate('/chat')}
              className="gradient-button text-white hover-scale"
            >
              Start Chatting
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {historyRows.map((item) => (
              <Card key={item.id} className="relative bg-card border-border/50 card-shadow hover-scale animate-fade-in">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm text-mid">
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteChatItem(item.id)}
                      className="text-mid hover:text-destructive hover-scale"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 chat-bubble-user rounded-lg p-3">
                      <p className="text-sm">{item.message}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Bot className="h-5 w-5 text-mid mt-1 flex-shrink-0" />
                    <div className="flex-1 chat-bubble-bot rounded-lg p-3">
                      <p className="text-sm whitespace-pre-wrap">{item.response}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
