import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2D2E2D] z-50 border-b border-[#8F8F8F]/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="https://static.wixstatic.com/media/ef2ab8_a761222198a14031ae22da4b22eaadd2~mv2.png/v1/fill/w_144,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-mind-your-best-color-branco.png"
                alt="Logomarca Mind Your Best"
                className="h-12 w-auto object-contain"
                width="144"
                height="80"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
            
            <a 
              href="/sobre" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'sobre' 
                  ? 'text-[#E8C061] border-b-2 border-[#E8C061] pb-1' 
                  : 'text-white hover:text-[#E8C061]'
              }`}
              style={{ lineHeight: '50px' }}
            >
              SOBRE
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
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
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
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
            </div>
            
            <a 
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
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="flex items-center space-x-2 text-white hover:text-[#E8C061] transition-colors">
              <div className="w-8 h-8 bg-[#E8C061] rounded-full flex items-center justify-center">
                <svg 
                  data-bbox="0 0 50 50" 
                  data-type="shape" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 50 50"
                  className="text-[#2D2E2D]"
                >
                  <g>
                    <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0" fill="currentColor"></path>
                  </g>
                </svg>
              </div>
              <span className="text-sm">Fazer login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-[#E8C061] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2D2E2D] border-t border-[#8F8F8F]">
            <a href="/" className="block px-3 py-2 text-white hover:text-[#E8C061]">HOME</a>
            <a href="/sobre" className="block px-3 py-2 text-white hover:text-[#E8C061]">SOBRE</a>
            <a href="/servicos" className="block px-3 py-2 text-white hover:text-[#E8C061]">SERVIÇOS</a>
            <a href="/contato" className="block px-3 py-2 text-white hover:text-[#E8C061]">CONTATO</a>
            <a href="/blog" className="block px-3 py-2 text-white hover:text-[#E8C061]">BLOG</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 