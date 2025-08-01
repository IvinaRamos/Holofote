-- Criação da tabela slider_data
CREATE TABLE slider_data (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    quote TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    credits TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção dos dados existentes
INSERT INTO slider_data (
    image_url, 
    quote, 
    author, 
    credits, 
    display_order
) VALUES 
(
    'https://static.wixstatic.com/media/ef2ab8_c8cb499073e446a999a6a60aa3e93813~mv2.jpg/v1/fill/w_996,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_c8cb499073e446a999a6a60aa3e93813~mv2.jpg',
    'A VIDA VAI FICANDO CADA VEZ MAIS DURA PERTO DO TOPO',
    'FRIEDRICH NIETZSCHE',
    'Amanda Criscuoli no Boulder Sub Atomic N. Penguin (V4)\nArch Rock - Central Park Center - New York/US',
    1
),
(
    'https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg',
    'O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.',
    'Winston Churchill',
    NULL,
    2
),
(
    'https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg',
    'A inteligência emocional é a chave para o sucesso na vida e nos negócios.',
    'Daniel Goleman',
    NULL,
    3
),
(
    'https://static.wixstatic.com/media/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg/v1/fill/w_1800,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef2ab8_23cdee4b1a5e496096a83c7268496ae6~mv2.jpg',
    'O desenvolvimento pessoal é a base para o desenvolvimento profissional.',
    'Mind Your Best',
    NULL,
    4
);

-- Índices para melhorar performance
CREATE INDEX idx_slider_data_display_order ON slider_data(display_order ASC);
CREATE INDEX idx_slider_data_is_active ON slider_data(is_active);

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_slider_data_updated_at 
    BEFORE UPDATE ON slider_data 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comentários sobre a estrutura
COMMENT ON TABLE slider_data IS 'Tabela para armazenar slides do carrossel de imagens do Holofote';
COMMENT ON COLUMN slider_data.id IS 'Identificador único do slide';
COMMENT ON COLUMN slider_data.image_url IS 'URL da imagem do slide';
COMMENT ON COLUMN slider_data.quote IS 'Citação/frase principal do slide';
COMMENT ON COLUMN slider_data.author IS 'Autor da citação';
COMMENT ON COLUMN slider_data.credits IS 'Créditos adicionais (opcional)';
COMMENT ON COLUMN slider_data.display_order IS 'Ordem de exibição dos slides';
COMMENT ON COLUMN slider_data.is_active IS 'Indica se o slide está ativo para exibição';
COMMENT ON COLUMN slider_data.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN slider_data.updated_at IS 'Data e hora da última atualização do registro'; 