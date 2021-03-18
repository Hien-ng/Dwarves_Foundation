import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputField = ({ form, name, placeholder, disabled, handleChange }) => {
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ onChange, value }) => {
                handleChange(value)
                return <TextField
                    fullWidth
                    onChange={onChange}
                    variant='outlined'
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            }}
        />
    );
};

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

export default InputField;