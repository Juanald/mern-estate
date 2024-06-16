import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userslice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// rootReducer is created which combines all imported reducers(slices)
const rootReducer = combineReducers({ user: userReducer });

// Create a config for use with the persistReducer()
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// set the single reducer
export const store = configureStore({
  // Setting the reducer created in the slice in the store
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export the persistor
export const persistor = persistStore(store);
