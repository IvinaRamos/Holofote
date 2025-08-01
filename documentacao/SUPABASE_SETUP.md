# Configuração do Supabase

## 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=sua_url_do_supabase_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase_aqui
```

## 2. Executar o Schema SQL

Execute os seguintes arquivos SQL no seu banco de dados Supabase:

1. **`database_schema.sql`** - Para criar a tabela `blog_posts` e inserir os dados de exemplo
2. **`slider_schema.sql`** - Para criar a tabela `slider_data` e inserir os slides de exemplo

## 3. Estrutura das Tabelas

### Tabela `blog_posts`
Contém os seguintes campos:

- `id`: Identificador único (SERIAL PRIMARY KEY)
- `image_url`: URL da imagem principal do post
- `title`: Título do post
- `excerpt`: Resumo/extrato do conteúdo
- `author`: Nome do autor
- `author_image_url`: URL da imagem do autor
- `publication_date`: Data de publicação
- `read_time`: Tempo estimado de leitura
- `views_count`: Contador de visualizações
- `created_at`: Data de criação do registro
- `updated_at`: Data da última atualização

### Tabela `slider_data`
Contém os seguintes campos:

- `id`: Identificador único (SERIAL PRIMARY KEY)
- `image_url`: URL da imagem do slide
- `quote`: Citação/frase principal do slide
- `author`: Autor da citação
- `credits`: Créditos adicionais (opcional)
- `display_order`: Ordem de exibição dos slides
- `is_active`: Indica se o slide está ativo para exibição
- `created_at`: Data de criação do registro
- `updated_at`: Data da última atualização

## 4. Funcionalidades Implementadas

### Blog Posts
- ✅ Buscar todos os posts do blog
- ✅ Ordenação por data de publicação (mais recentes primeiro)
- ✅ Buscar posts por autor
- ✅ Buscar post por ID
- ✅ Incrementar contador de visualizações
- ✅ Loading states e tratamento de erros
- ✅ Interface TypeScript completa

### Slider Data
- ✅ Buscar slides ativos ordenados por display_order
- ✅ Buscar todos os slides (incluindo inativos)
- ✅ Buscar slide por ID
- ✅ Criar, atualizar e deletar slides
- ✅ Ativar/desativar slides
- ✅ Reordenar slides
- ✅ Loading states e tratamento de erros
- ✅ Interface TypeScript completa

## 5. Como Usar

O componente `HomePage` agora busca automaticamente os dados do Supabase quando é montado. Os dados são exibidos com:

### Blog Posts
- Loading spinner durante o carregamento
- Mensagem de erro se houver problemas
- Mapeamento correto dos campos do banco para o componente

### Slider Data
- Loading spinner durante o carregamento
- Mensagem de erro se houver problemas
- Mapeamento correto dos campos do banco para o componente ImageSlider
- Exibição apenas de slides ativos (`is_active = true`)
- Ordenação por `display_order` 