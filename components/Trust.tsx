import React from 'react';
import { Check } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-24 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Built on Principles, Not Promises</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-green-700 rounded-3xl bg-green-800/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-6">
              <Check size={24} className="text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Built for real farmers</h3>
            <p className="text-green-100">
              We design our products based on feedback from actual users in the field, ensuring they solve real-world problems.
            </p>
          </div>
          
          <div className="p-8 border border-green-700 rounded-3xl bg-green-800/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-6">
              <Check size={24} className="text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Simple and practical</h3>
            <p className="text-green-100">
              No unnecessary features or confusing interfaces. Just straightforward tools that get the job done reliably.
            </p>
          </div>
          
          <div className="p-8 border border-green-700 rounded-3xl bg-green-800/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-6">
              <Check size={24} className="text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">No complex setup</h3>
            <p className="text-green-100">
              You don't need a manual or a technician. Our incubators are designed to work right out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
