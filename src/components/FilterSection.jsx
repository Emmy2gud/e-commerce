import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

export default function FilterSection({ title, icon, sectionKey, children }) {
      const [openSections, setOpenSections] = useState({
        category: true,
        price: true,
        brand: true,
        rating: true,
        features: false,
      });
    
      const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <div>    <div className="bg-white rounded-xl border border-gray-400/50 overflow-hidden">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-4 py-3 bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <span className="font-medium text-foreground">{title}</span>
        </div>
        {openSections[sectionKey] ? 
          <ChevronUp size={16} className="text-muted-foreground" /> : 
          <ChevronDown size={16} className="text-muted-foreground" />
        }
      </button>
      {openSections[sectionKey] && (
        <div className="p-4 space-y-3">
          {children}
        </div>
      )}
    </div></div>
  )
}
