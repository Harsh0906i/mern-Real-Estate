import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false;
            state.error = null;
        },
        signInFaliure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFaliure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = true;
            state.currentUser = null;
            state.error = null;
        },
        deleteUserFaliure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }

    },
});

export const {
    signInStart,
    signInFaliure,
    signInSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFaliure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFaliure
} = userSlice.actions;
export default userSlice.reducer;