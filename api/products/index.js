import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

// get all products
export const useProductList = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

// get single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

// create product
export const useInsertProduct = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    async mutationFn(data) {
      const { data: newProduct, error } = await supabase
        .from('products')
        .insert({
          name: data.name,
          image: data.image,
          price: data.price,
          quantity: data.quantity,
        })
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return newProduct;
    },
    async onSuccess() {
      await QueryClient.invalidateQueries(['products']);
    },
  });
};

// update product
export const useUpdateProduct = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    async mutationFn(data) {
      const { data: updatedProduct, error } = await supabase
        .from('products')
        .update({
          name: data.name,
          image: data.image,
          price: data.price,
        })
        .eq('id', data.id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return updatedProduct;
    },
    async onSuccess(_, { id }) {
      await QueryClient.invalidateQueries(['products']);
      await QueryClient.invalidateQueries(['products', id]);
    },
  });
};

// delete product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(id) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) {
        throw new Error(error.message);
      }
    },
    async onSuccess() {
      await queryClient.invalidateQueries(['products']);
    },
  });
};
