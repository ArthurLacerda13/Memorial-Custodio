import { BookText, Search, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      ref={headerRef} 
      className={`bg-sepia-coffee text-sepia-cream py-4 px-6 border-b-4 border-sepia-brown shadow-lg fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - versão menor */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="relative bg-sepia-brown p-2 rounded-sm">
                <BookText className="w-5 h-5 text-sepia-cream" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="tracking-wider uppercase text-xs">
                Memorial Online
              </span>
              <span className="text-[10px] text-sepia-light tracking-wide">
                Prof. Luiz Custódio
              </span>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a 
                  href="#inicio" 
                  className="text-sepia-light hover:text-sepia-cream transition-colors duration-200 relative group"
                >
                  <span className="relative z-10">Início</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sepia-warm group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#galeria" 
                  className="text-sepia-light hover:text-sepia-cream transition-colors duration-200 relative group"
                >
                  <span className="relative z-10">Galeria de Obras</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sepia-warm group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-sepia-light hover:text-sepia-cream transition-colors duration-200 relative group"
                >
                  <span className="relative z-10">Sobre</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sepia-warm group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Campo de busca Desktop */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 border border-sepia-warm/40 rounded-sm bg-sepia-brown/30 hover:bg-sepia-brown/40 transition-colors duration-200">
            <Search className="w-4 h-4 text-sepia-warm flex-shrink-0" />
            <input
              type="text"
              placeholder="Buscar obras"
              className="bg-transparent text-sepia-light placeholder:text-sepia-light/60 text-sm outline-none w-32 focus:w-48 transition-all duration-300"
            />
          </div>

          {/* Botão Hamburguer Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-sepia-brown/30 rounded-sm transition-colors duration-200"
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-sepia-cream" />
            ) : (
              <Menu className="w-6 h-6 text-sepia-cream" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-sepia-warm/30">
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="#inicio" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sepia-light hover:text-sepia-cream transition-colors duration-200 py-2"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#galeria" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sepia-light hover:text-sepia-cream transition-colors duration-200 py-2"
                >
                  Galeria de Obras
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sepia-light hover:text-sepia-cream transition-colors duration-200 py-2"
                >
                  Sobre
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 px-4 py-2 border border-sepia-warm/40 rounded-sm bg-sepia-brown/30">
                  <Search className="w-4 h-4 text-sepia-warm flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Buscar obras"
                    className="bg-transparent text-sepia-light placeholder:text-sepia-light/60 text-sm outline-none w-full"
                  />
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
