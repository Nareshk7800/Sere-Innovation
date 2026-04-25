'use client';

import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8">
              <Leaf size={32} className="text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to Hatch Your Own Future?</h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl">
              Join hundreds of farmers who have taken control of their poultry business. Enquire today to get your smart incubator.
            </p>
            
            <button 
              onClick={() => window.dispatchEvent(new Event('open-enquiry'))}
              className="px-10 py-5 bg-white text-green-700 hover:bg-stone-50 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg"
            >
              Enquire Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
