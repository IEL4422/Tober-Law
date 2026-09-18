import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Printer, Linkedin, Instagram, Facebook } from 'lucide-react';
import { firm, practiceAreas } from '../mock';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-[#16304f] text-white dot-texture">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="Tober Law" className="h-9 w-auto mb-5" />
            <p className="text-[15px] leading-relaxed text-white/70 max-w-xs">
              {firm.blurb}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#20497f] hover:bg-[#d9bd7a] hover:border-[#d9bd7a] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="eyebrow text-[#d9bd7a] mb-5">Practice Areas</h4>
            <ul className="space-y-2.5 text-[15px] text-white/70">
              {practiceAreas.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to="/practice-areas" className="hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h4 className="eyebrow text-[#d9bd7a] mb-5">Firm</h4>
            <ul className="space-y-2.5 text-[15px] text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/attorney-referrals" className="hover:text-white transition-colors">Attorney Referrals</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-[#d9bd7a] mb-5">Contact</h4>
            <ul className="space-y-3 text-[15px] text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#d9bd7a] shrink-0" />
                <span>{firm.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d9bd7a] shrink-0" />
                <a href={`mailto:${firm.email}`} className="hover:text-white transition-colors">{firm.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d9bd7a] shrink-0" />
                <a href={firm.phoneHref} className="hover:text-white transition-colors">{firm.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-[#d9bd7a] shrink-0" />
                <span>Fax {firm.fax}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/50">
            {`\u00A9 ${new Date().getFullYear()} Tober Law. Attorney advertising.`}
          </p>
          <p className="text-[13px] text-white/40 max-w-xl md:text-right">
            The information on this site is not legal advice. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
