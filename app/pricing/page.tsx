'use client';

import React from 'react';
import { Check, Info, ArrowRight, Zap, Shield } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-[#F9F6ED]">
      {/* Header */}
      <div className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">
          Invest once in our Smart Egg Incubator and watch it pay for itself after just a few successful hatches. No hidden fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="max-w-lg mx-auto">
          
          {/* Standard Tier */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-200 shadow-xl relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Incubator</h3>
            <p className="text-gray-500 mb-8">Everything you need to start hatching immediately.</p>
            
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gray-900">₹9,999</span>
              <span className="text-gray-500 font-medium">/ unit</span>
            </div>

            <button 
              onClick={() => window.dispatchEvent(new Event('open-enquiry'))}
              className="w-full py-4 px-6 rounded-full bg-emerald-50 text-emerald-700 font-bold text-lg hover:bg-emerald-100 transition-colors mb-10 flex items-center justify-center gap-2"
            >
              Enquire Now
            </button>

            <div className="space-y-4">
              <p className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-4">What's included</p>
              {[
                "100 Egg Capacity",
                "Automatic Temperature Control",
                "Automatic Humidity Control",
                "Auto Egg Turning Mechanism",
                "6 Months Warranty",
                "Basic User Manual"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-700" />
                  </div>
                  <span className="text-gray-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Info Section */}
      <section className="px-6 max-w-4xl mx-auto pb-24">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
            <Shield className="text-blue-600" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure Investment</h4>
            <p className="text-gray-600 leading-relaxed">
              Every Sere Innovations incubator undergoes rigorous testing before delivery. We offer full technical support to ensure your first hatch is a success. Have questions about financing or bulk orders?
            </p>
            <button onClick={() => window.dispatchEvent(new Event('open-enquiry'))} className="mt-4 text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1">
              Contact our sales team <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
