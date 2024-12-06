import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const searchInputRef = useRef(null);

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 300);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="navbar bg-base-100 border-b">
      {/* Left Section: Logo */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl flex items-center">
          <img src="/minfi.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span>MINFI</span>
        </Link>
      </div>

      {/* Center Section: Navigation */}
      <div className="flex-none hidden md:flex justify-center flex-1">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Accueil</Link></li>
          <li tabIndex={0}>
            <details>
              <summary>
                Instruments Juridiques
                <IoIosArrowDown className="ml-1 inline-block" />
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link href="/instruments/zonesgeo">Zones Géographiques</Link></li>
                <li><Link href="/instruments/engagement">Engagement Financier</Link></li>
                <li><Link href="/instruments/organismes">Organismes</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Language Switch */}
        <div className={`flex space-x-2 transition-all duration-300 ${isSearchOpen ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
          <button
            onClick={toggleLanguage}
            className={`transition-opacity ${language === "fr" ? "opacity-100" : "opacity-50"}`}
          >
            <Image src="/fr.svg" alt="Français" width={24} height={24} className="rounded-full" />
          </button>
          <button
            onClick={toggleLanguage}
            className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-50"}`}
          >
            <Image src="/uk.svg" alt="English" width={24} height={24} className="rounded-full" />
          </button>
        </div>

        {/* Search Bar */}
        <div className={`relative flex items-center border border-gray-300 rounded-md transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-8'}`}>
          <button
            className={`absolute left-2 text-gray-600 transition-all duration-300 ${isSearchOpen ? 'transform -translate-x-1' : ''}`}
            onClick={toggleSearch}
          >
            <FaSearch className="h-5 w-5" />
          </button>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Rechercher un instrument juridique"
            className={`w-full pl-8 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSearchOpen ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-base-100 shadow-md">
          <ul className="menu menu-compact p-4">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/instruments/zones">Zones Géographiques</Link></li>
            <li><Link href="/instruments/engagement">Engagement Financier</Link></li>
            <li><Link href="/instruments/organismes">Organismes</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;