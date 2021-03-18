import { Box, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStylesFacebook = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    bottom: {
        color: '#303336',
    },
    top_blue: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    top_warning: {
        color: '#ffad1f',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    top_error: {
        color: '#e0245e',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

const ProgressCircular = ({ value }) => {
    const classes = useStylesFacebook();
    let check = classes.top_blue
    if (value >= 40) check = classes.top_warning
    if (value > 50) check = classes.top_error

    return (
        <Box
            position="absolute" display="inline-flex"
            top='50%'
            right={6}
            style={{ transform: 'translateY(-50%)' }}
        >
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                thickness={4}
                value={100}
                size={26}
            />
            <CircularProgress
                className={check}
                classes={{ circle: classes.circle }}
                variant="determinate"
                value={value >= 50 ? 100 : value * 2}
                size={26}
            />
            {50 - value <= 10 && (
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div" style={{ color: `${value >= 40 ? '#ffad1f' : '#e0245e'}` }} >{50 - value}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default ProgressCircular;
