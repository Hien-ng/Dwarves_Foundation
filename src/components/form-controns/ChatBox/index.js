import { increase } from 'pages/messages/messagesSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import ChatForm from '../ChatForm';

const ChatBox = () => {
    const dispatch = useDispatch()
    const handleSubmit = (value) => {
        if (value.chatbox === '') return
        const action = increase(value.chatbox)
        dispatch(action)
    }

    return (
        <div>
            <ChatForm onSubmit={handleSubmit} />
        </div>
    );
};

export default ChatBox;