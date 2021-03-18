import reducer from "pages/messages/messagesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    messages: reducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store