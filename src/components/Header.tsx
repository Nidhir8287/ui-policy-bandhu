import Button from "@/components/ui/buttonV2";
import { useAuth } from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../api/userProfile";

const Header = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();
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
  const { is_subscribed } = userProfile || {}
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const isCustomGoogleAvatar = (url) => {
    return (
      typeof url === "string" &&
      url.includes("lh3.googleusercontent.com/a/") &&
      url.split("/a/")[1]?.length > 30 // Custom image hashes are usually long
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 768) {
        setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const goToLink = (path: string) => navigate(`/${path}`);

  const onPaymentClick = async () => {
    navigate("/payment");
    if (!user) {
      await signInWithGoogle()
    }
  };
  
  const onLogout = () => {
    signOut()
    navigate('/')
  }

  return (
    <header
      className={`bg-[#F3F3FF] fixed w-full top-0 z-40 flex items-center border-b-4 border-white h-20 border-border/50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-10 flex justify-between w-full items-center relative">
        {/* Logo */}
        <div className="text-black">
          <img src="/logo.png" height={49} width={127} alt="Logo" />
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base">
          <span
            className={`text-[#213559] font-medium cursor-pointer ${
              pathname === "/" ? "font-bold text-[#6E72FF]" : ""
            }`}
            onClick={() => goToLink("")}
          >
            Home
          </span>

          {!is_subscribed && <span
            className={`text-[#213559] font-medium cursor-pointer ${
              pathname === "/payment" ? "font-bold text-[#6E72FF]" : ""
            }`}
            onClick={onPaymentClick}
          >
            Payment
          </span>}

          <span
            className={`text-[#213559] font-medium cursor-pointer ${
              pathname === "/chat" ? "font-bold text-[#6E72FF]" : ""
            }`}
            onClick={() => goToLink("chat")}
          >
            Chat
          </span>

          <span
            className={`text-[#213559] font-medium cursor-pointer ${
              pathname === "/contact-us" ? "font-bold text-[#6E72FF]" : ""
            }`}
            onClick={() => goToLink("contact-us")}
          >
            Contact Us
          </span>

          {/* Auth buttons */}
          {!user || Object.keys(user).length === 0 ? (
            <Button
              text="LOGIN"
              onClick={signInWithGoogle}
              className="bg-[#FFA766] text-white rounded-full py-1 px-5 text-sm"
            />
          ) : (
            <div
              className="relative"
              tabIndex={0}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // small delay to allow click
            >
              <div
                className="h-10 w-10 rounded-lg cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src={user?.user_metadata?.picture}
                  alt="User"
                  className="h-10 w-10 rounded-lg"
                />
              </div>

              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white shadow-md rounded-md px-4 py-2 text-black text-sm cursor-pointer z-50" onClick={onLogout}>
                  Logout
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
