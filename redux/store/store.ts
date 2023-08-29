import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['home'],
};

import homeReducer from '../home/homeSlice';
import {
   combinedMiddleware,
   githubQueryReducer,
 } from '@/services';
const rootReducer = combineReducers({
   home: homeReducer,
   ...githubQueryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(combinedMiddleware),
});

const persistor = persistStore(store);
export { store, persistor };