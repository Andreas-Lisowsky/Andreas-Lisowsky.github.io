import {createSlice} from "@reduxjs/toolkit"

export const lastEntrySlice = createSlice({
    name: 'lastEntry',
    initialState: {
        name: 'PlaceholderName',
        job: 'PlaceholderJob',
    },
    reducers: {
        changeLastEntry: (state, action) => {
            state.name = action.payload.name
            state.job = action.payload.job
        },
    },
})

export const {changeLastEntry} = lastEntrySlice.actions

export default lastEntrySlice.reducer