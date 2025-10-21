import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Rp 1.500.000",
    period: "/ proyek",
    description: "Dashboard dasar untuk bisnis yang baru memulai",
    features: [
      "Dashboard dasar",
      "Integrasi 3 API",
      "Real-time analytics",
      "Email support",
      "1 user account",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Rp 4.500.000",
    period: "/ proyek",
    description: "Solusi lengkap untuk bisnis yang berkembang",
    features: [
      "Advanced dashboard",
      "Unlimited API integration",
      "AI/ML integration",
      "Priority support",
      "Up to 10 users",
      "Custom analytics",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi khusus untuk kebutuhan enterprise",
    features: [
      "Custom AI development",
      "Dedicated support team",
      "On-premise deployment",
      "Unlimited users",
      "SLA guarantee",
      "Training & consultation",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-mobile bg-gradient-to-br from-blue-50/30 to-cyan-50/30 animate-fade-in" id="pricing">
      <div className="max-w-7xl mx-auto container-mobile">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-mobile-2xl tracking-tight gradient-text-accent">
            Paket Harga
          </h2>
          <p className="text-mobile-base text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`card-mobile glass-card-mobile hover:scale-105 transition-all duration-300 animate-fade-in group ${
                plan.highlighted
                  ? "border-2 border-blue-500/50 shadow-xl shadow-blue-500/20 animate-glow"
                  : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className={`text-mobile-lg font-bold ${plan.highlighted ? 'gradient-text-accent' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-mobile-sm text-muted-foreground group-hover:text-slate-600 transition-colors duration-300">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className={`text-mobile-2xl font-bold font-mono ${plan.highlighted ? 'gradient-text-primary' : 'text-foreground'}`}>
                    {plan.price}
                  </div>
                  {plan.period && (
                    <div className="text-mobile-sm text-muted-foreground">{plan.period}</div>
                  )}
                </div>

                <Button
                  size="lg"
                  variant={plan.highlighted ? "gradient" : "outline"}
                  className="w-full"
                >
                  {plan.name === "Enterprise" ? "Hubungi Kami" : "Jadwalkan Demo Gratis"}
                </Button>

                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}>
                      <div className={`mt-0.5 p-1 rounded-full ${plan.highlighted ? 'bg-blue-100' : 'bg-green-100'}`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-blue-600' : 'text-green-600'}`} />
                      </div>
                      <span className={`text-mobile-sm ${plan.highlighted ? 'text-slate-700' : 'text-slate-600'} group-hover:text-slate-800 transition-colors duration-300`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
