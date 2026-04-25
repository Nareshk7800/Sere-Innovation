import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

export default function TrustedBanner() {
  return (
    <div className="w-full bg-white pt-20">
      <div className="bg-green-900 text-white py-6 border-y border-green-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center whitespace-nowrap">
          <p className="text-lg font-bold text-green-100">Trusted by 500+ Quality Farms</p>
        </div>

        {/* Right Side - Sliding/Marquee effect for product quality */}
        <div className="flex-1 overflow-hidden ml-8 flex items-center relative mask-image-fade">
          {/* We duplicate the content to make the scrolling seamless */}
          <div className="animate-slide-left gap-12 text-sm font-semibold text-green-100 uppercase tracking-widest flex items-center pl-12 whitespace-nowrap">
            
            {/* First Set */}
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Easy to Use</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> High Hatch Rate</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Temperature Control</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> Humidity Control</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Affordable</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> Farmer-Friendly</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Premium Build</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> 24/7 Support</div>
            
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex items-center gap-2 shrink-0 ml-12"><Shield size={18} className="text-green-400" /> Easy to Use</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> High Hatch Rate</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Temperature Control</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> Humidity Control</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Affordable</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> Farmer-Friendly</div>
            <div className="flex items-center gap-2 shrink-0"><Shield size={18} className="text-green-400" /> Premium Build</div>
            <div className="flex items-center gap-2 shrink-0"><Award size={18} className="text-green-400" /> 24/7 Support</div>
            
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
