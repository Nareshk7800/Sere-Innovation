import React from 'react';
import Image from 'next/image';
import { Target, Lightbulb, Users, Leaf, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Sere Innovations',
  description: 'Learn about our mission to empower farmers with smart egg incubators.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-stone-50">
      {/* Hero Banner */}
      <div className="bg-emerald-800 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Sere Innovations</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            We are redefining small-scale poultry farming with smart, affordable, and easy-to-use incubation technology.
          </p>
        </div>
      </div>

      {/* Structured Product Description */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6">
              <Leaf size={16} /> Our Flagship Product
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The Smart Egg Incubator
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Sere Innovations, we recognized that small-scale farmers lose potential income due to unreliable hatching methods. Our Smart Egg Incubator is designed from the ground up to solve this problem, delivering commercial-grade reliability at a fraction of the cost.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Target className="text-blue-500" size={24} />,
                  title: "Precision Control",
                  desc: "Automated temperature and humidity regulation mimicking a mother hen."
                },
                {
                  icon: <ShieldCheck className="text-emerald-500" size={24} />,
                  title: "Built for Resilience",
                  desc: "Robust materials and power-efficient design tailored for rural environments."
                },
                {
                  icon: <Lightbulb className="text-orange-500" size={24} />,
                  title: "Zero Learning Curve",
                  desc: "Intuitive interface that allows anyone to start hatching within minutes."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-[2rem] transform rotate-3 scale-105 opacity-20"></div>
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white">
              <Image
                src="/incubator.png"
                alt="Smart Egg Incubator Details"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stat */}
            <div className="absolute top-10 -left-8 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm font-medium text-gray-500">Farmers Empowered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Core Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2rem] bg-stone-50 border border-gray-100 hover:border-emerald-200 transition-colors text-left group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize poultry farming by providing accessible, state-of-the-art incubation technology that empowers individuals to build sustainable and profitable farming businesses.
              </p>
            </div>
            <div className="p-10 rounded-[2rem] bg-stone-50 border border-gray-100 hover:border-blue-200 transition-colors text-left group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Lightbulb className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We envision a future where every rural household has the tools to achieve self-reliance and economic growth through smart, decentralized agricultural solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to transform your farm?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join the growing community of farmers who have taken control of their hatching process with Sere Innovations.
        </p>
        <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          View Pricing <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}
