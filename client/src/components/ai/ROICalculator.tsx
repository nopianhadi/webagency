import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Clock,
  Download,
  CheckCircle,
  Sparkles
} from "lucide-react";

interface ROICalculatorProps {
  solutionType: string;
}

interface ROIResult {
  investment: number;
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackMonths: number;
  threeYearValue: number;
}

export default function ROICalculator({ solutionType }: ROICalculatorProps) {
  const [monthlyRevenue, setMonthlyRevenue] = useState<string>("");
  const [numSKUs, setNumSKUs] = useState<string>("");
  const [numLocations, setNumLocations] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const skus = parseInt(numSKUs) || 0;
    const locations = parseInt(numLocations) || 1;

    if (revenue === 0) {
      alert("Mohon isi Monthly Revenue");
      return;
    }

    // Calculate investment based on complexity
    let baseInvestment = 35000000;
    
    // Adjust for SKUs
    if (skus > 1000) baseInvestment += 5000000;
    if (skus > 5000) baseInvestment += 5000000;
    
    // Adjust for locations
    if (locations > 1) baseInvestment += (locations - 1) * 3000000;
    if (locations > 5) baseInvestment += (locations - 5) * 2000000;

    // Calculate monthly savings (conservative estimate)
    let monthlySavings = 0;

    if (solutionType === "Inventory Management") {
      // Deadstock reduction: 5% of revenue freed up
      const deadstockSavings = revenue * 0.05;
      
      // Prevent stockout: 3% additional sales
      const stockoutPrevention = revenue * 0.03;
      
      // Time savings: 2.5 hours/day = ~5 juta/month labor cost savings
      const timeSavings = 5000000;
      
      // Better purchasing: 1.5% savings
      const purchasingSavings = revenue * 0.015;
      
      monthlySavings = deadstockSavings + stockoutPrevention + timeSavings + purchasingSavings;
    } else if (solutionType === "CRM System") {
      // Increased conversion: 10% → 35% = 250% improvement on qualified leads
      // Assume 20% of revenue comes from new customer acquisition
      const conversionIncrease = revenue * 0.20 * 1.5; // 150% more from same leads
      
      // Time savings: 2 hours/day = ~4 juta/month
      const timeSavings = 4000000;
      
      monthlySavings = conversionIncrease + timeSavings;
    } else {
      // Dashboard Analytics or others
      // Better decisions: 5% revenue increase
      const betterDecisions = revenue * 0.05;
      
      // Time savings: 10 hours/week = ~3 juta/month
      const timeSavings = 3000000;
      
      monthlySavings = betterDecisions + timeSavings;
    }

    // Calculate results
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - baseInvestment) / baseInvestment) * 100;
    const paybackMonths = baseInvestment / monthlySavings;
    const threeYearValue = (monthlySavings * 36) - baseInvestment;

    setResult({
      investment: baseInvestment,
      monthlySavings,
      annualSavings,
      roi,
      paybackMonths,
      threeYearValue
    });
    setShowResults(true);
  };

  const resetCalculator = () => {
    setMonthlyRevenue("");
    setNumSKUs("");
    setNumLocations("");
    setShowResults(false);
    setResult(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6"
    >
      <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-600 rounded-full text-white">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">Hitung ROI untuk Bisnis Anda</h4>
            <p className="text-sm text-gray-600">
              Personalized calculation based on your business metrics
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            /* Input Form */
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-3 gap-4">
                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="revenue" className="font-semibold">
                    Monthly Revenue (Rp) *
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    placeholder="100000000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500">Omzet per bulan</p>
                </div>

                {/* Number of SKUs */}
                <div className="space-y-2">
                  <Label htmlFor="skus" className="font-semibold">
                    Jumlah SKU / Products
                  </Label>
                  <Input
                    id="skus"
                    type="number"
                    placeholder="500"
                    value={numSKUs}
                    onChange={(e) => setNumSKUs(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500">Total item berbeda</p>
                </div>

                {/* Number of Locations */}
                <div className="space-y-2">
                  <Label htmlFor="locations" className="font-semibold">
                    Jumlah Lokasi
                  </Label>
                  <Input
                    id="locations"
                    type="number"
                    placeholder="1"
                    value={numLocations}
                    onChange={(e) => setNumLocations(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500">Gudang/toko/cabang</p>
                </div>
              </div>

              <Button 
                onClick={calculateROI}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My ROI
              </Button>

              <p className="text-xs text-center text-gray-500">
                * Required field. Perhitungan menggunakan conservative estimate.
              </p>
            </motion.div>
          ) : (
            /* Results Display */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              {result && (
                <>
                  {/* Main ROI Display */}
                  <Card className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="w-6 h-6" />
                      <h5 className="text-lg font-semibold">Your Estimated ROI:</h5>
                    </div>
                    <div className="text-5xl font-bold mb-2">
                      {result.roi.toFixed(0)}%
                    </div>
                    <p className="text-green-100">dalam 12 bulan</p>
                  </Card>

                  {/* Detailed Metrics */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Investment */}
                    <Card className="p-4 border-2">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-700">Total Investment</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        Rp {result.investment.toLocaleString('id-ID')}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">One-time cost</p>
                    </Card>

                    {/* Monthly Savings */}
                    <Card className="p-4 border-2">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-700">Monthly Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        Rp {result.monthlySavings.toLocaleString('id-ID')}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Recurring monthly benefit</p>
                    </Card>

                    {/* Annual Savings */}
                    <Card className="p-4 border-2">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-gray-700">Annual Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        Rp {result.annualSavings.toLocaleString('id-ID')}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Year 1 total benefit</p>
                    </Card>

                    {/* Payback Period */}
                    <Card className="p-4 border-2">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-gray-700">Payback Period</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        {result.paybackMonths.toFixed(1)} bulan
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Break-even time</p>
                    </Card>
                  </div>

                  {/* 3-Year Projection */}
                  <Card className="p-4 bg-blue-50 border-2 border-blue-200">
                    <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      3-Year Value Projection:
                    </h5>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      Rp {result.threeYearValue.toLocaleString('id-ID')}
                    </div>
                    <p className="text-sm text-gray-700">
                      Total net benefit setelah 3 tahun (savings - investment)
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <p className="text-xs text-gray-600">
                        💡 <strong>Note:</strong> Ini conservative estimate. Actual results bisa lebih tinggi 
                        dengan optimizations dan scale benefits.
                      </p>
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      onClick={resetCalculator}
                      variant="outline"
                      className="flex-1"
                    >
                      Calculate Again
                    </Button>
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/62895406181407?text=Halo, saya sudah hitung ROI untuk bisnis saya. Hasilnya ${result.roi.toFixed(0)}% dalam 12 bulan. Bisa diskusi lebih lanjut?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Diskusi Hasil Ini
                      </a>
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
