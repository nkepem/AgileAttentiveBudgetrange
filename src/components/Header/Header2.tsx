import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const searchInputRef = useRef(null);

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

 

  return (
       
     <NavBar />
   
   
  );
};

export default Header;