import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST } from "../../utils/api";
import { API } from "../../endpoints/common_endpoints";
import { Select2Data } from "../../utils/common";

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

// Thunk for getting all store categories
export const getAllCategories = createAsyncThunk(
    "master/categories",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_CATEGORIES,
                "Store categories fetch failed"
            );

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllVehicleCategorys = createAsyncThunk(
    "master/getAllVehicleCategorys",
    async (type, { rejectWithValue }) => {
        try {
            const res = await GET(`${API.GET_ALL_VEHICLE_Categorys}/${type}`);
            return await Select2Data(res.data, "vehicle_category_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllVehicles = createAsyncThunk(
    "master/getAllVehicles",
    async (id, { rejectWithValue }) => {
        try {
            const res = await GET(`${API.GET_ALL_VEHICLE}/${id}`);
            return await Select2Data(res.data, "vehicle_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk for getting all store categories
export const getAllCategoriesproducts = createAsyncThunk(
    "master/productcategories",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.CATEGORY_WISE_PRODUCTS,
                "Store categories fetch failed"
            );

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// Thunk for getting all store categories
export const getAllSubCategory = createAsyncThunk(
    "master/sub-category",
    async (category_id, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_SUB_CATEGORIES + `/${category_id}`,
                "Product categories fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllDataSubCategory = createAsyncThunk(
    "master/sub-category-data",
    async (category_id, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_SUB_CATEGORIES,
                "Product categories fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllChildCategory = createAsyncThunk(
    "master/child-category",
    async (subcategory_id, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_CHILD_CATEGORIES + `/${subcategory_id}`,
                "Product categories fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk for getting all countries
export const getAllCountries = createAsyncThunk(
    "master/countries",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_COUNTRIES,
                "Countries fetch failed"
            );
            console.log(data, 'dataggggggggggggg');

            const result = await Select2Data(data, "country_id");
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
// State - Get All (for a specific country)
export const AllState = createAsyncThunk(
    "common/masters/all-state/:id",
    async ({ countryId, name = "" }, { rejectWithValue }) => {
        try {
            const res = await GET(`${API.GET_ALL_STATES}/${countryId}?name=${name}`);
            console.log(res?.data, 'res state state');

            // You can adjust Select2Data if necessary
            return await Select2Data(res?.data, "state_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// City - Get All (for a specific state)
export const AllCity = createAsyncThunk(
    "common/masters/all-city/:id",
    async (_, { rejectWithValue }) => {
        try {
            const res = await GET(`${API.GET_ALL_CITIES}`);
            return await Select2Data(res.data, "city_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Pincode - Get All (for a specific city)
export const AllPincode = createAsyncThunk(
    "common/masters/all-pincode/:id",
    async ({ cityId, name = "" }, { rejectWithValue }) => {
        try {
            const res = await GET(`${API.GET_ALL_PINCODES}/${cityId}?name=${name}`);
            return await Select2Data(res.data, "pincode_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk for getting all countries
export const getAllCancelReason = createAsyncThunk(
    "master/cancel-reasons",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_CANCEL_REASONS,
                "Cancel reasons fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk for getting all countries
export const getAllReturnReason = createAsyncThunk(
    "master/return-reasons",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_RETURN_REASONS,
                "Return reasons fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllIndustry = createAsyncThunk(
    "master/industry",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_INDUSTRY,
                "Industry fetch failed"
            );
            return await Select2Data(data, "industry_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getAllDepartment = createAsyncThunk(
    "master/department",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_DEPARTMENT,
                "Department fetch failed"
            );
            console.log(data?.data, "data department");
            return await Select2Data(data.data, "department_id");
            // return data?.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getAllICompanySize = createAsyncThunk(
    "master/company-size",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_COMPANY_SIZE,
                "Company size fetch failed"
            );
            // return data;
            return await Select2Data(data.data, "company_size_id");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getAllPaymentMethod = createAsyncThunk(
    "master/payment-method",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_PAYMENT_METHOD,
                "Return reasons fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllAddressType = createAsyncThunk(
    "master/address-type",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_ALL_ADDRESS_TYPE,
                "Adddress type reasons fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const appSetup = createAsyncThunk(
    "master/APP-SETUP",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.GET_APP_SETUP,
                "App setup fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const OrderStatus = createAsyncThunk(
    "master/order-status",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                GET,
                API.ORDER_STATUS,
                "Order status fetch failed"
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
// Create the slice
const masterSlice = createSlice({
    name: "master",
    initialState: {

        all_city: [],
        all_pincode: [],
        vehicle_categorys: [],
        vehicles: [],

        categories: [],
        all_country: [],
        all_state: [],
        subcategories: [],
        all_subcategories: [],
        childcategories: [],

        industry: [],
        department: [],
        companysize: [],

        cancelReasons: [],
        returnReasons: [],
        payment_method: [],
        address_type: [],
        app_setup: {},
        order_status: [],
        error: null,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getAllVehicleCategorys.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllVehicleCategorys.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.vehicle_categorys = action.payload || [];
            })
            .addCase(getAllVehicleCategorys.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            
            .addCase(getAllVehicles.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.vehicles = action.payload || [];
            })
            .addCase(getAllVehicles.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Handling getAllStoreCategories actions
            .addCase(getAllCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload || [];
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling getAllStoreCategories actions
            .addCase(getAllSubCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllSubCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.subcategories = action.payload || [];
            })
            .addCase(getAllSubCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(getAllDataSubCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllDataSubCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.all_subcategories = action.payload || [];
            })
            .addCase(getAllDataSubCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling getAllChildCategories actions
            .addCase(getAllChildCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllChildCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.childcategories = action.payload || [];
            })
            .addCase(getAllChildCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling getAllCountries actions
            .addCase(getAllCountries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllCountries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.all_country = action.payload || [];
            })
            .addCase(getAllCountries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling AllState actions
            .addCase(AllState.pending, (state) => {
                state.status = "loading";
            })
            .addCase(AllState.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.all_state = action.payload || [];
            })
            .addCase(AllState.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(AllCity.pending, (state) => {
                state.status = "loading";
            })
            .addCase(AllCity.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.all_city = action.payload || [];
            })
            .addCase(AllCity.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling AllPincode actions
            .addCase(AllPincode.pending, (state) => {
                state.status = "loading";
            })
            .addCase(AllPincode.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.all_pincode = action.payload || [];
            })
            .addCase(AllPincode.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Handling getAllCountries actions
            .addCase(getAllCancelReason.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllCancelReason.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cancelReasons = action.payload || [];
            })
            .addCase(getAllCancelReason.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Handling getAllCountries actions
            .addCase(getAllReturnReason.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllReturnReason.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.returnReasons = action.payload || [];
            })
            .addCase(getAllReturnReason.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(getAllIndustry.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllIndustry.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.industry = action.payload || [];
            })
            .addCase(getAllIndustry.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(getAllDepartment.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllDepartment.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.department = action.payload || [];
            })
            .addCase(getAllDepartment.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(getAllICompanySize.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllICompanySize.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.companysize = action.payload || [];
            })
            .addCase(getAllICompanySize.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(getAllPaymentMethod.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllPaymentMethod.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.payment_method = action.payload || [];
            })
            .addCase(getAllPaymentMethod.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(getAllAddressType.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllAddressType.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.address_type = action.payload || [];
            })
            .addCase(getAllAddressType.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(appSetup.pending, (state) => {
                state.status = "loading";
            })
            .addCase(appSetup.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.app_setup = action.payload || {};
            })
            .addCase(appSetup.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(OrderStatus.pending, (state) => {
                state.status = "loading";
            })
            .addCase(OrderStatus.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.order_status = action.payload || [];
            })
            .addCase(OrderStatus.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default masterSlice.reducer;
