import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from '@mui/material';
import { ApolloClient,  InMemoryCache, useQuery } from "@apollo/client";
import { ADD_Student, GET_Classes } from "../../queries/queries";
import AlertIndicate from "../Alert/AlertIndicate";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface Props {
    open: boolean;
    handleClose: () => void;
}
const ModalAddStudent = ({ open, handleClose }: Props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [std, setStd] = useState<string>('');
    const {loading, error, data } = useQuery(GET_Classes);

    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    });

    const handleChange = (event: SelectChangeEvent<string>) => {
        setStd(event.target.value);
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'name') {
            setName(value);
        }
    };


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const response = await client.mutate({
                mutation: ADD_Student,
                variables: {
                    name,
                    email,
                    password,
                    std: std.toString()
                }
            });
            console.log(response.data); // Access the returned data
        } catch (error) {
            console.error('Non-Apollo Error:', error);
        }
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit} >
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        value={name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
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

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={std}
                            label="Class"
                            onChange={handleChange}
                        >
                            {error ? <AlertIndicate type="error" error={error} /> :
                                loading ? (
                                    <Typography color='gray'>Loading ...</Typography>
                                ) : (
                                    data.classes.map((item: { id: number, class: number }) => (
                                        <MenuItem key={item.id} value={item.id}>Class {item.class}</MenuItem>
                                    ))
                                )
                            }
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '5px' }}>
                        ADD STUDENT
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalAddStudent;
