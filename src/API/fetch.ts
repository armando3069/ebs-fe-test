import { Product } from '../utils/interface';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};
