import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import masterReducer from "../features/master/masterSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        master: masterReducer,

    },
});
