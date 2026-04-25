'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800 text-emerald-100 font-medium text-sm mb-6 shadow-sm border border-emerald-600">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300"></span>
            Smart Agriculture
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
            Helping farmers <span className="text-emerald-300">hatch their own future</span>
          </h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-lg leading-relaxed">
            Build your own hatchery right on your farm, where every egg stays in your care and every result is yours, while the incubator handles heat, moisture, and turning without constant checking.
            No more waiting or losing money to delays — what you grow stays with you, and every chick brings both income and the confidence of doing it on your own.

          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button onClick={() => window.dispatchEvent(new Event('open-enquiry'))} className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-800 hover:bg-stone-50 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-black/10">
              Enquire Now <ArrowRight size={20} />
            </button>
            <Link href="/learn-more" className="w-full sm:w-auto px-8 py-4 bg-emerald-800 text-white border border-emerald-600 hover:bg-emerald-900 rounded-full font-semibold text-lg flex items-center justify-center transition-all">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/incubator.png"
                alt="Smart egg incubator in farm setting"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow text-gray-900">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                95%
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Average</p>
                <p className="font-bold text-gray-900">Hatch Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-800/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
    </section>
  );
}
