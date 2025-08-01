-- Criação da tabela blogPosts
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    author_image_url VARCHAR(500),
    publication_date DATE NOT NULL,
    read_time VARCHAR(50) NOT NULL,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção dos dados existentes
INSERT INTO blog_posts (
    image_url, 
    title, 
    excerpt, 
    author, 
    author_image_url, 
    publication_date, 
    read_time, 
    views_count
) VALUES 
(
    'https://static.wixstatic.com/media/ef2ab8_26e91c5d9ff445ac8b8f54475608f006~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_26e91c5d9ff445ac8b8f54475608f006~mv2.webp',
    'AUTOCONFIANÇA é uma Habilidade: 4 Estratégias Poderosas para Construí-la com Ciência e Persistência',
    'Descubra como desenvolver a AUTOCONFIANÇA como uma habilidade treinável. Explore estratégias validadas por especialistas como o Dr. Ivan Joseph, incluindo REPETIÇÃO, DIÁLOGO INTERNO, AFIRMAÇÕES e GESTÃO DE FEEDBACK. Essencial para atletas, líderes e pessoas em busca de ALTA PERFORMANCE.',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-06-05',
    '11 min de leitura',
    98
),
(
    'https://static.wixstatic.com/media/ef2ab8_c24b6cc1800e4c14b18078213b9a9cb9~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_c24b6cc1800e4c14b18078213b9a9cb9~mv2.webp',
    '5 Ferramentas Poderosas para Construir AUTOCONFIANÇA',
    'Descubra como desenvolver sua AUTOCONFIANÇA com 5 ferramentas práticas e comprovadas. Aplique essas estratégias e fortaleça sua mentalidade!',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-05-19',
    '8 min de leitura',
    188
),
(
    'https://static.wixstatic.com/media/ef2ab8_25b4aaa8ce414262946eaf105e7c579c~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_25b4aaa8ce414262946eaf105e7c579c~mv2.webp',
    'AUTOCONFIANÇA: A Base para a Alta Performance nos Esportes e na Vida',
    'Descubra como a AUTOCONFIANÇA impacta diretamente a PERFORMANCE em esportes, negócios e desafios pessoais. Saiba como desenvolvê-la.',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-04-25',
    '7 min de leitura',
    172
),
(
    'https://static.wixstatic.com/media/ef2ab8_97c5a5d0c812421e9d31d8c27a693319~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_97c5a5d0c812421e9d31d8c27a693319~mv2.webp',
    'Lições do Filme: AIR: A História por Trás do Logo',
    'Descubra como a Nike apostou tudo em Michael Jordan e revolucionou o marketing esportivo. Aprenda sobre ESTRATÉGIA, INOVAÇÃO e REDE DE APOIO',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-04-09',
    '3 min de leitura',
    129
),
(
    'https://static.wixstatic.com/media/ef2ab8_f65f8dffa326447990da1b371c76863e~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_f65f8dffa326447990da1b371c76863e~mv2.webp',
    'Mulheres no Esporte: Sonhem Mais Alto, Quebrem Barreiras e Liderem o Jogo',
    'Celebramos neste mês o Dia Internacional da Mulher com histórias inspiradoras de atletas que desafiaram estereótipos.',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-03-21',
    '5 min de leitura',
    107
),
(
    'https://static.wixstatic.com/media/ef2ab8_362fc3762c6b4de98ec5b5dde723f6f9~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_avif,quality_auto/ef2ab8_362fc3762c6b4de98ec5b5dde723f6f9~mv2.webp',
    'Guia Prático para Jovens Mulheres no Esporte: Como Reconhecer e Combater Abusos de Poder',
    'Descubra como jovens atletas podem identificar e evitar abusos de poder no esporte. Dicas, histórias e ferramentas de auxílio.',
    'Deivis R Tavares',
    'https://static.wixstatic.com/media/1bf8c6_39fafc19f9c4419c849b48261fad1d84%7Emv2.jpg',
    '2024-12-16',
    '19 min de leitura',
    107
);

-- Índices para melhorar performance
CREATE INDEX idx_blog_posts_publication_date ON blog_posts(publication_date DESC);
CREATE INDEX idx_blog_posts_author ON blog_posts(author);
CREATE INDEX idx_blog_posts_views_count ON blog_posts(views_count DESC);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comentários sobre a estrutura
COMMENT ON TABLE blog_posts IS 'Tabela para armazenar posts do blog do Holofote';
COMMENT ON COLUMN blog_posts.id IS 'Identificador único do post';
COMMENT ON COLUMN blog_posts.image_url IS 'URL da imagem principal do post';
COMMENT ON COLUMN blog_posts.title IS 'Título do post';
COMMENT ON COLUMN blog_posts.excerpt IS 'Resumo/extrato do conteúdo do post';
COMMENT ON COLUMN blog_posts.author IS 'Nome do autor do post';
COMMENT ON COLUMN blog_posts.author_image_url IS 'URL da imagem do autor';
COMMENT ON COLUMN blog_posts.publication_date IS 'Data de publicação do post';
COMMENT ON COLUMN blog_posts.read_time IS 'Tempo estimado de leitura';
COMMENT ON COLUMN blog_posts.views_count IS 'Número de visualizações do post';
COMMENT ON COLUMN blog_posts.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN blog_posts.updated_at IS 'Data e hora da última atualização do registro'; 