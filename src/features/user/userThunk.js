import customFetch from "../../utils/axios";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user)
        // console.log(resp)
        return resp.data;
    } catch (error) {
        // console.log(error.response.data)
        return thunkAPI.rejectWithValue(error.response.data)        
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        // console.log(resp)
        return resp.data;
    } catch (error) {
        // console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);        
    }
};

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        return Promise.resolve()
    } catch (error) {
        return Promise.reject()
    }
}