import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "@redux-devtools/extension";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { contactsReducer } from './slice';

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  enhancer,
} )

export let persistor = persistStore( store ); 