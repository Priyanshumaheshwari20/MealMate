import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavoriteFood = (food) => {
    if (!food) return;

    const exists = favorites.find(
      (item) => item._id === food._id
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item._id !== food._id
        )
      );
    } else {
      setFavorites((prev) => [...prev, food]);
    }
  };
  const removeFromCart = (id) => {
    setFavorites((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        toggleFavoriteFood,
        removeFromCart
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      "useFavorite must be used inside FavoriteProvider"
    );
  }

  return context;
};