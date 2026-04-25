'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquirySidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-enquiry', handleOpen);
    return () => window.removeEventListener('open-enquiry', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-[101] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Enquire Now</h2>
            <p className="text-emerald-100 text-sm mt-1 opacity-90">Start your smart poultry journey</p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar bg-emerald-700">
          <EnquiryForm onSuccess={() => setIsSubmitted(true)} />
        </div>
      </div>
      {/* Success Popup (Glassmorphism) */}
      {isSubmitted && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={handleClose}
          />
          <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-8 sm:p-12 rounded-3xl max-w-md w-full text-center shadow-[0_0_40px_rgba(0,0,0,0.2)] transform transition-all animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-400/30">
              <CheckCircle2 size={40} className="text-emerald-300" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Enquiry Sent!</h3>
            <p className="text-emerald-50 mb-8 text-lg leading-relaxed">
              Thank you for reaching out. Our team will get back to you shortly to start your smart poultry journey.
            </p>
            <button 
              onClick={handleClose}
              className="w-full py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl active:scale-95"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
}
