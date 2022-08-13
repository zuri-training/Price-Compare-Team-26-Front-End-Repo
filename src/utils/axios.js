import axios from 'axios'
import { clearStore } from '../features/user/userSlice'
import { getUserFromLocalStorage } from './localStorage'


const customFetch = axios.create({
    baseURL: 'https://scoutvendor.herokuapp.com'
})


customFetch.interceptors.request.use(
    (config) => {
        // const user = getUserFromLocalStorage()
        // if(user) {
        //     config.headers.common['Authorization'] = `Bearer ${user.token}`
        // }
        return config
    }
)

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore())
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch