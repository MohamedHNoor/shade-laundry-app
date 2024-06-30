import { createContext, useContext, useState } from 'react';
import { randomUUID } from 'expo-crypto';

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
    // if already in cart, increment quantity
    const existingItem = items.find(
      (item) => item.product === product && item.service === service.name
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem = {
      id: randomUUID(), // generate
      product,
      product_id: product.id,
      service: service.name,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  // update quantity
  const updateQuantity = (itemId, amount) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // total price
  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );

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
