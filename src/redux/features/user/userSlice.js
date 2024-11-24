import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "kishor",
    email: 'kishor@gmail.com',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducer: {

    }
})

export default userSlice.reducer;