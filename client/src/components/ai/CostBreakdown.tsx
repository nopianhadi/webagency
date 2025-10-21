import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CheckCircle, Gift, CreditCard } from "lucide-react";

interface CostBreakdownProps {
  solutionType: string;
}

const costData: Record<string, any> = {
  "Inventory Management": {
    items: [
      { name: "System Development", description: "Dashboard, barcode scanning, multi-location sync, analytics", cost: 25000000 },
      { name: "Integration", description: "Connect dengan POS, accounting, e-commerce platforms", cost: 5000000 },
      { name: "Training & Documentation", description: "Training staff, user manual, video tutorials", cost: 2000000 },
      { name: "3 Bulan Support", description: "Bug fixes, updates, consultation via email/WhatsApp", cost: 3000000 }
    ],
    total: 35000000,
    included: [
      "Unlimited revisions during development",
      "Cloud hosting 1 tahun (nilai Rp 6 juta)",
      "SSL certificate & security setup",
      "Barcode labels untuk 500 SKU pertama",
      "Mobile app (iOS & Android)"
    ]
  },
  "CRM System": {
    items: [
      { name: "CRM Platform Development", description: "Contact management, pipeline, automation, analytics", cost: 25000000 },
      { name: "WhatsApp & Email Integration", description: "2-way sync dengan WhatsApp Business API & email", cost: 6000000 },
      { name: "Training & Onboarding", description: "Sales & CS team training, documentation", cost: 2000000 },
      { name: "3 Bulan Support & Updates", description: "Ongoing support, bug fixes, feature updates", cost: 2000000 }
    ],
    total: 35000000,
    included: [
      "20+ professional email templates",
      "Cloud hosting 1 tahun",
      "Data migration dari Excel/spreadsheets",
      "Mobile-responsive web app",
      "Custom reports builder"
    ]
  },
  "Dashboard Analytics": {
    items: [
      { name: "Dashboard Development", description: "Charts, metrics, filters, drill-down features", cost: 20000000 },
      { name: "Data Integration", description: "Connect multiple data sources (Excel, DB, API)", cost: 8000000 },
      { name: "Automated Reporting", description: "Schedule reports, email delivery, export features", cost: 4000000 },
      { name: "Training & Support 3 Bulan", description: "Team training, documentation, ongoing support", cost: 3000000 }
    ],
    total: 35000000,
    included: [
      "10+ pre-built chart templates",
      "Real-time data refresh",
      "Export to Excel/PDF",
      "User permission system",
      "Cloud hosting 1 tahun"
    ]
  }
};

export default function CostBreakdown({ solutionType }: CostBreakdownProps) {
  const data = costData[solutionType] || costData["Inventory Management"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6"
    >
      <Card className="p-6 border-2">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-green-50 rounded-full">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-xl font-bold">Breakdown Biaya Detail</h4>
            <p className="text-sm text-gray-600">
              Transparansi penuh - tidak ada hidden cost
            </p>
          </div>
        </div>

        {/* Cost Items Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2 font-semibold">Item</th>
                <th className="text-right py-3 px-2 font-semibold">Biaya</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item: any, index: number) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-2">
                    <div className="font-semibold">{index + 1}. {item.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                  </td>
                  <td className="text-right py-4 px-2 font-semibold whitespace-nowrap">
                    Rp {item.cost.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
              <tr className="bg-green-50 font-bold text-lg">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Total Investment</span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 text-green-600 whitespace-nowrap">
                  Rp {data.total.toLocaleString('id-ID')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* What's Included (Free) */}
        <Card className="p-4 bg-blue-50 border-blue-200 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-blue-600" />
            <h5 className="font-bold text-blue-900">Yang Sudah Termasuk (GRATIS):</h5>
          </div>
          <ul className="space-y-2">
            {data.included.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Payment Options */}
        <Card className="p-4 bg-purple-50 border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-purple-600" />
            <h5 className="font-bold text-purple-900">Opsi Pembayaran:</h5>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Badge className="bg-green-600 mt-0.5">Recommended</Badge>
              <div>
                <p className="font-semibold">Installment 3x Tanpa Bunga</p>
                <p className="text-gray-600">
                  • Down payment: 30% (Rp {(data.total * 0.3).toLocaleString('id-ID')})<br />
                  • Progress: 40% saat 70% selesai (Rp {(data.total * 0.4).toLocaleString('id-ID')})<br />
                  • Final: 30% saat handover (Rp {(data.total * 0.3).toLocaleString('id-ID')})
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">Available</Badge>
              <div>
                <p className="font-semibold">Installment 6x dengan Bunga Ringan</p>
                <p className="text-gray-600">Discuss case by case, disesuaikan dengan cash flow bisnis Anda</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Note */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            💡 <strong>Catatan:</strong> Harga bisa adjust sesuai scope project. Diskusi dengan tim kami untuk custom quotation.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
