import { configureStore } from "@reduxjs/toolkit";
import CommonSlice from "./CommonSlice";
export const Store = configureStore({
  reducer: {
    posts: CommonSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
