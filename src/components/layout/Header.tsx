import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "/sssl.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsHeroInView(false);
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const checkHeroVisibility = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const heroElement = document.getElementById("hero-section");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Transparent as long as the hero section bottom is above the navbar threshold
        setIsHeroInView(rect.bottom > 90);
      } else {
        setIsHeroInView(scrollY < 650);
      }
    };

    checkHeroVisibility();
    window.addEventListener("scroll", checkHeroVisibility, { passive: true });
    window.addEventListener("resize", checkHeroVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkHeroVisibility);
      window.removeEventListener("resize", checkHeroVisibility);
    };
  }, [isHome, location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && isHeroInView && !isMobileMenuOpen;

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isHome ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } ${
        isTransparent
          ? "bg-transparent border-none shadow-none"
          : isScrolled || !isHome
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
          : "bg-background shadow-sm border-none"
      }`}
    >
        <div className="container-custom px-2 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 ml-0 sm:ml-2">
              <img
                src={logo}
                alt="SHIVASHAKTHI SKYLINE"
                className={`h-16 w-auto sm:h-20 transition-all duration-300 ${
                  isTransparent ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] brightness-105" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : isTransparent
                      ? "text-white/90 hover:text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="shadow-gold hover:shadow-gold-lg">
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t animate-fade-in ${
              isTransparent
                ? "bg-secondary/95 backdrop-blur-xl border-white/10 text-white shadow-2xl"
                : "bg-background border-border shadow-xl"
            }`}
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : isTransparent
                      ? "text-white hover:text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="block pt-4">
                <Button variant="gold" className="w-full shadow-gold">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
  );
}
