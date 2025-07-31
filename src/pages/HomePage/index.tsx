import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faBars, 
  faTimes, 
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChevronUp,
  faChevronDown,
  faUser,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#2D2E2D] relative">
      {/* Header Component */}
      <Header currentPage="home" />

      {/* Left Sidebar - Social Media */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Sidebar - Navigation Arrows */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <button className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
          </button>
          <button className="text-white hover:text-[#E8C061] transition-colors">
            <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-16 h-16 bg-[#E8C061] rounded-full flex items-center justify-center shadow-lg hover:bg-[#B39244] transition-colors">
          <FontAwesomeIcon icon={faComments} className="w-7 h-7 text-[#2D2E2D]" />
        </button>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        {/* Background Image - Moves with the section */}
        <div className="absolute inset-0">
          <img 
            src="https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1593,h_1403,al_c,q_90,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg"
            alt="Atleta de Escalada Esportiva Amanda Criscuoli e seus pais escalando a via Premonição na Gruta da 3a Légua em Caxias do Sul - RS"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: '50% 50%' }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2E2D]/80 via-[#2D2E2D]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-center lg:text-left">
              {/* Main Title - Exactly like the original */}
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight" style={{ letterSpacing: '-0.1em' }}>
                <span className="text-[#E8C061]">ALCANCE SEU POTENCIAL MÁXIMO!!</span>
              </h1>
              
              {/* Subtitle - Exactly like the original */}
              <p className="text-2xl lg:text-4xl text-[#E8C061] italic mb-12 leading-normal font-montserrat" style={{ letterSpacing: 'normal' }}>
                Alta Performance e Inteligência Emocional para uma Vida Equilibrada
              </p>
              
              {/* Button with SVG icon - Exactly like the original */}
              <div className="flex items-center space-x-4">
                <button className="bg-[#E8C061] text-[#2D2E2D] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#B39244] transition-colors flex items-center">
                  SAIBA MAIS
                </button>
                
                {/* SVG Arrow Icon - Exactly like the original */}
                <div className="w-12 h-12">
                  <svg preserveAspectRatio="xMidYMid meet" viewBox="20 21.44 160 157.12" height="48" width="48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Services">
                    <g>
                      <path fill="#2D2E2D" d="M101.44 21.44L82.336 40.544l43.773 43.777H20v27.014h110.466l-48.13 48.129 19.104 19.096L180 100.004 101.44 21.44z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Empty space to let the image show through */}
            <div className="relative lg:block hidden">
              {/* This div is intentionally empty to let the background image show through */}
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Two columns layout */}
      <section className="py-20 bg-white relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2E2D] mb-6">
                Sobre Nós
              </h2>
              <p className="text-lg lg:text-xl text-[#8F8F8F] mb-8 leading-relaxed">
                Temos o conhecimento e as ferramentas certas para ajudar você a alcançar o seu potencial máximo de desenvolvimento pessoal.
              </p>
              <p className="text-lg lg:text-xl text-[#8F8F8F] mb-8 leading-relaxed">
                Nossa missão é promover a alta performance e inteligência emocional para uma vida equilibrada, através de metodologias comprovadas e acompanhamento personalizado.
              </p>
              <button className="bg-[#E8C061] text-[#2D2E2D] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#B39244] transition-colors">
                CONHEÇA MAIS
              </button>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/ef2ab8_196036dac5994bb0a7e2097b427e7083~mv2.jpg/v1/fill/w_1010,h_1260,al_l,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_196036dac5994bb0a7e2097b427e7083~mv2.jpg"
                alt="Escaladora Esportiva Amanda Criscuoli escalando a Via 'O Herege' e Fabiane Criscuoli na Segurança - Gruta da 3a Légua - Caxias do Sul - RS"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{ objectPosition: '0% 50%' }}
                width="505"
                height="630"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2E2D] mb-6">Sobre Nós</h2>
            <p className="text-xl text-[#8F8F8F] max-w-4xl mx-auto">
              Temos o conhecimento e as ferramentas certas para ajudar você a alcançar o seu potencial máximo de desenvolvimento pessoal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#E2E2E2] p-8 rounded-lg hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors">
              <h3 className="text-xl font-bold mb-2">ATLETAS</h3>
            </div>
            <div className="bg-[#E2E2E2] p-8 rounded-lg hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors">
              <h3 className="text-xl font-bold mb-2">INDIVÍDUOS</h3>
            </div>
            <div className="bg-[#E2E2E2] p-8 rounded-lg hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors">
              <h3 className="text-xl font-bold mb-2">FAMÍLIAS</h3>
            </div>
            <div className="bg-[#E2E2E2] p-8 rounded-lg hover:bg-[#E8C061] hover:text-[#2D2E2D] transition-colors">
              <h3 className="text-xl font-bold mb-2">NEGÓCIOS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-[#E2E2E2]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2E2D] mb-6">NOSSOS SERVIÇOS</h2>
            <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
              VEJA TODOS
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#E8C061] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#2D2E2D]">C</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">COACH INDIVIDUAL</h3>
              <p className="text-[#8F8F8F] mb-6">
                Promove o Desempenho Pessoal e a Alta Performance
              </p>
              <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
                SAIBA MAIS &gt;
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#B39244] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">PERFIL COMPORTAMENTAL</h3>
              <p className="text-[#8F8F8F] mb-6">
                Proporciona Autoconhecimento e Desenvolvimento de suas Potencialidades
              </p>
              <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
                SAIBA MAIS &gt;
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2D2E2D] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#E8C061]">I</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">INTELIGÊNCIA EMOCIONAL</h3>
              <p className="text-[#8F8F8F] mb-6">
                Capacidade de identificar e lidar com as Emoções e Sentimentos
              </p>
              <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
                SAIBA MAIS &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2E2D] mb-6">BLOG</h2>
            <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
              IR PARA O BLOG
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[#E2E2E2]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2D2E2D] mb-3">
                  AUTOCONFIANÇA é uma Habilidade: 4 Estratégias Poderosas para Construí-la
                </h3>
                <p className="text-[#8F8F8F] mb-4">
                  Descubra como desenvolver a AUTOCONFIANÇA como uma habilidade treinável...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8F8F8F]">Deivis R Tavares</span>
                  <span className="text-sm text-[#8F8F8F]">5 de jun. • 11 min de leitura</span>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[#E2E2E2]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2D2E2D] mb-3">
                  5 Ferramentas Poderosas para Construir AUTOCONFIANÇA
                </h3>
                <p className="text-[#8F8F8F] mb-4">
                  Descubra como desenvolver sua AUTOCONFIANÇA com 5 ferramentas práticas...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8F8F8F]">Deivis R Tavares</span>
                  <span className="text-sm text-[#8F8F8F]">19 de mai. • 8 min de leitura</span>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[#E2E2E2]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2D2E2D] mb-3">
                  AUTOCONFIANÇA: A Base para a Alta Performance nos Esportes e na Vida
                </h3>
                <p className="text-[#8F8F8F] mb-4">
                  Descubra como a AUTOCONFIANÇA impacta diretamente a PERFORMANCE...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8F8F8F]">Deivis R Tavares</span>
                  <span className="text-sm text-[#8F8F8F]">25 de abr. • 7 min de leitura</span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <button className="text-[#E8C061] font-bold hover:text-[#B39244] transition-colors">
              VEJA TODOS OS POST
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#E2E2E2]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl lg:text-4xl font-bold text-[#2D2E2D] mb-6">
            "As montanhas da vida não existem apenas para que você chegue no topo, mas para que você aprenda o valor da escalada"
          </blockquote>
          <cite className="text-lg text-[#8F8F8F]">AUTOR DESCONHECIDO</cite>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#2D2E2D] mb-8">CONTATO</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#E8C061] mt-1" />
                  <div>
                    <p className="font-bold text-[#2D2E2D]">INSTITUTO CALDEIRA</p>
                    <p className="text-[#8F8F8F]">Tv. São José, 455 - Navegantes</p>
                    <p className="text-[#8F8F8F]">90240-200 Porto Alegre, RS - BRASIL</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#E8C061]" />
                  <span className="text-[#8F8F8F]">contato@mindyour.best</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="text-[#E8C061]" />
                  <span className="text-[#8F8F8F]">+55 51 98141-5101 | 98141-5125</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <button className="bg-[#E8C061] text-[#2D2E2D] px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#B39244] transition-colors">
                Entrar em Contato &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2E2D] text-white py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#E8C061]">Mind Your Best</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#F8F8F8F] hover:text-[#E8C061] transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">
                  <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-[#E8C061]">Menu</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">HOME</a></li>
                <li><a href="#sobre" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">SOBRE</a></li>
                <li><a href="#servicos" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">SERVIÇOS</a></li>
                <li><a href="#blog" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">BLOG</a></li>
                <li><a href="#contato" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">CONTATO</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-[#E8C061]">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">Política Privacidade</a></li>
                <li><a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">Termos</a></li>
                <li><a href="#" className="text-[#8F8F8F] hover:text-[#E8C061] transition-colors">Reembolso - Trocas</a></li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#8F8F8F] text-sm">
                © 2021 by Mind Your Best
              </p>
              <p className="text-[#8F8F8F] text-sm mt-2">
                Deivis R. Tavares - CPF 551.716.300-97
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
