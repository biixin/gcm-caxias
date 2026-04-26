import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Shield } from 'lucide-react';
import { MEDIA_URLS } from '../constants/media';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const pages = [
  { id: 'home', label: 'Página Inicial' },
  { id: 'intelligence', label: 'Inteligência' },
  { id: 'counterintelligence', label: 'Contrainteligência' },
  { id: 'psyop', label: 'PSYOP' },
  { id: 'osint', label: 'OSINT' },
  { id: 'risp', label: 'Divisão Territorial (RISP)' },
  { id: 'analytics', label: 'Análise de Dados' },
  { id: 'sisp', label: 'Criação do SISP-DC' },
  { id: 'test', label: 'Dados Estatísticos' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setDropdownOpen(false);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLabel = pages.find((p) => p.id === currentPage)?.label ?? 'Seções';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 shadow-lg shadow-black/30 backdrop-blur-sm'
          : 'bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 shadow-lg shadow-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <img
              src={MEDIA_URLS.logos.siteLogo}
              alt="Logo GCM"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">Núclo de Inteligência Aplicada</p>
              <p className="text-blue-400 text-xs leading-tight">Duque de Caxias</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNavigate('home')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                currentPage === 'home'
                  ? 'text-white bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/8'
              }`}
            >
              Início
            </button>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  dropdownOpen
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/8'
                }`}
              >
                Seções
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                  <div className="py-1">
                    {pages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handleNavigate(page.id)}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center gap-3 ${
                          currentPage === page.id
                            ? 'bg-blue-50 text-blue-700 font-semibold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            currentPage === page.id ? 'bg-blue-600' : 'bg-slate-300'
                          }`}
                        />
                        {page.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Active page badge — desktop */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Visualizando:</span>
            <span className="text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full px-2.5 py-1">
              {currentLabel}
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-3 space-y-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavigate(page.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page.id
                    ? 'bg-blue-700/20 text-blue-400 font-semibold'
                    : 'text-slate-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
