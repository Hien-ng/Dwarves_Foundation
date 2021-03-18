import React from 'react';
import { useSelector } from 'react-redux';

const MessagesDisplay = () => {
    const messages = useSelector(state => state.messages)

    return (
        <>
            {messages.map((message, index) => (
                <div className='message-me' key={index}>
                    <span >{message}</span>
                </div>
            ))}
        </>
    );
};

export default MessagesDisplay;