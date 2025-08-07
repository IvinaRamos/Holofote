import React, { useState } from 'react';
import logoHolofote from '../../assets/img/logoHolofote.png';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="relative z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src={logoHolofote}
                alt="Logomarca Holofote"
                className="h-12 w-12 object-cover rounded-full"
                width="48"
                height="48"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                  : 'text-white hover:text-[#E8C061]'
              }`}
              style={{ lineHeight: '50px' }}
            >
              HOME
            </a>
             */}
            {/* <a 
              href="/sobre" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'sobre' 
                  ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                  : 'text-white hover:text-[#E8C061]'
              }`}
              style={{ lineHeight: '50px' }}
            >
              SOBRE
            </a> */}
            
            {/* Services Dropdown */}
            {/* <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                  currentPage === 'servicos' 
                    ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                    : 'text-white hover:text-[#E8C061]'
                }`}
                style={{ lineHeight: '50px' }}
              >
                <span>SERVIÇOS</span>
                <svg 
                  width="10" 
                  height="10" 
                  viewBox="0 0 16 11" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M8 10.5L16 1.86193L14.7387 0.5L8 7.77613L1.26133 0.499999L-5.95321e-08 1.86193L8 10.5Z"></path>
                </svg>
              </button> */}
              
              {/* Dropdown Menu */}
              {/* {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                  <a 
                    href="/coachindividual" 
                    className="block px-4 py-2 text-sm text-[#2D2E2D] hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors"
                  >
                    COACH INDIVIDUAL
                  </a>
                  <a 
                    href="/perfilcomportamental" 
                    className="block px-4 py-2 text-sm text-[#2D2E2D] hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors"
                  >
                    PERFIL COMPORTAMENTAL
                  </a>
                  <a 
                    href="/inteligenciaemocional" 
                    className="block px-4 py-2 text-sm text-[#2D2E2D] hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors"
                  >
                    INTELIGÊNCIA EMOCIONAL
                  </a>
                </div>
              )}
            </div> */}
            
            {/* <a 
              href="/contato" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contato' 
                  ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                  : 'text-white hover:text-[#E8C061]'
              }`}
              style={{ lineHeight: '50px' }}
            >
              CONTATO
            </a>
            
            <a 
              href="/blog" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'blog' 
                  ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                  : 'text-white hover:text-[#E8C061]'
              }`}
              style={{ lineHeight: '50px' }}
            >
              Blog
            </a>
          </nav> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-[#CFB16D] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-white hover:text-[#CFB16D]">HOME</a>
            <a href="/sobre" className="block px-3 py-2 text-white hover:text-[#CFB16D]">SOBRE</a>
            <a href="/servicos" className="block px-3 py-2 text-white hover:text-[#CFB16D]">SERVIÇOS</a>
            <a href="/contato" className="block px-3 py-2 text-white hover:text-[#CFB16D]">CONTATO</a>
            <a href="/blog" className="block px-3 py-2 text-white hover:text-[#CFB16D]">BLOG</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 