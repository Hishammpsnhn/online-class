import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import { handleFormChange } from '../../utils/utils';
import { LOGIN_Student } from '../../graphql/mutaion';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { UserContext } from '../../context/UserContext';
import { json } from 'stream/consumers';


const LoginPage: React.FC = () => {

    const initialState = { email: '', password: '' }
    const [formData, setFormData] = useState(initialState)
    const [loginStudendMutation] = useMutation(LOGIN_Student);

    const { setUser } = useContext(UserContext);

    const classes = useStyles();
    const navigate = useNavigate()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFormChange(event.target as HTMLInputElement, setFormData);
    };

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if (userInfo) {
            const user = JSON.parse(userInfo);
            if (user?.isAdmin) {
                navigate('/admin')
            }else{
                navigate('/home')
            }
        }
    }, [navigate]);


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        console.log(formData)
        event.preventDefault();
        try {
            const { data } = await loginStudendMutation({
                variables: {
                    email: formData.email,
                    password: formData.password,
                }
            });
            // Access the returned data from the server
            localStorage.setItem('userInfo', JSON.stringify(data.login));
            const userInfo = localStorage.getItem("userInfo")
            if (userInfo) {
              const ParseUser = JSON.parse(userInfo)
              setUser(ParseUser)
            }
            navigate('/home')

        } catch (error) {
            console.error('Non-Apollo Error:', error);
            alert(error);
        }

    };

    return (
        <>
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
        </>
    );
};

export default LoginPage;
