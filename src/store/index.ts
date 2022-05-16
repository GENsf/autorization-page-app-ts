import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './slices/userSlice';
import phoneReducer from './slices/phoneSlice';
import addModalReducer from './slices/addModalSlice';
import editModalReducer from './slices/editModalSlice';

const rootReducer = combineReducers({
  user: userReducer,
  phone: phoneReducer,
  addModal: addModalReducer,
  editModal: editModalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['addModal', 'editModal'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;