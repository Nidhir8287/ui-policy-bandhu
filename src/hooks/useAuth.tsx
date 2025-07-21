import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { createUser } from '../../api/createUser';

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
  const [hasSentUserData, setHasSentUserData] = useState(false);

  // 👇 Centralized handler for invalid/expired token
  const handleInvalidToken = async () => {
    console.warn('Invalid or expired session. Logging out...');
    await supabase.auth.signOut();

    // Clear all Supabase and custom session tokens
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('sb-') || key === 'authToken_policy') {
        localStorage.removeItem(key);
      }
    });

    setUser(null);
    setSession(null);
    setHasSentUserData(false);

    window.location.href = '/'; // Or use router.push if using React Router or Next.js
  };

  // ✅ Auth state listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // ✅ Check session on initial app load
    supabase.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) {
        handleInvalidToken();
      } else {
        setSession(data.session);
        setUser(data.session.user);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // ✅ Push user data to API once authenticated
  useEffect(() => {
    const sendUserDataToAPI = async () => {
      if (user && !hasSentUserData) {
        try {
          await createUser(user.user_metadata);
          setHasSentUserData(true);
          localStorage.setItem('authToken_policy', session?.access_token || '');
        } catch (error: any) {
          console.error('Failed to sync user:', error);
          if (error?.message?.includes('JWT') || error?.message?.includes('Invalid')) {
            handleInvalidToken();
          }
        }
      }
    };

    sendUserDataToAPI();
  }, [user, hasSentUserData, session]);

  const signInWithGoogle = async () => {
    const redirectUrl = `${window.location}`;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirectUrl },
    });
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    } finally {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('sb-') || key === 'authToken_policy') {
          localStorage.removeItem(key);
        }
      });
      setHasSentUserData(false);
      setUser(null);
      setSession(null);
    }
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
