import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
      aria-label={language === 'zh' ? 'Switch to English' : '切換至中文'}
    >
      <span className="text-xl">🌐</span>
      <span className="ml-2 text-sm font-medium text-gray-600">
        {language === 'zh' ? 'EN' : '中'}
      </span>
    </button>
  );
};

export default LanguageToggle; 