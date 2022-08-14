import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
    addUserToLocalStorage, 
    getUserFromLocalStorage, 
    removeUserFromLocalStorage,
    addTokensToLocalStorage, 
    getTokensFromLocalStorage, 
    removeTokensFromLocalStorage  

} from "../../utils/localStorage";
import { clearStoreThunk, loginUserThunk, registerUserThunk } from './userThunk'
import { toast } from 'react-toastify'


const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
    tokens: getTokensFromLocalStorage()
}

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        console.log(`Register User : ${JSON.stringify(user)}`)
        return registerUserThunk('/api/auth/register', user, thunkAPI)      
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        return loginUserThunk('api/auth/login', user, thunkAPI)
    }
)

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            removeUserFromLocalStorage();
            removeTokensFromLocalStorage();
            toast.success(`Goodbye!`)
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            const { user } = payload;
            state.user = user;
            console.log(payload)
            addUserToLocalStorage(user);
            toast.success(`Hello There`)
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            console.log(payload)
            if (payload.email) {
                toast.error(payload.email[0])
            }
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            const { tokens } = payload
            state.user = tokens;
            console.log(tokens);
            addTokensToLocalStorage(tokens)
            addUserToLocalStorage(tokens);
            toast.success(`Welcome Back`)
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        }
    }
})

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;