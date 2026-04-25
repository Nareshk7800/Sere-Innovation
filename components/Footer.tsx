import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#F9F6ED] rounded-xl p-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Sere Innovations Logo"
                width={120}
                height={120}
                quality={100}
                className="w-10 h-10 object-contain mix-blend-multiply"
              />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Sere Innovations</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-6">
            Empowering small poultry farmers with smart, affordable, and easy-to-use egg incubators to hatch their own future.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
            <li><Link href="/#solution" className="hover:text-green-400 transition-colors">Solution</Link></li>
            <li><Link href="/pricing" className="hover:text-green-400 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-green-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-green-500 shrink-0" />
              <span>hello@sereinnovations.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-green-500 shrink-0" />
              <span>123 Farm Road, Agriculture District, Rural State 456789</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Sere Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
}
