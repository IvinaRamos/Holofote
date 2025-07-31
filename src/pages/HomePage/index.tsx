import React from 'react';
import Header from './Header';
import BlogCard from './BlogCard';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import SocialMediaFloat from './SocialMediaFloat';

const HomePage: React.FC = () => {
  // Dados do blog
  const blogPosts = [
    {
      image: "https://static.wixstatic.com/media/ef2ab8_26e91c5d9ff445ac8b8f54475608f006~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_26e91c5d9ff445ac8b8f54475608f006~mv2.webp",
      title: "AUTOCONFIANÇA é uma Habilidade: 4 Estratégias Poderosas para Construí-la com Ciência e Persistência",
      excerpt: "Descubra como desenvolver a AUTOCONFIANÇA como uma habilidade treinável. Explore estratégias validadas por especialistas como o Dr. Ivan Joseph, incluindo REPETIÇÃO, DIÁLOGO INTERNO, AFIRMAÇÕES e GESTÃO DE FEEDBACK. Essencial para atletas, líderes e pessoas em busca de ALTA PERFORMANCE.",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "5 de jun.",
      readTime: "11 min de leitura",
      views: "98 visualizações"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_c24b6cc1800e4c14b18078213b9a9cb9~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_c24b6cc1800e4c14b18078213b9a9cb9~mv2.webp",
      title: "5 Ferramentas Poderosas para Construir AUTOCONFIANÇA",
      excerpt: "Descubra como desenvolver sua AUTOCONFIANÇA com 5 ferramentas práticas e comprovadas. Aplique essas estratégias e fortaleça sua mentalidade!",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "19 de mai.",
      readTime: "8 min de leitura",
      views: "188 visualizações"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_25b4aaa8ce414262946eaf105e7c579c~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_25b4aaa8ce414262946eaf105e7c579c~mv2.webp",
      title: "AUTOCONFIANÇA: A Base para a Alta Performance nos Esportes e na Vida",
      excerpt: "Descubra como a AUTOCONFIANÇA impacta diretamente a PERFORMANCE em esportes, negócios e desafios pessoais. Saiba como desenvolvê-la.",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "25 de abr.",
      readTime: "7 min de leitura",
      views: "172 visualizações"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_97c5a5d0c812421e9d31d8c27a693319~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_97c5a5d0c812421e9d31d8c27a693319~mv2.webp",
      title: "Lições do Filme: AIR: A História por Trás do Logo",
      excerpt: "Descubra como a Nike apostou tudo em Michael Jordan e revolucionou o marketing esportivo. Aprenda sobre ESTRATÉGIA, INOVAÇÃO e REDE DE APOIO",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "9 de abr.",
      readTime: "3 min de leitura",
      views: "129 visualizações"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_f65f8dffa326447990da1b371c76863e~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_f65f8dffa326447990da1b371c76863e~mv2.webp",
      title: "Mulheres no Esporte: Sonhem Mais Alto, Quebrem Barreiras e Liderem o Jogo",
      excerpt: "Celebramos neste mês o Dia Internacional da Mulher com histórias inspiradoras de atletas que desafiaram estereótipos.",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "21 de mar.",
      readTime: "5 min de leitura",
      views: "107 visualizações"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_362fc3762c6b4de98ec5b5dde723f6f9~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_362fc3762c6b4de98ec5b5dde723f6f9~mv2.webp",
      title: "Guia Prático para Jovens Mulheres no Esporte: Como Reconhecer e Combater Abusos de Poder",
      excerpt: "Descubra como jovens atletas podem identificar e evitar abusos de poder no esporte. Dicas, histórias e ferramentas de auxílio.",
      author: "Deivis R Tavares",
      authorImage: "https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg",
      date: "16 de dez. de 2024",
      readTime: "19 min de leitura",
      views: "107 visualizações"
    }
  ];

  // Dados do slider
  const sliderData = [
    {
      image: "https://static.wixstatic.com/media/ef2ab8_c8cb499073e446a999a6a60aa3e93813~mv2.jpg/v1/fill/w_996,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_c8cb499073e446a999a6a60aa3e93813~mv2.jpg",
      quote: "A VIDA VAI FICANDO CADA VEZ MAIS DURA PERTO DO TOPO",
      author: "FRIEDRICH NIETZSCHE",
      credits: "Amanda Criscuoli no Boulder Sub Atomic N. Penguin (V4)\nArch Rock - Central Park Center - New York/US"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg",
      quote: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
      author: "Winston Churchill"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg",
      quote: "A inteligência emocional é a chave para o sucesso na vida e nos negócios.",
      author: "Daniel Goleman"
    },
    {
      image: "https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg",
      quote: "O desenvolvimento pessoal é a base para o desenvolvimento profissional.",
      author: "Mind Your Best"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Social Media */}
      <SocialMediaFloat />
      
      {/* Background Image Fixa para Parallax */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg')`,
          backgroundAttachment: "fixed",
          filter: 'brightness(40%)'
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Content */}
        <div className="relative z-10">
          <Header />
          
          {/* Hero Text Content */}
          <div className="flex items-center justify-start min-h-screen px-12 sm:px-16 lg:px-24 xl:px-32">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
                ALCANCE SEU<br />
                POTENCIAL<br />
                MÁXIMO!!
              </h1>
              
              {/* Subtitle */}
              <p className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium italic text-[#E8C061] leading-relaxed mb-8">
                Alta Performance e<br />
                Inteligência Emocional para<br />
                uma Vida Equilibrada
              </p>
              
              {/* CTA Button */}
              <button className="bg-[#E8C061] hover:bg-[#d4b050] text-[#2D2E2D] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 mb-16">
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - com fundo semi-transparente para rolar por cima da imagem */}
      <div className="relative z-10 py-20 bg-[#E8C061]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <p className="text-lg leading-relaxed mb-6">
                Conteúdo para tocar, inspirar, ajudar, sensibilizar, conscientizar e contribuir para despertar o potencial que existe em cada um de nós.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Acreditamos que cada ser humano é dotado de todas as ferramentas para fazer parte deste mundo com propósitos e habilidades únicas. Muitas vezes, ou por fatores externos, ou por falta de consciência, ou mesmo por falta de um caminho a seguir e algumas vezes por fatores internos, crenças e vícios emocionais, deixamos de nos conectar com estas habilidades, desperdiçando um potencial incrível e muitas vezes vivendo uma vida mediana, muito abaixo do potencial que poderia chegar.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Temos o conhecimento e as ferramentas certas para ajudar você a alcançar o seu potencial máximo de desenvolvimento pessoal.
              </p>
              
              <p className="text-lg font-bold">
                [ATLETAS | INDIVÍDUOS | FAMÍLIAS | NEGÓCIOS]
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/ef2ab8_196036dac5994bb0a7e2097b427e7083~mv2.jpg/v1/fill/w_498,h_630,al_l,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_196036dac5994bb0a7e2097b427e7083~mv2.jpg"
                alt="Escaladora Esportiva Amanda Criscuoli escalando a Via O Herege e Fabiane Criscuoli na Segurança - Gruta da 3a Légua - Caxias do Sul - RS"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              
              {/* Overlay Text */}
              <div className="absolute top-4 right-4 text-white text-xs">
                <p>Amanda C Tavares na Via O Herege (9a BR)</p>
                <p>Fabiane P Criscuoli na segurança</p>
                <p className="italic">Gruta da 3a Légua - Caxias do Sul/RS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - com fundo cinza escuro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: 'rgb(45, 46, 45)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformando Vidas Através do Desenvolvimento Pessoal
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Na Mind Your Best, acreditamos que cada pessoa tem um potencial ilimitado. 
                Nossa missão é ajudar você a descobrir e desenvolver esse potencial através 
                de técnicas comprovadas de alta performance e inteligência emocional.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Com anos de experiência em coaching e desenvolvimento humano, oferecemos 
                soluções personalizadas que combinam ciência e prática para resultados 
                reais e duradouros.
              </p>
              <button className="bg-[#E8C061] hover:bg-[#d4b050] text-[#2D2E2D] font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                CONHEÇA NOSSA METODOLOGIA
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg"
                alt="Desenvolvimento Pessoal"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - com fundo cinza escuro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: 'rgb(45, 46, 45)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para o seu desenvolvimento pessoal e profissional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coach Individual */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8C061] rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">Coach Individual</h3>
              <p className="text-gray-600 leading-relaxed">
                Sessões personalizadas de coaching para desenvolver suas habilidades 
                e alcançar seus objetivos específicos.
              </p>
            </div>

            {/* Perfil Comportamental */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8C061] rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">Perfil Comportamental</h3>
              <p className="text-gray-600 leading-relaxed">
                Análise detalhada do seu perfil comportamental para melhor 
                autoconhecimento e desenvolvimento.
              </p>
            </div>

            {/* Inteligência Emocional */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8C061] rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D2E2D] mb-4">Inteligência Emocional</h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvimento da inteligência emocional para melhor 
                relacionamento interpessoal e liderança.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - com fundo cinza escuro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: 'rgb(45, 46, 45)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conteúdo exclusivo sobre autoconfiança, alta performance e desenvolvimento pessoal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#E8C061] hover:bg-[#d4b050] text-[#2D2E2D] font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              VER TODOS OS POSTS
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider Section - Full Width */}
      <div className="relative z-10">
        <ImageSlider slides={sliderData} />
      </div>

      {/* Contact Section - com fundo cinza escuro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: 'rgb(45, 46, 45)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Entre em Contato
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Pronto para transformar sua vida? Entre em contato conosco e descubra 
                como podemos ajudar você a alcançar seu potencial máximo.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E8C061] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">contato@mindyourbest.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E8C061] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefone</p>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E8C061] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2D2E2D]">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Endereço</p>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-200/95 backdrop-blur-sm rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4">
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                  </svg>
                  <p>Mapa do Google será integrado aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
