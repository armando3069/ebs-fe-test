import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { fetchProducts } from "../API/fetch";

import { useLocalStorage } from "../hooks/useLocalStorage";
// types
type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {

  id: number;
  quantity: number;
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  products: Product[];
  clearCart:()=>void;
};

 const ShopCartContext = createContext({} as CartContext);

export function useShoppingCart() {
  return useContext(ShopCartContext);
}
export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  useEffect(() => {
    const getProductList = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProductList();
  }, []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function clearCart() {
    setCartItems([]);
  }

  return (
    <ShopCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        products,
        cartQuantity,
        clearCart
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}
