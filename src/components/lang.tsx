import { useState } from 'react';

interface LanguageDropdownProps {
    changeLanguage: (lang: string) => void;
  }
  
  export default function LanguageDropdown({ changeLanguage }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
      >
        🌐 Langue
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 flex flex-col">
            <button
              onClick={() => { changeLanguage('fr'); setIsOpen(false); }}
              className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => { changeLanguage('en'); setIsOpen(false); }}
              className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
            >
              🇬🇧 English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
