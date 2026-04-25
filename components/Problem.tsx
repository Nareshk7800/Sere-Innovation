import React from 'react';
import { AlertTriangle, TrendingDown, Lock } from 'lucide-react';

const problems = [
  {
    icon: <AlertTriangle size={32} className="text-red-500" />,
    title: "Dependence on Hatcheries",
    description: "Constantly relying on external suppliers for chicks limits your farm's independence and growth."
  },
  {
    icon: <TrendingDown size={32} className="text-orange-500" />,
    title: "High Ongoing Costs",
    description: "Buying chicks directly drastically increases your operational costs compared to hatching your own."
  },
  {
    icon: <Lock size={32} className="text-gray-500" />,
    title: "Lack of Control",
    description: "No control over the quality, breed, and health of the chicks you bring into your farm."
  }
];

export default function Problem() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">The challenge of hatching at your own farm</h2>
          <p className="text-xl text-gray-600">
            You raise every egg with care, yet the final step has never truly been in your hands — leaving you dependent, delayed, and earning less than you deserve.

          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-stone-50 rounded-3xl p-8 border border-stone-100 transition-all hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
