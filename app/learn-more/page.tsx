import React from 'react';
import Image from 'next/image';
import { Settings, RefreshCw, Thermometer, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Learn More | Smart Egg Incubator',
  description: 'Detailed explanation of how the Sere Innovations Smart Egg Incubator works.',
};

export default function LearnMorePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-[#FAFAFA]">

      {/* Header */}
      <div className="text-center py-20 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6">
          How It Works
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">The Science of Perfect Hatching</h1>
        <p className="text-xl text-gray-600">
          We've eliminated the guesswork from poultry farming. Explore the technology that makes our incubator the most reliable in its class.
        </p>
      </div>

      {/* Feature 1: Temperature & Humidity */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1588597989061-b60ad0eefdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGZhcm18ZW58MHx8MHx8fDA%3D"
              alt="Temperature sensors"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>
          <div className="order-1 md:order-2">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <Thermometer size={32} className="text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Precision Microclimate Control</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              An embryo requires exactly 37.5°C and 55% humidity for the first 18 days. Our dual-sensor array monitors the internal environment 10 times per second, adjusting heating elements and water vapor instantly to maintain the perfect microclimate, irrespective of outside weather.
            </p>
            <ul className="space-y-3">
              {['Dual PT100 sensors for accuracy', 'Adaptive heating algorithm', 'Automatic humidity generation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle size={20} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: Auto Turning */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <RefreshCw size={32} className="text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Biomimetic Egg Turning</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Mother hens turn their eggs frequently to prevent the embryo from sticking to the shell membrane. Our slow-motion actuator gently tilts the entire egg tray 45 degrees every two hours, exactly replicating natural behavior while ensuring zero mechanical shock.
            </p>
            <ul className="space-y-3">
              {['45° tilt every 120 minutes', 'Whisper-quiet stepper motor', 'Zero egg-shell stress'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle size={20} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1589923188651-268a9765e432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBmYXJtfGVufDB8fDB8fHww"
              alt="Egg turning mechanism"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature 3: Interface */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="https://i.pinimg.com/1200x/01/ed/e9/01ede9e9fe9a1fe0a70600284a130097.jpg"
              alt="Incubator Dashboard Interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Settings size={32} className="text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intuitive Dashboard</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              No complex manuals needed. The digital interface provides real-time readouts of temperature, humidity, and the current incubation day. If water runs low or power fluctuates, bright visual indicators and a soft buzzer will alert you immediately.
            </p>
            <ul className="space-y-3">
              {['High-contrast LED display', 'Low-water audio alarm', 'One-touch hatch mode'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle size={20} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
        <p className="text-xl text-gray-600 mb-10">
          Ready to upgrade your farm's efficiency with our proven technology?
        </p>
        <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg transform hover:-translate-y-1">
          View Pricing & Plans <ArrowRight size={20} />
        </Link>
      </section>

    </main>
  );
}
