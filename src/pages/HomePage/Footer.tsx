import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2E2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="https://static.wixstatic.com/media/ef2ab8_a761222198a14031ae22da4b22eaadd2~mv2.png/v1/fill/w_144,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-mind-your-best-color-branco.png"
              alt="Logomarca Mind Your Best"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transformando vidas através do desenvolvimento pessoal e profissional. 
              Nossa missão é ajudar você a alcançar seu potencial máximo com alta performance 
              e inteligência emocional.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E8C061] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E8C061] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E8C061] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E8C061] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8C061]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#E8C061] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-[#E8C061] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-300 hover:text-[#E8C061] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-[#E8C061] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-[#E8C061] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8C061]">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium">Email:</p>
                <a href="mailto:contato@mindyourbest.com.br" className="hover:text-[#E8C061] transition-colors">
                  contato@mindyourbest.com.br
                </a>
              </div>
              <div>
                <p className="font-medium">Telefone:</p>
                <a href="tel:+5511999999999" className="hover:text-[#E8C061] transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div>
                <p className="font-medium">WhatsApp:</p>
                <a href="https://wa.me/5511999999999" className="hover:text-[#E8C061] transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div>
                <p className="font-medium">Endereço:</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Mind Your Best. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 