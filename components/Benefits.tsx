import React from 'react';
import { ShieldCheck, PiggyBank, Sliders, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: "Independence",
    description: "Free yourself from unreliable hatchery schedules and availability issues."
  },
  {
    icon: <PiggyBank size={28} className="text-white" />,
    title: "Cost Savings",
    description: "Hatch chicks at a fraction of the cost of buying them day-old."
  },
  {
    icon: <Sliders size={28} className="text-white" />,
    title: "Better Control",
    description: "Manage your flock size and breed selection exactly how you want."
  },
  {
    icon: <TrendingUp size={28} className="text-white" />,
    title: "Increased Income",
    description: "Sell excess chicks to neighboring farms or grow your own flock faster."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-green-50 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Why Farmers Choose Sere</h2>
              <p className="text-lg text-gray-600 mb-8">
                It's not just an incubator; it's an investment in your farm's future sustainability and profitability.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors">
                See the ROI Calculator &rarr;
              </a>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-green-200">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
