import { Avatar, Box, Container, Grid, IconButton } from '@material-ui/core';
import { ErrorOutlineOutlined, GifOutlined, MailOutlineOutlined, PanoramaOutlined } from '@material-ui/icons';
import avatar from 'assets/images/avatar.jpeg';
import { ChatBox, MessagesDisplay, MessagesTitle } from 'components';
import './index.scss';

const Messages = () => {
    return (
        <Container fixed>
            <Grid container spacing={0}>
                <Grid item xs={4} className='messagesInfor border-width__left border-width__right h-full'>
                    <div className='messagesInfor-title d-between border-width__bottom'>
                        <MessagesTitle messageTitle='Messages' messageIcont={<MailOutlineOutlined />} />
                    </div>
                    <div className='messagesInfor-body'>
                        <Box className='messagesInfor-profile active border-width__bottom'>
                            <Avatar className='messagesInfor-avatar' alt="Remy Sharp" src={avatar} />
                            <Box className='messagesInfor-infor'>
                                <h3>hienhien99</h3>
                                <p>@nphien999</p>
                            </Box>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={8} className='border-width__right h-full'>
                    <div className='messagesInfor-title d-between border-width__bottom'>
                        <MessagesTitle messageTitle='Hienhien99' messageIcont={<ErrorOutlineOutlined />} />
                    </div>
                    <div className='messagesInfor-body__bottom'>
                        <MessagesDisplay />
                    </div>
                    <div className='messagesInfor-footer border-width__top d-between'>
                        <div className='messagesInfor-footer__left'>
                            <IconButton className='messagesInfor-icont'>
                                <PanoramaOutlined />
                            </IconButton>
                            <IconButton className='messagesInfor-icont'>
                                <GifOutlined />
                            </IconButton>
                        </div>
                        <div className='messagesInfor-footer__right'>
                            <ChatBox />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Messages;