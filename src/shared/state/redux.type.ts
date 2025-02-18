import { store } from "./store";

export type RootState = Omit<ReturnType<typeof store.getState>, "_persist">;
export type AppDispatch = typeof store.dispatch;
