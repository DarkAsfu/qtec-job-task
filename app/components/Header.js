'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoggedIn(!!localStorage.getItem('token'));
    }
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="w-full bg-transparent z-30 relative h-[78px] flex items-center">
      <div className="mx-auto flex items-center justify-between px-4 md:px-31 w-full h-full">
        <div className="flex items-center gap-2 md:gap-3">
          <Image src="/logo.png" alt="QuickHire Logo" width={32} height={32} className="h-8 w-8" />
          <span
            className="text-[#25324B] font-[Red_Hat_Display] text-[24px] font-bold leading-[150%]"
            style={{
              fontFamily: 'Red Hat Display, sans-serif',
              fontWeight: 700,
              fontFeatureSettings: "'cv11' on",
              letterSpacing: '-0.24px',
            }}
          >
            QuickHire
          </span>
        </div>
        <button
          className="md:hidden flex items-center justify-center ml-auto"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Image src="/icon/menu.png" alt="Open menu" width={32} height={32} className="w-8 h-8" />
        </button>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex md:hidden transition"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="bg-white w-4/5 max-w-xs h-full p-6 flex flex-col gap-8 justify-center relative shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} color="#25324B" />
              </button>
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="#" className="text-[#515B6F] font-[Epilogue] text-[18px] font-medium leading-[160%] hover:text-[#4640DE]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}>Find Jobs</Link>
                <Link href="#" className="text-[#515B6F] font-[Epilogue] text-[18px] font-medium leading-[160%] hover:text-[#4640DE]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}>Browse Companies</Link>
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/login" className="text-[#4640DE] font-bold font-[Epilogue] text-[16px] hover:underline" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}>Login</Link>
                <Link href="/register" className="px-7 py-3 bg-[#5B3DF6] text-white font-bold font-[Epilogue] text-[18px] rounded-[4px] shadow hover:bg-[#3d28b0] transition border border-[#5B3DF6]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}>Sign Up</Link>
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex gap-8">
            <Link href="#" className="transition text-[#515B6F] font-[Epilogue] text-[16px] font-medium leading-[160%] hover:text-[#4640DE]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}>Find Jobs</Link>
            <Link href="#" className="transition text-[#515B6F] font-[Epilogue] text-[16px] font-medium leading-[160%] hover:text-[#4640DE]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}>Browse Companies</Link>
          </nav>
          <div className="flex items-center gap-0 ml-8">
            {loggedIn ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setProfileMenuOpen((v) => !v)}
                  aria-label="Open profile menu"
                >
                  <Avatar size="lg">
                    <AvatarImage src="/icon/profile.png" alt="Profile" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                </button>
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
                    <Link href="/dashboard" className="block px-4 py-2 text-[#25324B] hover:bg-gray-100">Dashboard</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-[#E53E3E] hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="px-0 py-0 text-[#4640DE] font-bold font-[Epilogue] text-[16px] mr-8 hover:underline" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}>Login</Link>
                <div className="h-8 w-px bg-[#E0E0E0] mx-2" />
                <Link href="/register" className="px-7 py-3 bg-[#5B3DF6] text-white font-bold font-[Epilogue] text-[18px] rounded-[4px] shadow hover:bg-[#3d28b0] transition border border-[#5B3DF6]" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
