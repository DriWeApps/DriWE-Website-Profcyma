import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { POST } from "../../utils/api";
import { API } from "../../endpoints/common_endpoints";
import { useNavigate } from "react-router-dom";

// Utility function for API requests
const apiRequest = async (apiFn, api, data, errorMessage) => {
    try {
        const response = await apiFn(api, data);

        console.log(response, "response response response");

        if (response?.success) {
            return response?.data;
        } else {
            throw new Error(response || errorMessage);
        }
    } catch (error) {
        throw new Error(error || errorMessage);
    }
};

// Thunk to validate token (Async)
export const checkTokenValidity = createAsyncThunk(
    "auth/checkTokenValidity",
    async (_, { rejectWithValue }) => {
        const token = Cookies.get("driwe_security");
        if (!token) {
            return rejectWithValue("No token found");
        }

        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                Cookies.remove("driwe_security", { path: "/" });
                return rejectWithValue("Token expired");
            }
            return decodedToken;
        } catch (error) {
            return rejectWithValue(error.message || "Token validation failed");
        }
    }
);

// Thunk for sending OTP
export const sendMobileOtp = createAsyncThunk(
    "auth/sendOtp",
    async (data, { rejectWithValue }) => {
        try {

            console.log("sendOtp", data);

            const otp = await POST(API.SEND_OTP, data);


            console.log("otp", otp);

            return otp;
            //   return rejectWithValue(otp);
        } catch (error) {
            console.log(error, "error error");

            return rejectWithValue(error);
        }
    }
);

// Thunk for verifying login
export const verifyOtp = createAsyncThunk(
    "auth/verifyotp",
    async (data, { rejectWithValue }) => {

        try {
            console.log("verifyOtp", data);
            //   const res  = await apiRequest(
            //     POST,
            //     API.VERIFY_OTP,
            //     data,
            //     "Login failed"
            //   );
            //   console.log(res,'res res verify');

            //   return res;    
            const response = await POST(API.VERIFY_OTP, data);

            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const forgotPassword = createAsyncThunk(
    "auth/forgot-password",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.UPDATE_PASSWORD, data);
            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk for Logout
export const logout = createAsyncThunk(
    "auth/logout",
    async ({ navigate }, { dispatch, rejectWithValue }) => {
        try {
            Cookies.remove("driwe_security");

            navigate("/"); // Redirect to homepage or login
            // Optionally dispatch logout-related state
            dispatch(setIsSignedOut());
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSignUp = createAsyncThunk(
    "auth/sing-up",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_SINGUP, data);
            if (response?.data?.token) {
                Cookies.set("driwe_security", response?.data?.token);
                return response?.data?.token;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSignUpStepOne = createAsyncThunk(
    "auth/sing-up-step-one",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_SINGUP_STEP1, data);
            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSignUpStepTwo = createAsyncThunk(
    "auth/sing-up-step-two",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_SINGUP_STEP2, data);
            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSignUpStepThree = createAsyncThunk(
    "auth/sing-up-step-three",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_SINGUP_STEP3, data);
            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSignUpStepFour = createAsyncThunk(
    "auth/sing-up-step-four",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_SINGUP_STEP4, data);
            if (response?.success) {
                return response;
            }
            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const UserLogin = createAsyncThunk(
    "auth/userLogin",
    async (data, { rejectWithValue }) => {
        try {
            const response = await POST(API.USER_LOGIN, data);

            if (response?.data?.token) {
                Cookies.set("driwe_security", response?.data?.token);
                return response?.data?.token;
            }

            return rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Helper function to handle common async state transitions
const handleAsyncState = (state, action, isSignin = false) => {
    console.log(isSignin, "isSignin");

    switch (action.type) {
        case "pending":
            state.status = "loading";
            break;
        case "fulfilled":
            state.status = "succeeded";
            if (isSignin) {
                state.token = action.payload;
                state.is_signin = true;
            }
            break;
        case "rejected":
            state.status = "failed";
            state.error = action.payload;
            if (isSignin) state.is_signin = false;
            break;
        default:
            return state;
    }
};

// Create the slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        name: "",
        error: null,
        status: "idle",
        is_signin: false,
    },
    reducers: {
        setIsSignedOut: (state) => {
            console.log('logout');

            state.is_signin = false;
            state.token = "";
            state.name = "";
        },

    },
    extraReducers: (builder) => {
        builder
            // Handling verifyLogin actions
            .addCase(verifyOtp.pending, (state) =>
                handleAsyncState(state, { type: "pending" }, true)
            )
            .addCase(verifyOtp.fulfilled, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "fulfilled", payload: action.payload },
                    // true
                )
            )
            .addCase(verifyOtp.rejected, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "rejected", payload: action.payload },
                    // true
                )
            )
            .addCase(forgotPassword.pending, (state) =>
                handleAsyncState(state, { type: "pending" }, true)
            )
            .addCase(forgotPassword.fulfilled, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "fulfilled", payload: action.payload },
                    // true
                )
            )
            .addCase(forgotPassword.rejected, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "rejected", payload: action.payload },
                    // true
                )
            )

            // Handling sendMobileOtp actions
            .addCase(sendMobileOtp.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(sendMobileOtp.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(sendMobileOtp.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(userSignUp.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(userSignUp.fulfilled, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "fulfilled", payload: action.payload },
                    true
                )
            )
            .addCase(userSignUp.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(UserLogin.pending, (state) =>
                handleAsyncState(state, { type: "pending" }, true)
            )
            .addCase(UserLogin.fulfilled, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "fulfilled", payload: action.payload },
                    true
                )
            )
            .addCase(UserLogin.rejected, (state, action) =>
                handleAsyncState(
                    state,
                    { type: "rejected", payload: action.payload },
                    true
                )
            )

            // Handling checkTokenValidity actions
            .addCase(checkTokenValidity.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(checkTokenValidity.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" }, true)
            )
            .addCase(checkTokenValidity.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            );
    },
});

export const { setIsSignedOut } = authSlice.actions;

export default authSlice.reducer;
