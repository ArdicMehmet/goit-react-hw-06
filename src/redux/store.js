import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";

// Redux persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    }
    case "filters/changeFilter": {
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store oluşturma
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Persistor oluşturma
export const persistor = persistStore(store);
