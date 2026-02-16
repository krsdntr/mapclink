import React, { useState, useEffect } from 'react';
import { Menu, X, Map } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#problem' },
    { name: 'Keunggulan', href: '#benefits' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Profil', href: '#profile' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-primary-600 text-white p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
                <Map size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">
                Map<span className="text-primary-600">clink</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-0.5"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary-600 text-white px-5 py-3 rounded-lg font-bold"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;