import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import { handleFormChange } from '../../utils/utils';


const LoginPage: React.FC = () => {

    const initialState = {email: '', password: ''}
    const [formData,setFormData] = useState(initialState)

    const classes = useStyles();
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFormChange(event.target as HTMLInputElement,  setFormData);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(formData)
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
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        value={formData.password}
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
