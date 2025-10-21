import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  
  // Active section tracking
  const sectionIds = ['product', 'team', 'testimonials', 'pricing'];
  const activeSection = useActiveSection(sectionIds);
  
  // Enable smooth scrolling
  useSmoothScroll({ offset: 80 });
  
  const menuItems = [
    { label: "Produk", href: "/#product" },
    { label: "Tim", href: "/#team" },
    { label: "Testimoni", href: "/#testimonials" },
    { label: "Harga", href: "/#pricing" },
    { label: "Tentang", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 backdrop-blur-xl bg-white/80 shadow-sm animate-fade-in" aria-label="Main navigation">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
      >
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto container-mobile">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 animate-slide-up">
            <a href="/" className="flex items-center gap-2" aria-label="Hadi Origin Home">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-base" aria-hidden="true">HO</span>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Hadi Origin
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-mobile-lg animate-fade-in" role="navigation">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  item.href.includes(activeSection) 
                    ? 'text-primary-600' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
                aria-current={item.href.includes(activeSection) ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 rounded-full transition-all duration-300 ${
                  item.href.includes(activeSection) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} aria-hidden="true"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 animate-fade-in">
            {user ? (
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 hover:border-primary-300 hover:bg-primary-50"
                asChild
              >
                <a href="/admin">
                  Dashboard
                </a>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                asChild
                data-testid="button-login"
              >
                <a href="/auth" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </a>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg rounded-lg"
              asChild
              data-testid="button-start-trial"
            >
              <a href="/contact">
                Mulai Gratis
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-100 transition-all duration-300 animate-slide-up"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border/40 animate-slide-up" role="menu">
            <div className="flex flex-col gap-mobile-sm">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-item transition-all duration-300 hover:translate-x-2 ${
                    item.href.includes(activeSection)
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={item.href.includes(activeSection) ? 'page' : undefined}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-mobile-sm pt-2 animate-fade-in">
                {user ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mobile-nav-button justify-start"
                    asChild
                  >
                    <a href="/admin">
                      Dashboard
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mobile-nav-button justify-start"
                    asChild
                    data-testid="button-mobile-login"
                  >
                    <a href="/auth" className="gap-2">
                      <LogIn className="w-4 h-4" />
                      Login
                    </a>
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="gradient"
                  className="mobile-nav-button"
                  asChild
                  data-testid="button-mobile-start-trial"
                >
                  <a href="/contact">
                    Mulai Gratis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
