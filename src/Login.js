import React from 'react';
import diclogo from './images/ksudic.jpg';
import { Container, Grid, Paper, Avatar, TextField, InputAdornment, Button } from '@material-ui/core';
import { PersonAdd, Person, AccountCircle, Lock } from '@material-ui/icons';

const paperStyle = {
    padding: 20,
    width: 400,
    height: 'auto',
    margin: '100px auto',
};
const avatarStyle = {
    backgroundColor: '#1bbd7e',
};

function Login() {
    return (
        <Container maxWidth="lg">
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        {/* <Avatar style={avatarStyle}><PersonAdd /></Avatar> */}
                        <img src={diclogo} style={{ width: "30%" }} />
                        <h1>Login</h1>
                        <form>
                            <TextField label='account' placeholder='Enter your account' fullWidth required autoFocus
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField label='password' placeholder='Enter your password' type="password" fullWidth required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button style={{ margin: '25px auto' }} type='submit' color='primary' variant='contained' fullWidth>Login</Button>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}

export default Login;