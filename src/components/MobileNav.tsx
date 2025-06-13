
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MessageCircle, History, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithGoogle, signOut } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-foreground hover:bg-accent"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">PolicyBadhu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              className="text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors min-h-[44px] ${
              location.pathname === '/' 
                ? 'bg-primary/20 text-primary' 
                : 'text-foreground hover:bg-accent'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/chat" 
            onClick={closeMenu}
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors min-h-[44px] ${
              location.pathname === '/chat' 
                ? 'bg-primary/20 text-primary' 
                : 'text-foreground hover:bg-accent'
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat</span>
          </Link>
          
          {user && (
            <Link 
              to="/history" 
              onClick={closeMenu}
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors min-h-[44px] ${
                location.pathname === '/history' 
                  ? 'bg-primary/20 text-primary' 
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <History className="h-5 w-5" />
              <span>History</span>
            </Link>
          )}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-3 bg-accent rounded-md">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-foreground truncate">
                  {user.user_metadata?.name || user.user_metadata?.full_name || 'User'}
                </span>
              </div>
              <Button 
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
                variant="outline"
                className="w-full flex items-center space-x-2 min-h-[44px]"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => {
                signInWithGoogle();
                closeMenu();
              }}
              className="w-full gradient-button text-white min-h-[44px]"
            >
              Sign in with Google
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
