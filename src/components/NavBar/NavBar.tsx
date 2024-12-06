// components/Navbar.tsx
'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b">
      {/* Navbar Start */}
      <div className="flex-1">
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl flex items-center">
          <img src="/minfi.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span>MINFI</span>
        </Link>
      </div>
  
      {/* Navbar Center (Visible on large screens) */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
          <Link href="/dashboard">Instruments Juridiques</Link>
          </li>
          <li>
            <Link href="/catalogue">Catalogue</Link>
          </li>
        </ul>
      </div>
  
      {/* Mobile Dropdown */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Accueil</Link></li>
            <li>
              <a>Instruments Juridique</a>
              <ul className="p-2">
                <li><Link href="/#constitution">Constitution</Link></li>
                <li><Link href="/#law">Loi</Link></li>
              </ul>
            </li>
            <li><Link href="/#contacts">Contacts</Link></li>
          </ul>
        </div>
      </div>
  
      {/* Navbar End */}
      <div className="flex-none">
        <Link href="/dashboard">
          <button className="btn btn-secondary">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
