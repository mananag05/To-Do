import { createSlice } from "@reduxjs/toolkit";

const ScrollSlice = createSlice({
    name: 'Scroll',
    initialState: false,
    reducers: {
        SCROLL_TO_BOTTOM: (state, action) => {
            return true;
        },
        resetScrollToBottom: (state, action) => {
            return false
        }
    }
});

export const { SCROLL_TO_BOTTOM , resetScrollToBottom} = ScrollSlice.actions;
export default ScrollSlice.reducer;