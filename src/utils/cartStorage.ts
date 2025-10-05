import { CartItem } from '../types';

const CART_KEY = 'shopkart_cart';

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const loadCart = (): CartItem[] => {
  const data = localStorage.getItem(CART_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
