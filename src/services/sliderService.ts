import { supabase } from './supabaseClient';

export interface SliderData {
  id: number;
  image_url: string;
  quote: string;
  author: string;
  credits?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const sliderService = {
  // Buscar todos os slides ativos ordenados por display_order
  async getActiveSlides(): Promise<SliderData[]> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Erro ao buscar slides:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Buscar todos os slides (incluindo inativos)
  async getAllSlides(): Promise<SliderData[]> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Erro ao buscar todos os slides:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Buscar slide por ID
  async getSlideById(id: number): Promise<SliderData | null> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Erro ao buscar slide por ID:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Criar novo slide
  async createSlide(slideData: Omit<SliderData, 'id' | 'created_at' | 'updated_at'>): Promise<SliderData> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .insert([slideData])
        .select()
        .single();

      if (error) {
        console.error('Erro ao criar slide:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Atualizar slide
  async updateSlide(id: number, slideData: Partial<SliderData>): Promise<SliderData> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .update(slideData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Erro ao atualizar slide:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Deletar slide
  async deleteSlide(id: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('slider_data')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Erro ao deletar slide:', error);
        throw error;
      }
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Ativar/desativar slide
  async toggleSlideActive(id: number, isActive: boolean): Promise<SliderData> {
    try {
      const { data, error } = await supabase
        .from('slider_data')
        .update({ is_active: isActive })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Erro ao alterar status do slide:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  },

  // Reordenar slides
  async reorderSlides(slideOrders: { id: number; display_order: number }[]): Promise<void> {
    try {
      const updates = slideOrders.map(({ id, display_order }) => ({
        id,
        display_order
      }));

      const { error } = await supabase
        .from('slider_data')
        .upsert(updates, { onConflict: 'id' });

      if (error) {
        console.error('Erro ao reordenar slides:', error);
        throw error;
      }
    } catch (error) {
      console.error('Erro no serviço de slider:', error);
      throw error;
    }
  }
}; 