import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "Kishor",
    email: 'kishor@gmail.com',
    userTask: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducer: {

    }
})

export default userSlice.reducer;