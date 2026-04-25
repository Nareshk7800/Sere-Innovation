import React from 'react';
import { Smile, ThermometerSun, Droplets, RotateCw, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: <Smile className="text-green-600" size={32} />,
    title: "Easy to use",
    description: "Designed for beginners. No technical knowledge required to start hatching."
  },
  {
    icon: <ThermometerSun className="text-orange-500" size={32} />,
    title: "Temperature control",
    description: "Precision sensors ensure the perfect warmth for embryo development 24/7."
  },
  {
    icon: <Droplets className="text-blue-500" size={32} />,
    title: "Humidity control",
    description: "Automatic moisture management to prevent shells from hardening and keep chicks healthy."
  },
  {
    icon: <RotateCw className="text-indigo-500" size={32} />,
    title: "Automatic egg turning",
    description: "Gently rotates eggs to mimic natural mother hen behavior, improving hatch rates."
  },
  {
    icon: <DollarSign className="text-emerald-500" size={32} />,
    title: "Affordable (~₹10,000)",
    description: "A small investment that pays for itself after just a few successful hatches."
  },
  {
    icon: <Users className="text-purple-500" size={32} />,
    title: "Farmer-friendly",
    description: "Durable, easy to clean, and built to withstand real farm conditions."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Everything You Need. Nothing You Don't.</h2>
          <p className="text-xl text-gray-600">
            We've packed only the most essential, high-impact features into a clean, simple package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
