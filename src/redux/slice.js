import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const newSlice = createSlice( {
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ""
  },
  reducers: {
    add( state, action ) {
      state.contacts.push( action.payload );
    },
    remove( state, action ) {
      state.contacts = state.contacts.filter( contact => contact.id !== action.payload );
    },
    addFilter( state, action ) {
      state.filter = action.payload;
    }
  }
} );

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
}

export const contactsReducer = persistReducer( persistConfig, newSlice.reducer );

export const { add, remove, addFilter } = newSlice.actions;