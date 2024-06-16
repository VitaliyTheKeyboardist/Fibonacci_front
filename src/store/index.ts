import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import presentationReducer from "./slices/presentationSlice";
import allPresentationsReducer from "./slices/allPresentationsSlice"

export const store = configureStore({
    reducer: {
        user: userReduser,
        presentation: presentationReducer,
        allPresentations: allPresentationsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch