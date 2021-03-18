const { createSlice } = require("@reduxjs/toolkit");

const MessagesDisplay = createSlice({
    name: 'messages',
    initialState: [],
    reducers: {
        increase(state, action) {
            return [...state, action.payload]
        }
    }
})

const { actions, reducer } = MessagesDisplay
export const { increase } = actions

export default reducer