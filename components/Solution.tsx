import React from 'react';
import { Lightbulb, Settings, Power } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-800 text-green-300 font-medium text-sm mb-6 border border-green-700">
            <Lightbulb size={16} />
            The Smart Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Hatch Your Own Success with Sere Innovations</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Our smart egg incubator is designed specifically to bring advanced hatchery technology to your farm at an affordable price. It's time to take control of your poultry production.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center shrink-0">
                <Settings size={24} className="text-green-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Automated Climate Control</h4>
                <p className="text-green-200">Maintains perfect temperature and humidity automatically, requiring zero guesswork from you.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center shrink-0">
                <Power size={24} className="text-green-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Plug and Play Simplicity</h4>
                <p className="text-green-200">No complex setup. Just plug it in, add water, and let the incubator do the heavy lifting.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-3xl transform -rotate-3 scale-105"></div>
          <div className="relative bg-white text-gray-900 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Simple 3-Step Process</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 font-bold text-2xl flex items-center justify-center shrink-0">1</div>
                <div className="text-lg font-medium">Place fertilized eggs on the trays.</div>
              </div>
              <div className="w-1 h-8 bg-green-100 ml-7 -my-6"></div>
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 font-bold text-2xl flex items-center justify-center shrink-0">2</div>
                <div className="text-lg font-medium">Turn it on and fill the water reservoir.</div>
              </div>
              <div className="w-1 h-8 bg-green-100 ml-7 -my-6"></div>
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-600 text-white font-bold text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-600/30">3</div>
                <div className="text-lg font-bold text-green-600">Welcome your new chicks in 21 days!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
