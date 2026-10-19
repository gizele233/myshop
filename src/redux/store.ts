import { rootReducer } from "./root-redux";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});