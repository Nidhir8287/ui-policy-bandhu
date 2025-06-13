
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import { User, LogOut, History, MessageCircle, Home } from 'lucide-react';
import MobileNav from './MobileNav';

const Header = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 gradient-header backdrop-blur border-b border-border/50">
      <div className="container-custom py-3 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary hover-scale">
            PolicyBadhu
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover-scale min-h-[44px] ${
                location.pathname === '/' 
                  ? 'bg-primary/20 text-primary' 
                  : 'text-mid hover:text-foreground'
              }`}
            >
              <Home className="h-4 w-4 stroke-current hover:stroke-secondary transition-colors" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/chat" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover-scale min-h-[44px] ${
                location.pathname === '/chat' 
                  ? 'bg-primary/20 text-primary' 
                  : 'text-mid hover:text-foreground'
              }`}
            >
              <MessageCircle className="h-4 w-4 stroke-current hover:stroke-secondary transition-colors" />
              <span>Chat</span>
            </Link>
            
            {user && (
              <Link 
                to="/history" 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover-scale min-h-[44px] ${
                  location.pathname === '/history' 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-mid hover:text-foreground'
                }`}
              >
                <History className="h-4 w-4 stroke-current hover:stroke-secondary transition-colors" />
                <span>History</span>
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          {loading ? (
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          ) : user ? (
            <>
              {/* Desktop user info */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-high">
                  <User className="h-4 w-4 stroke-mid" />
                  <span className="truncate max-w-32">
                    {user.user_metadata?.name || user.user_metadata?.full_name || 'User'}
                  </span>
                </div>
                <Button 
                  onClick={signOut}
                  variant="outline"
                  size="sm"
                  className="btn-secondary flex items-center space-x-1 hover-scale min-h-[44px]"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            </>
          ) : (
            <Button 
              onClick={signInWithGoogle}
              className="hidden md:flex gradient-button items-center space-x-2 text-white hover-scale min-h-[44px]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="hidden lg:inline">Sign in with Google</span>
              <span className="lg:hidden">Sign in</span>
            </Button>
          )}
          
          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
