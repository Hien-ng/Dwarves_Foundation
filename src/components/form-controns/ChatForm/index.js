import { IconButton } from '@material-ui/core';
import { SendSharp } from '@material-ui/icons';
import ProgressCircular from 'components/progress/Circular';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../inputField';

const ChatForm = ({ onSubmit }) => {
    const [progress, setProgress] = useState(0);

    const form = useForm({
        defaultValues: {
            chatbox: '',
        },
    })

    const handleChange = value => {
        setProgress(value.length)
    }

    const handleSubmitForm = async (value) => {
        await onSubmit(value)
    }


    return (
        <div>
            <form className="d-items" onSubmit={form.handleSubmit(handleSubmitForm)}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <InputField handleChange={handleChange} name='chatbox' form={form} placeholder="Start new message" />
                    <ProgressCircular value={progress} />
                </div>
                <IconButton type='submit' className='messagesInfor-icont'>
                    <SendSharp />
                </IconButton>
            </form>
        </div>
    );
};

ChatForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default ChatForm;