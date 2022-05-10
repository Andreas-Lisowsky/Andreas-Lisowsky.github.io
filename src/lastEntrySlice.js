import { createSlice } from "@reduxjs/toolkit"

export const lastEntrySlice = createSlice({
    name: 'lastEntry',
    initialState: {
        name: '',
        job: '',
    },
    reducers: {
        changeLastEntry: (state) => {
            state.name = action.payload.name
            state.job = action.payload.job
        },
    },
})

export const {changeLastEntry} = lastEntrySlice.actions

export default counterSlice.reducer