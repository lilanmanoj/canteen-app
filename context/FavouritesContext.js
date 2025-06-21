import React, { createContext, useContext, useState } from 'react';

// Creating a context to share favourites state across components
const FavouritesContext = createContext();

// FavouritesProvider component to wrap around the app or specific components
export function FavouritesProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);

  const toggleFavourite = (item) => {
    setSavedItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        // Remove from favourites
        return prev.filter((i) => i.id !== item.id);
      } else {
        // Add to favourites
        return [...prev, item];
      }
    });
  };

  const isFavourite = (id) => savedItems.some((i) => i.id === id);

  return (
    <FavouritesContext.Provider value={{ savedItems, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
