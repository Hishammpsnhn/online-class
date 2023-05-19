import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import useStyles from './styles';


const LoginPage: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const classes = useStyles();
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(email, password)
    };

    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <Typography variant='h4' mt={2} textAlign={'center'}>LOGIN</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '5px' }}>
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default LoginPage;
