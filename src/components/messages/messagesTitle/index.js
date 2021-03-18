import { IconButton } from '@material-ui/core';
import { MailOutlineOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const MessagesTitle = ({ messageIcont, messageTitle }) => {
    return (
        <>
            <h2>{messageTitle}</h2>
            <IconButton style={{ color: 'rgba(29,161,242,1.00)' }}>
                {messageIcont}
            </IconButton>
        </>
    );
};

MessagesTitle.propTypes = {
    messageTitle: PropTypes.string.isRequired,
    messageIcont: PropTypes.object,
};

MessagesTitle.defaultProps = {
    messageIcont: <MailOutlineOutlined />
}

export default MessagesTitle;