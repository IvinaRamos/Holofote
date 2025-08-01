import React, { useState, useEffect } from 'react';
import Header from './Header';
import BlogCard from './BlogCard';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import SocialMediaFloat from './SocialMediaFloat';
import fundoImg from '../../assets/img/fundoimg.png';
import homemLendo from '../../assets/img/homemlendo.png';
import { blogService, BlogPost } from '../../services/blogService';
import { sliderService, SliderData } from '../../services/sliderService';

const HomePage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [sliderData, setSliderData] = useState<SliderData[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [sliderLoading, setSliderLoading] = useState(true);
  const [blogError, setBlogError] = useState<string | null>(null);
  const [sliderError, setSliderError] = useState<string | null>(null);

  // Buscar dados do blog do Supabase
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setBlogLoading(true);
        const posts = await blogService.getAllPosts();
        setBlogPosts(posts);
        setBlogError(null);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setBlogError('Erro ao carregar os posts do blog');
      } finally {
        setBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Buscar dados do slider do Supabase
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        setSliderLoading(true);
        const slides = await sliderService.getActiveSlides();
        setSliderData(slides);
        setSliderError(null);
      } catch (err) {
        console.error('Erro ao carregar slides:', err);
        setSliderError('Erro ao carregar os slides');
      } finally {
        setSliderLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Social Media */}
      <SocialMediaFloat />
      
      {/* Background Image Fixa para Parallax */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fundoImg})`,
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
          <div className="flex items-center justify-start min-h-[60vh] px-12 sm:px-16 lg:px-24 xl:px-32">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-8">
                Uma nova luz sobre temas que já estão aí, mas ainda pedem presença.
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-lg lg:text-xl xl:text-2xl font-medium italic text-[#CFB16D] leading-relaxed mb-8">
                O Holofote nasce para aprofundar temas que já ecoam nas redes, mas que pedem tempo, sensibilidade e coragem para realmente nos atravessarem.
              </p>
              
              {/* CTA Button */}
              <button className="bg-[#CFB16D] hover:bg-[#CFB16D] text-[#FDFAFA] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 mb-16">
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* About Section - com fundo claro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: '#FDFAFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2E2D] mb-6">
                Transformando Vidas Através do Desenvolvimento Pessoal
              </h2>
              <p className="text-lg text-[#2D2E2D] leading-relaxed mb-6">
                Na Mind Your Best, acreditamos que cada pessoa tem um potencial ilimitado. 
                Nossa missão é ajudar você a descobrir e desenvolver esse potencial através 
                de técnicas comprovadas de alta performance e inteligência emocional.
              </p>
              <p className="text-lg text-[#2D2E2D] leading-relaxed mb-8">
                Com anos de experiência em coaching e desenvolvimento humano, oferecemos 
                soluções personalizadas que combinam ciência e prática para resultados 
                reais e duradouros.
              </p>
              <button className="bg-[#CFB16D] hover:bg-[#CFB16D] text-[#FDFAFA] font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                CONHEÇA NOSSA METODOLOGIA
              </button>
            </div>
            <div className="relative">
              <img 
                src={homemLendo}
                alt="Homem refletindo sobre leitura"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - com fundo claro */}
      <div className="relative z-10 py-20" style={{ backgroundColor: '#FDFAFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2E2D] mb-6">
              Blog
            </h2>
            <p className="text-xl text-[#2D2E2D] max-w-3xl mx-auto">
              Conteúdo exclusivo sobre autoconfiança, alta performance e desenvolvimento pessoal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {blogLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CFB16D] mx-auto"></div>
                <p className="mt-4 text-[#2D2E2D]">Carregando posts...</p>
              </div>
            ) : blogError ? (
              <div className="text-center py-8">
                <p className="text-red-600">{blogError}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-[#CFB16D] text-[#FDFAFA] px-4 py-2 rounded-lg"
                >
                  Tentar novamente
                </button>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-[#2D2E2D]">Nenhum post encontrado.</p>
              </div>
            ) : (
              blogPosts.map((post) => (
                <BlogCard 
                  key={post.id}
                  image={post.image_url}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  authorImage={post.author_image_url}
                  date={post.publication_date}
                  readTime={post.read_time}
                  views={post.views_count}
                />
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#CFB16D] hover:bg-[#CFB16D] text-[#FDFAFA] font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              VER TODOS OS POSTS
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider Section - Full Width */}
      <div className="relative z-10">
        {sliderLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CFB16D] mx-auto"></div>
            <p className="mt-4 text-white">Carregando slider...</p>
          </div>
        ) : sliderError ? (
          <div className="text-center py-8">
            <p className="text-red-400">{sliderError}</p>
          </div>
        ) : sliderData.length > 0 ? (
          <ImageSlider 
            slides={sliderData.map(slide => ({
              image: slide.image_url,
              quote: slide.quote,
              author: slide.author,
              credits: slide.credits
            }))} 
          />
        ) : null}
      </div>





      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
