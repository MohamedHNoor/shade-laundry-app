import { createContext, useContext, useState } from 'react';

const BasketContext = createContext({
  items: [],
  selectedService: null,
  addItem: () => {},
  updateQuantity: () => {},
  setSelectedService: () => {},
  total: 0,
  checkout: () => {},
});

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  // add items
  const addItem = (product, service) => {
    console.log('Added to basket');
  };

  // update quantity
  const updateQuantity = () => {};

  // total price
  const total = 0;

  return (
    <BasketContext.Provider
      value={{
        items,
        selectedService,
        addItem,
        updateQuantity,
        setSelectedService,
        total,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasket = () => useContext(BasketContext);
