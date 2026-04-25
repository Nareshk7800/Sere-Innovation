'use client';

import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';

// Props interface for the EnquiryForm component
interface EnquiryFormProps {
  onSuccess: () => void;
}

export default function EnquiryForm({ onSuccess }: EnquiryFormProps) {
  // ---------------------------------------------------------
  // State Management
  // ---------------------------------------------------------
  // We manage the form data in a single state object to keep things clean.
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: '',
    poultrySize: '',
    interestType: '',
    message: ''
  });

  // Simple state to track submission loading (optional UX improvement)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ---------------------------------------------------------
  // Form Handling
  // ---------------------------------------------------------
  // Update state whenever an input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser refresh
    
    // Basic validation is handled by HTML5 'required' attributes on inputs.
    // Here we simulate an API call or submission process.
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(); // Trigger the success callback to show the popup
      
      // Reset form fields after successful submission
      setFormData({
        name: '',
        mobile: '',
        village: '',
        poultrySize: '',
        interestType: '',
        message: ''
      });
    }, 800);
  };

  // ---------------------------------------------------------
  // JSX Layout
  // ---------------------------------------------------------
  return (
    <form className="p-6 space-y-6 flex flex-col h-full" onSubmit={handleSubmit}>
      
      {/* Name Input Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-emerald-50 mb-1.5">
          Name <span className="text-emerald-300">*</span>
        </label>
        <input 
          id="name"
          name="name"
          type="text" 
          required 
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm" 
          placeholder="Enter your full name" 
        />
      </div>

      {/* Mobile Number Input Field */}
      <div>
        <label htmlFor="mobile" className="block text-sm font-semibold text-emerald-50 mb-1.5">
          Mobile Number <span className="text-emerald-300">*</span>
        </label>
        <input 
          id="mobile"
          name="mobile"
          type="tel" 
          required 
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm" 
          placeholder="Enter your mobile number" 
        />
      </div>

      {/* Village / Town Input Field */}
      <div>
        <label htmlFor="village" className="block text-sm font-semibold text-emerald-50 mb-1.5">
          Village / Town <span className="text-emerald-300">*</span>
        </label>
        <input 
          id="village"
          name="village"
          type="text" 
          required 
          value={formData.village}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm" 
          placeholder="Enter your village or town" 
        />
      </div>

      {/* Side-by-side Dropdowns for Poultry Size and Interest Type */}
      <div className="grid grid-cols-2 gap-4">
        {/* Poultry Size Dropdown */}
        <div>
          <label htmlFor="poultrySize" className="block text-sm font-semibold text-emerald-50 mb-1.5">
            Poultry Size <span className="text-emerald-300">*</span>
          </label>
          <div className="relative">
            <select 
              id="poultrySize"
              name="poultrySize"
              required 
              value={formData.poultrySize}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all appearance-none text-gray-900 shadow-sm"
            >
              <option value="" disabled>Select size</option>
              <option value="under-100">Under 100 birds</option>
              <option value="100-500">100 - 500 birds</option>
              <option value="500-1000">500 - 1000 birds</option>
              <option value="over-1000">Over 1000 birds</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        {/* Interest Type Dropdown */}
        <div>
          <label htmlFor="interestType" className="block text-sm font-semibold text-emerald-50 mb-1.5">
            Interest Type <span className="text-emerald-300">*</span>
          </label>
          <div className="relative">
            <select 
              id="interestType"
              name="interestType"
              required 
              value={formData.interestType}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all appearance-none text-gray-900 shadow-sm"
            >
              <option value="" disabled>Select interest</option>
              <option value="buy">Buy Incubator</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Enquiry</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      {/* Optional Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-emerald-50 mb-1.5">
          Message <span className="text-emerald-200 font-normal">(Optional)</span>
        </label>
        <textarea 
          id="message"
          name="message"
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-emerald-600 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none text-gray-900 placeholder:text-gray-400 shadow-sm" 
          placeholder="Any additional details or questions..."
        ></textarea>
      </div>
      
      {/* Submit Section */}
      <div className="pt-4 pb-8 mt-auto">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-white text-emerald-800 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-xl shadow-black/10 active:scale-[0.98] group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Enquire Now'} 
            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </span>
        </button>
        <p className="text-center text-xs text-emerald-100 mt-4 flex items-center justify-center gap-1">
          Your information is secure with us.
        </p>
      </div>
    </form>
  );
}
