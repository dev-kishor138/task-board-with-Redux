import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    userSpecificTask: []
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload });
            } else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement.id + 1, status: 'pending', ...payload });
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id != payload);
        },
        updateTask: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id === payload.id);
            target.status = payload.status;
        },
        userTask: (state, { payload }) => {
            state.userSpecificTask = state.tasks.filter((item) => item.assign === payload);
        }

    }
})

export const { addTask, updateTask, removeTask, userTask } = taskSlice.actions;

export default taskSlice.reducer;