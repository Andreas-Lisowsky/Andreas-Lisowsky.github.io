import {configureStore} from '@reduxjs/toolkit'
import lastEntryReducer from './lastEntrySlice'

export default configureStore({
    reducer: {
        lastEntry: lastEntryReducer
    },
})