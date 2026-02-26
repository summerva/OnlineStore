import { createContext, useEffect, useReducer } from "react";

const OrdersContext = createContext();

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QTY: "UPDATE_QTY",
  TOGGLE_ITEM: "TOGGLE_ITEM",
  CLEAR_CART: "CLEAR_CART",
  CREATE_ORDER: "CREATE_ORDER",
  CLEAR_SELECTED: "CLEAR_SELECTED",
};

const initialStateFn = () => JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case ACTIONS.REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case ACTIONS.UPDATE_QTY: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    }

    case ACTIONS.TOGGLE_ITEM: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, selected: !item.selected }
          : item,
      );
    }

    case ACTIONS.CLEAR_CART: {
      return [];
    }

    case ACTIONS.CREATE_ORDER: {
      const selectedItems = state.filter((item) => item.selected);

      const orderId = Date.now().toString();  

      fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          userId: action.payload.userId,
          items: selectedItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
          total: action.payload.total,
          date: new Date().toLocaleDateString("ru-RU"),
          status: "completed",
        }),
      }).catch(console.error);

      // localStorage резерв
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = {
        id: Date.now().toString(),
        userId: parseInt(action.payload.userId),
        items: selectedItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        total: action.payload.total,
        date: new Date().toLocaleDateString("ru-RU"),
        status: "completed",
      };
      localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));

      return state;
    }

    case ACTIONS.CLEAR_SELECTED: {
      return state.filter((item) => !item.selected);
    }

    default:
      return state;
  }
};

export function OrdersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStateFn());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <OrdersContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
}

export default OrdersContext;
