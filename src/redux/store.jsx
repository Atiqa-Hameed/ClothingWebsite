import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage for web
import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // Assuming you have a cart reducer

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key in storage
  storage, // Define storage method (localStorage)
};

// Combine your reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Example cart reducer
  // Add other reducers if needed
});

// Wrap the reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for redux-persist
    }),
});

// Export the persistor and store
export const persistor = persistStore(store);
export default store;
