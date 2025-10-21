import { ModernCard, ModernCardContent } from "@/components/ui/modern-card";
import { Brain, Zap, Link2, FileText, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Integrasi AI/ML Frameworks",
    description: "OpenAI, Gemini, Ollama, dan framework AI lainnya siap terintegrasi",
    variant: "blue" as const,
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Laporan dan analitik interaktif yang update secara real-time",
    variant: "orange" as const,
  },
  {
    icon: Link2,
    title: "Unlimited API Integration",
    description: "Hubungkan dengan sistem internal bisnis tanpa batas",
    variant: "purple" as const,
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Otomatisasi laporan untuk efisiensi maksimal",
    variant: "green" as const,
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Dukungan multi-user dengan role management lengkap",
    variant: "blue" as const,
  },
  {
    icon: Shield,
    title: "Secure & Fast",
    description: "Deployment cepat dan aman dengan best practices",
    variant: "orange" as const,
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="product">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-5 mb-10 sm:mb-14 md:mb-18 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 animate-slide-up">
            Fitur Cerdas, Hasil Nyata
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in px-4 font-normal">
            Dashboard AI tingkat enterprise, dibangun dengan cepat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white hover:bg-gray-50 rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-feature-${index + 1}`}
              >
                {/* Icon */}
                <div className="inline-flex p-3 sm:p-4 bg-primary-50 rounded-xl mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
