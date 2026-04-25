import React from 'react';
import { User, Store, Home } from 'lucide-react';

const audiences = [
  {
    icon: <User size={40} className="text-green-600 mb-4" />,
    title: "Small Poultry Farmers",
    description: "Looking to scale operations without the massive overhead of buying commercial chicks."
  },
  {
    icon: <Store size={40} className="text-green-600 mb-4" />,
    title: "Rural Entrepreneurs",
    description: "Starting a new business supplying day-old chicks to local communities."
  },
  {
    icon: <Home size={40} className="text-green-600 mb-4" />,
    title: "Farm Owners",
    description: "Diversifying farm income with a reliable, manageable poultry setup."
  }
];

export default function WhoItIsFor() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Is This For?</h2>
          <p className="text-xl text-gray-600">
            We built Sere Innovations specifically for those who need reliable, affordable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] text-center shadow-sm border border-stone-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
