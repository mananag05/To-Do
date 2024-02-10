import { configureStore } from '@reduxjs/toolkit'
import todoslice from './slices/todoslice'

export const ReduxStore = configureStore({
    reducer : {
        ToDoSlide : todoslice,
    }
})