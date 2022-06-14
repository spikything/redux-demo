import { createSlice } from '@reduxjs/toolkit';

const initialStateVal = {
    name: '',
    email: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateVal },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialStateVal;
        },
    }
});

export const { login, logout }  = userSlice.actions;

export default userSlice.reducer;
