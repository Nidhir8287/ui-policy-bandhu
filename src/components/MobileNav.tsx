
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
        className="md:hidden text-foreground hover:bg-accent z-50 relative"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Full-screen mobile menu overlay */}
      {isOpen && (
        <>
          {/* Semi-transparent backdrop */}
          <div 
            className="fixed inset-0 z-40 md:hidden pointer-events-auto" 
            onClick={closeMenu}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          />

          {/* Menu panel sliding from left */}
          <div 
            className="fixed top-0 left-0 h-full w-3/4 z-50 transform transition-transform duration-300 ease-in-out md:hidden pointer-events-auto opacity-100"
            style={{ backgroundColor: '#1E1E1E' }}
          >
            {/* Header with close button */}
            <div className="p-6 border-b border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">PolicyBadhu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="text-foreground hover:bg-accent"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Navigation items with proper padding */}
            <nav className="p-4 space-y-3">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="block"
              >
                <div className={`flex items-center space-x-3 p-4 rounded-lg transition-colors min-h-[44px] ${
                  location.pathname === '/' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-[#2A2A2A] text-[#E0E0E0] hover:bg-primary/10'
                }`}>
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Home</span>
                </div>
              </Link>
              
              <Link 
                to="/chat" 
                onClick={closeMenu}
                className="block"
              >
                <div className={`flex items-center space-x-3 p-4 rounded-lg transition-colors min-h-[44px] ${
                  location.pathname === '/chat' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-[#2A2A2A] text-[#E0E0E0] hover:bg-primary/10'
                }`}>
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Chat</span>
                </div>
              </Link>
              
              {user && (
                <Link 
                  to="/history" 
                  onClick={closeMenu}
                  className="block"
                >
                  <div className={`flex items-center space-x-3 p-4 rounded-lg transition-colors min-h-[44px] ${
                    location.pathname === '/history' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-[#2A2A2A] text-[#E0E0E0] hover:bg-primary/10'
                  }`}>
                    <History className="h-5 w-5" />
                    <span className="font-medium">History</span>
                  </div>
                </Link>
              )}
            </nav>

            {/* User section at bottom with proper spacing */}
            <div className="absolute bottom-6 left-4 right-4">
              {user ? (
                <div className="space-y-3">
                  <div className="bg-[#2A2A2A] p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="text-[#E0E0E0] font-medium truncate">
                        {user.user_metadata?.name || user.user_metadata?.full_name || 'User'}
                      </span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      signOut();
                      closeMenu();
                    }}
                    variant="outline"
                    className="w-full bg-[#2A2A2A] border-border text-[#E0E0E0] hover:bg-primary/10 flex items-center space-x-2 min-h-[44px]"
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
                  className="w-full gradient-button text-white min-h-[44px] font-medium"
                >
                  Sign in with Google
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;
