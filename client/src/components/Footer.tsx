import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const quickLinks = [
    { label: "Produk", href: "/#product" },
    { label: "Tim", href: "/#team" },
    { label: "Testimoni", href: "/#testimonials" },
    { label: "Harga", href: "/#pricing" },
    { label: "Tentang", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <footer className="border-t border-blue-200/30 bg-gradient-to-br from-slate-50 to-blue-50/50 glass">
      <div className="max-w-7xl mx-auto container-mobile py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-mobile-lg">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-sm">HO</span>
              </div>
              <span className="font-bold text-mobile-lg gradient-text-accent">
                Hadi Origin
              </span>
            </div>
            <p className="text-mobile-sm text-muted-foreground leading-relaxed">
              Membangun dashboard dan aplikasi AI yang mengubah cara bisnis bekerja.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold text-mobile-base text-foreground">Link Cepat</h3>
            <div className="flex flex-col gap-mobile-sm">
              {quickLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-mobile-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold text-mobile-base text-foreground">Hubungi Saya</h3>
            <div className="space-y-3">
              <a
                href="mailto:nopianhadi2@gmail.com"
                className="flex items-center gap-2 text-mobile-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                nopianhadi2@gmail.com
              </a>
              <a
                href="https://wa.me/62895406181407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-mobile-sm text-muted-foreground hover:text-green-600 transition-all duration-300 hover:translate-x-1"
                data-testid="link-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                +62 895-4061-81407
              </a>
              <a
                href="tel:+62895406181407"
                className="flex items-center gap-2 text-mobile-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                +62 895-4061-81407
              </a>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-50 hover:text-blue-600"
                  data-testid="button-linkedin"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-900 hover:text-white"
                  data-testid="button-github"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-200/30 text-center animate-fade-in">
          <p className="text-mobile-sm text-muted-foreground">
            © 2025 Hadi Origin. Ingin dashboard untuk bisnismu? Yuk, mulai dari konsultasi gratis.
          </p>
        </div>
      </div>
    </footer>
  );
}
