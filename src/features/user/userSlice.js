import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { DELETE, GET, POST } from "../../utils/api";
import { API } from "../../endpoints/common_endpoints";

// Utility function for API requests
const apiRequest = async (apiFn, api, errorMessage, data) => {
    try {
        const response = await apiFn(api, data);
        if (response?.success) {
            return response?.data;
        } else {
            throw new Error(response?.message || errorMessage);
        }
    } catch (error) {
        throw new Error(error.message || errorMessage);
    }
};

// Thunk to fetch user info
export const getUserInfo = createAsyncThunk(
    "get_user_info",
    async (id, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                GET,
                `${API.GET_USER}?user_id=${id}`,
                "User info fetch failed"
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk to update user info
export const updateUserInfo = createAsyncThunk(
    "update_user_info",
    async (data, { rejectWithValue }) => {
        try {
            const user = await apiRequest(
                POST,
                API.UPDATE_PROFILE,
                "Update failed",
                data
            );
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const ChangePassword = createAsyncThunk(
    "change-password",
    async (data, { rejectWithValue }) => {
        try {
            // const user = await apiRequest(
            //   POST,
            //   API.CHANGE_PASSWORD,
            //   "Update failed",
            //   data
            // );
            const user = await POST(API.CHANGE_PASSWORD, data);


            if (user?.success) {
                return user;
            }
            return rejectWithValue(user);
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUserAddresses = createAsyncThunk(
    "get_user_addresses",
    async (_, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                GET,
                API.USER_ADDRESS,
                "User Addresses fetch failed"
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUserAddress = createAsyncThunk(
    "get_user_address",
    async (id, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                GET,
                API.USER_ADDRESS + `/${id}`,
                "User Address fetch failed"
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createUserAddress = createAsyncThunk(
    "create_user_address",
    async (data, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                POST,
                API.USER_ADDRESS,
                "Create Address failed",
                data
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserAddress = createAsyncThunk(
    "update_user_address",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                POST,
                API.USER_ADDRESS + `/${id}`,
                "Update Address failed",
                data
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUserAddress = createAsyncThunk(
    "delete_user_address",
    async (id, { rejectWithValue }) => {
        try {
            const userData = await apiRequest(
                DELETE,
                API.USER_ADDRESS + `/${id}`,
                "Delete Address failed"
            );
            return userData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Helper function to handle async state transitions
const handleAsyncState = (state, action) => {
    switch (action.type) {
        case "pending":
            state.status = "loading";
            break;
        case "fulfilled":
            state.status = "succeeded";
            break;
        case "rejected":
            state.status = "failed";
            state.error = action.payload;
            break;
        default:
            return state;
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {},
        userAddresses: [],
        selcted_address_id: "",
        payment_mode_id: 1,
        status: "idle",
        error: null,
    },
    reducers: {
        setSelctedAddress: (state, action) => {
            state.selected_address_id = action.payload;
        },
        setPaymentMode: (state, action) => {
            state.payment_mode_id = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfo.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(getUserInfo.fulfilled, (state, action) => {
                handleAsyncState(state, { type: "fulfilled", payload: action.payload });
                state.userInfo = action.payload; // Store user info in the state
            })
            .addCase(getUserInfo.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(updateUserInfo.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(updateUserInfo.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(updateUserInfo.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(ChangePassword.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(ChangePassword.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(ChangePassword.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(getUserAddresses.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(getUserAddresses.fulfilled, (state, action) => {
                handleAsyncState(state, { type: "fulfilled" });
                state.userAddresses = action.payload || [];
            })
            .addCase(getUserAddresses.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(getUserAddress.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(getUserAddress.fulfilled, (state, action) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(getUserAddress.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(createUserAddress.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(createUserAddress.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(createUserAddress.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(updateUserAddress.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(updateUserAddress.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(updateUserAddress.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            )

            .addCase(deleteUserAddress.pending, (state) =>
                handleAsyncState(state, { type: "pending" })
            )
            .addCase(deleteUserAddress.fulfilled, (state) =>
                handleAsyncState(state, { type: "fulfilled" })
            )
            .addCase(deleteUserAddress.rejected, (state, action) =>
                handleAsyncState(state, { type: "rejected", payload: action.payload })
            );
    },
});

export const { setSelctedAddress, setPaymentMode } = userSlice.actions;

export default userSlice.reducer;
