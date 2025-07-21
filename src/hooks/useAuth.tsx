import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { createUser } from '../../api/createUser'

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Flag to avoid calling API multiple times
  const [hasSentUserData, setHasSentUserData] = useState(false);

  useEffect(() => {
    // Auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 🔁 Call API once user is logged in
  useEffect(() => {
    const sendUserDataToAPI = async () => {
      if (user && !hasSentUserData) {
        try {
          await createUser(user?.user_metadata)
          setHasSentUserData(true);
          localStorage.setItem('authToken_policy', session?.access_token)
        } catch (error) {
          console.error('Failed to sync user:', error);
        }
      }
    };

    sendUserDataToAPI();
  }, [user, hasSentUserData]);

  const signInWithGoogle = async () => {
    const redirectUrl = `${window.location}`;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setHasSentUserData(false); // reset flag on signout
    localStorage.removeItem('authToken_policy')
  };

  const value = {
    user,
    session,
    signInWithGoogle,
    signOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
