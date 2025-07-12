import Button from "@/components/ui/buttonV2";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import { User, LogOut, History, MessageCircle, Home } from "lucide-react";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import ChatIcon from "@/icons/ChatIcon";

const Header = ({ openChat }: { openChat?: () => void }) => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply auto-hide on mobile (≤768px)
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-[#F3F3FF] sticky top-0 z-40 flex items-center border-b-4 border-white h-20 border-border/50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-28 flex justify-between w-full items-center">
        <div className="text-black">
          <img src="/logo.png" height={49} width={127} />
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[#213559] font-medium">HOME</span>
          {!user || Object.keys(user).length === 0 ? (
            <Button
              text="LOGIN"
              onClick={signInWithGoogle}
              className="bg-[#8F8FEF] text-whiterounded-full py-1 text-sm px-5 rounded-full text-white"
             />
          ) : (
            <Button text="LOGOUT" onClick={signOut} className="bg-[#8F8FEF] text-whiterounded-full py-1 text-sm px-5 rounded-full text-white" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;