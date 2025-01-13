import {configureStore} from "@reduxjs/toolkit";
import lengthReducer from './slices/arrayLengthSlice.ts'
import arrayReducer from './slices/arraySlice.ts'
import ongoingReducer from './slices/ongoingSlice.ts'
import startStopReducer from './slices/startStopSlice.ts'

export  const store = configureStore({
    reducer: {
        length: lengthReducer,
        array: arrayReducer,
        ongoing: ongoingReducer,
        startStop: startStopReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;