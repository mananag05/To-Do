import {createSlice  } from '@reduxjs/toolkit'

const todoslice = createSlice({
    name  : 'TOdolist',
    initialState : [],
    reducers : {
        NEWTODO : (state, action) => {
            state.push(action.payload)
        },
        DELETETODO: (state, action) => {
            const idToDelete = action.payload;
            return state.filter(todo => todo.id !== idToDelete);
        },
        UPDATE_AND_SAVE_TO_DO : (state, action) => {
            const { text, key } = action.payload;
            return state.map(todo =>
                todo.id === key ? { ...todo, text: text } : todo
            );

        }
    }
})

export const { NEWTODO, DELETETODO, UPDATE_AND_SAVE_TO_DO} = todoslice.actions;
export default todoslice.reducer