import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { firm } from '../mock';
import logoNavy from '../assets/logo-navy.png';

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Results', to: '/results' },
  { label: 'Referrals', to: '/attorney-referrals' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(32,73,127,0.08)]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[96px]">
        <Link to="/" className="flex items-center">
          <img src={logoNavy} alt="Tober Law" className="h-11 sm:h-[52px] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-[15px] font-semibold tracking-tight text-[#2b3a4d] hover:text-[#20497f] transition-colors ${
                location.pathname === item.to ? 'active text-[#20497f]' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          <a href={firm.phoneHref} className="hidden xl:inline-flex items-center gap-2 text-[15px] font-bold text-[#20497f] hover:text-[#b8933f] transition-colors">
            <Phone className="w-4 h-4 text-[#b8933f]" />
            {firm.phone}
          </a>
          <button
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-[#20497f] text-white px-5 py-2.5 text-sm font-bold tracking-tight shadow-[0_6px_18px_rgba(32,73,127,0.25)] hover:bg-[#1a3c6a] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#d9bd7a] group-hover:text-[#e8d29a]" />
            Free Consultation
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="p-2 text-[#20497f]">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[82%] sm:w-80 bg-white">
              <div className="mt-4 mb-8">
                <img src={logoNavy} alt="Tober Law" className="h-8 w-auto" />
              </div>
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className={`py-3 px-3 rounded-lg text-lg font-semibold text-[#2b3a4d] hover:bg-[#f2f7fc] hover:text-[#20497f] transition-colors ${
                        location.pathname === item.to ? 'bg-[#f2f7fc] text-[#20497f]' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetClose asChild>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#20497f] text-white px-5 py-3 text-base font-bold shadow-lg"
                >
                  <Phone className="w-4 h-4 text-[#d9bd7a]" />
                  Free Consultation
                </button>
              </SheetClose>
              <a
                href={firm.phoneHref}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#20497f]/25 text-[#20497f] px-5 py-3 text-base font-bold hover:border-[#b8933f] hover:text-[#b8933f] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#b8933f]" />
                {firm.phone}
              </a>
              <p className="mt-2 text-center text-[13px] text-[#8593a3]">Fax {firm.fax}</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
