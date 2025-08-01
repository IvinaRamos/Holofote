import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  views: string | number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id,
  image, 
  title, 
  excerpt, 
  author, 
  authorImage, 
  date, 
  readTime, 
  views 
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
            <div className="bg-white border border-[#FDFAFA] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
      <div className="flex flex-col lg:flex-row lg:h-full">
        {/* Image Section - Left Side */}
        <div className="lg:w-1/2">
          <div 
            className="relative h-64 lg:h-full overflow-hidden cursor-pointer"
            onClick={handleClick}
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Content Section - Right Side */}
        <div className="lg:w-1/2 p-8 lg:p-12">
          {/* Title */}
                        <h3 
                          className={`text-2xl lg:text-3xl font-bold mb-4 line-clamp-3 leading-tight cursor-pointer transition-colors ${
                            isHovered ? 'text-[#CFB16D]' : 'text-[#2D2E2D]'
                          }`}
                          onClick={handleClick}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
            {title}
          </h3>
          
          {/* Excerpt */}
                        <p 
                          className={`text-base mb-6 line-clamp-4 leading-relaxed cursor-pointer transition-colors ${
                            isHovered ? 'text-[#CFB16D]' : 'text-[#2D2E2D]'
                          }`}
                          onClick={handleClick}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
            {excerpt}
          </p>
          
          {/* Author and Metadata */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Author Image */}
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src={authorImage} 
                  alt={`Foto do escritor: ${author}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Author Name */}
                              <span className="text-sm font-medium text-[#2D2E2D] hover:text-[#CFB16D] transition-colors cursor-pointer">
                {author}
              </span>
            </div>
            
            {/* Date and Read Time */}
            <div className="flex items-center space-x-2 text-xs text-[#2D2E2D]">
              <span title={date}>{date}</span>
                              <span className="w-1 h-1 bg-[#FDFAFA] rounded-full"></span>
              <span title={readTime}>{readTime}</span>
            </div>
          </div>
          
          {/* Views */}
                      <div className="text-xs text-[#2D2E2D]">
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 