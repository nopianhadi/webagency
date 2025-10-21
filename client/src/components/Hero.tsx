import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/AI_Dashboard_Hero_Mockup_bea0dfd3.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-12 sm:py-16 md:py-20">
      {/* Subtle animated background - Monetra style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] animate-fade-in" />

      {/* Clean minimal decoration */}
      <div className="absolute inset-0 opacity-30 animate-fade-in">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-slide-up">
            <Badge className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-50 text-primary-600 border-primary-200/50 hover:bg-primary-100 transition-all duration-300 animate-fade-in text-[10px] sm:text-xs md:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Template AI Terbaik
            </Badge>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight animate-slide-up text-gray-900">
              Bangun{" "}
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Aplikasi AI
              </span>
              <br />
              yang Membentuk Masa Depan
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed animate-fade-in font-normal">
              Membantu bisnis membangun aplikasi dan dashboard profesional yang terintegrasi dengan AI.
              Dari analitik, CRM, hingga platform otomasi — dikembangkan cepat dan efisien.
            </p>

            <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 md:gap-4 animate-fade-in">
              <Button
                size="lg"
                className="gap-2 group text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-consultation"
                asChild
              >
                <a 
                  href="https://wa.me/62895406181407?text=Halo%20Hadi%20Origin%2C%20saya%20ingin%20berkonsultasi%20tentang%20project%20saya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>Konsultasi Sekarang</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 group text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 rounded-xl transition-all duration-300"
                data-testid="button-how-it-works"
                asChild
              >
                <a href="#product">
                  Cara Kerja
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative lg:block animate-float">
            <div className="relative">
              {/* Monetra-style clean shadow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40" />
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-gray-100 animate-fade-in">
                <img
                  src={heroImage}
                  alt="AI Dashboard Mockup"
                  className="relative rounded-xl shadow-lg"
                  data-testid="img-hero-dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
