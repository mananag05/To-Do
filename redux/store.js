import { configureStore } from '@reduxjs/toolkit'
import todoslice from './slices/todoslice'
import scrooltobot from './slices/scrooltobot'


export const ReduxStore = configureStore({
    reducer : {
        ToDoSlide : todoslice,
        ScroolToBottom : scrooltobot
    }
})