import { createContext, useContext, useState, useRef, useEffect } from "react";
                                                                                                                                              
const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [showCartPopup, setShowCartPopup] = useState(false);

  const popupTimerRef = useRef(null);

  const addToCart = (food) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === food._id);

      if (existing) {
        return prev.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...food, quantity: 1 }];
      }
    });

    setShowCartPopup(true);
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    popupTimerRef.current = setTimeout(() => {
      setShowCartPopup(false);
    }, 5500);
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item,
             quantity: item.quantity + 1 }
          : item
      )
    );

      
  };



  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  
  };


  // ✅ FIXED: removeFromCart
  
  const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item._id !== id));
  
};


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        showCartPopup,
        setShowCartPopup,
            removeFromCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);