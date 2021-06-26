import React, { useState } from 'react';
import diclogo from './images/ksudic.jpg';
import { Container, Grid, Paper, Avatar, TextField, InputAdornment, Button } from '@material-ui/core';
import { Person, AccountCircle, Lock } from '@material-ui/icons';

const paperStyle = {
    padding: 20,
    width: 400,
    height: 'auto',
    margin: '100px auto',
};
// const avatarStyle = {
//     backgroundColor: '#1bbd7e',
// };

function Register() {
    const [name, setName] = useState("")
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState(null)
    const [passwordagain, setPasswordAgain] = useState("")

    return (
        <Container maxWidth="lg">
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        {/* <Avatar style={avatarStyle}><PersonAdd /></Avatar> */}
                        <img src={diclogo} style={{ width: "30%" }} />
                        <h1>Register</h1>
                        <form>
                            <TextField onChange={(e) => setName(e.target.value)} label='name' placeholder='Enter your name' fullWidth autoFocus required multiline
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField onChange={(e) => setAccount(e.target.value)} label='account' placeholder='Enter your account' fullWidth required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField onChange={(e) => setPassword(e.target.value)} label='password' placeholder='Enter your password' type="password" fullWidth required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField onChange={(e) => setPasswordAgain(e.target.value)} label='password again' placeholder='Enter your password again' type="password" fullWidth required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button style={{ margin: '25px auto' }} type='submit' color='primary' variant='contained' fullWidth>Register</Button>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}

export default Register;