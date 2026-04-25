'use client';

import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solution', href: '/#solution' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-emerald-700 ${scrolled ? 'shadow-xl py-3' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Sere Innovations Logo"
            width={120}
            height={120}
            quality={100}
            className="w-12 h-12 object-contain mix-blend-multiply"
          />
          <span className="text-xl font-bold text-white tracking-tight">Sere Innovations</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="group relative transition-all duration-300 hover:translate-y-1 hover:text-green-300">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          onClick={() => window.dispatchEvent(new Event('open-enquiry'))}
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full transition-all duration-300 hover:bg-emerald-50 active:scale-95 shadow-lg"
        >
          <Leaf size={18} />
          <span>Enquire Now</span>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-emerald-800 transition-all duration-300 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-[500px] border-t border-emerald-600/50' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center py-8 gap-6 font-medium text-white">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-lg hover:text-green-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              window.dispatchEvent(new Event('open-enquiry'));
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 px-8 py-3 mt-2 bg-white text-emerald-800 font-bold rounded-full shadow-lg active:scale-95 transition-transform"
          >
            <Leaf size={18} />
            <span>Enquire Now</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
