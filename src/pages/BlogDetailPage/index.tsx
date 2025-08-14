import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogService, BlogPost } from '../../services/blogService';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import SocialMediaFloat from '../HomePage/SocialMediaFloat';
import fundoImg from '../../assets/img/fundoimg.png';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError('ID do post não fornecido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const postData = await blogService.getPostById(parseInt(id));
        
        if (postData) {
          setPost(postData);
          // Incrementar visualizações
          await blogService.incrementViews(parseInt(id));
        } else {
          setError('Post não encontrado');
        }
      } catch (err) {
        console.error('Erro ao carregar post:', err);
        setError('Erro ao carregar o post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CFB16D] mx-auto"></div>
          <p className="mt-4 text-[#2D2E2D]">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Post não encontrado'}</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#CFB16D] text-[#FDFAFA] px-6 py-2 rounded-lg hover:bg-[#CFB16D] transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

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
      
      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="mb-8 flex items-center text-[#CFB16D] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao blog
          </button>

          {/* Post Content */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={post.image_url} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Details */}
            <div className="p-8 lg:p-12">
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-[#2D2E2D] mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author and Metadata */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  {/* Author Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={post.author_image_url} 
                      alt={`Foto do escritor: ${post.author}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <p className="font-medium text-[#2D2E2D]">{post.author}</p>
                    <p className="text-sm text-gray-600">{formatDate(post.publication_date)}</p>
                  </div>
                </div>
                
                {/* Read Time and Views */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.read_time}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {post.views_count} visualizações
                  </span>
                </div>
              </div>

            {/* Excerpt */}
<div className="not-prose">
  {String(post.excerpt || '')
    .replace(/\\n/g, '\n') // converte \\n para quebra real
    .split(/\n{2,}/)       // separa por linhas em branco
    .map((para, i) => (
      <p key={i} className="text-lg text-[#2D2E2D] leading-relaxed mb-8">
        {para.trim()}
      </p>
    ))
  }
</div>

                
                {/* Placeholder for full content - you can expand this later */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic">
                    O conteúdo completo deste post será implementado em breve. 
                    Por enquanto, você pode ver o resumo acima.
                  </p>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-[#2D2E2D] mb-4">Compartilhar este post:</h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                    Twitter
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
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

export default BlogDetailPage; 
