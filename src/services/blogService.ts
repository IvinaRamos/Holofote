import { supabase } from './supabaseClient';

export interface BlogPost {
  id: number;
  image_url: string;
  title: string;
  excerpt: string;
  author: string;
  author_image_url: string;
  publication_date: string;
  read_time: string;
  views_count: number;
  created_at: string;
  updated_at: string;
}

export const blogService = {
  // Buscar todos os posts do blog
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('publication_date', { ascending: false });

      if (error) {
        console.error('Erro ao buscar posts:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Erro no serviço de blog:', error);
      throw error;
    }
  },

  // Buscar posts por autor
  async getPostsByAuthor(author: string): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('author', author)
        .order('publication_date', { ascending: false });

      if (error) {
        console.error('Erro ao buscar posts por autor:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Erro no serviço de blog:', error);
      throw error;
    }
  },

  // Buscar post por ID
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Erro ao buscar post por ID:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de blog:', error);
      throw error;
    }
  },

  // Incrementar contador de visualizações
  async incrementViews(id: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ views_count: supabase.rpc('increment_views', { post_id: id }) })
        .eq('id', id);

      if (error) {
        console.error('Erro ao incrementar visualizações:', error);
        throw error;
      }
    } catch (error) {
      console.error('Erro no serviço de blog:', error);
      throw error;
    }
  }
}; 