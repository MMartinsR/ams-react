import { ShopProductComponent } from "./shop-exercise/ShopProductComponent";
import { createContext, ReactNode, useContext, useState } from "react";

interface ShopCartContextType {
  cartItems: ShopProductComponent[];
  addToCart: (product: ShopProductComponent) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<ShopCartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ShopProductComponent[]>([]);

  const addToCart = (product: ShopProductComponent) => {
    setCartItems((current) => [...current, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((current) => current.filter((product) => id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }

  return context;
}
