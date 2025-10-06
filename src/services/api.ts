interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface CartItem {
  id: number;
  quantity: number;
}

const API_BASE_URL = 'https://techstore-backend-2-uybj.onrender.com/api';

export const api = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  
  checkout: async (items: CartItem[]): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            quantity: item.quantity
          }))
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during checkout:', error);
      throw error;
    }
  }
};
