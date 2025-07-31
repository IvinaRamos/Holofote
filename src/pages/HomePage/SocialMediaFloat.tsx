import React from 'react';

const SocialMediaFloat: React.FC = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <a
          href="https://www.instagram.com/deivistavares/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-12 h-12 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group"
          aria-label="Instagram"
        >
          <img 
            src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81af6121f84c41a5b4391d7d37fce12a.png"
            alt="Instagram"
            className="w-7 h-7 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </a>
        
        <a
          href="https://www.facebook.com/MindYour.Best"
          target="_blank"
          rel="noreferrer noopener"
          className="w-12 h-12 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group"
          aria-label="Facebook"
        >
          <img 
            src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
            alt="Facebook"
            className="w-7 h-7 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </a>
        
        <a
          href="https://www.linkedin.com/in/deivistavares/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-12 h-12 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <img 
            src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7528824071724d12a3e6c31eee0b40d4.png"
            alt="LinkedIn"
            className="w-7 h-7 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </a>
        
        <a
          href="https://www.youtube.com/@mindyourbest"
          target="_blank"
          rel="noreferrer noopener"
          className="w-12 h-12 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group"
          aria-label="YouTube"
        >
          <img 
            src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/203dcdc2ac8b48de89313f90d2a4cda1.png"
            alt="YouTube"
            className="w-7 h-7 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaFloat; 