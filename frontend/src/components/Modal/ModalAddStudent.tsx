import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from '@mui/material';
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { ADD_Student, GET_Classes } from "../../queries/queries";
import AlertIndicate from "../Alert/AlertIndicate";
import { handleFormChange } from "../../utils/utils";



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
interface FormData {
    name: string;
    email: string;
    password: string;
    class: string;
}
const ModalAddStudent = ({ open, handleClose }: Props) => {
    const initialState: FormData = { name: '', email: '', password: '', class: "" }
    const [formData, setFormData] = useState(initialState)

    //    const { loading, error, data } = useQuery(GET_Classes);


    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    });



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFormChange(event.target as HTMLInputElement, setFormData);
    };
    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        handleFormChange(event.target as HTMLSelectElement, setFormData);
    };


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        console.log(formData)
        // try {
        //     const response = await client.mutate({
        //         mutation: ADD_Student,
        //         variables: {
        //             name,
        //             email,
        //             password,
        //             std: std.toString()
        //         }
        //     });
        //     console.log(response.data); // Access the returned data
        // } catch (error) {
        //     console.error('Non-Apollo Error:', error);
        // }
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
                        value={formData.name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
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

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="class"
                            value={formData.class}
                            label="Class"
                            onChange={handleSelectChange}
                            // required
                        >
                            {/* {error ? <AlertIndicate type="error" error={error} /> :
                                loading ? (
                                    <Typography color='gray'>Loading ...</Typography>
                                ) : (
                                    data.classes.map((item: { id: number, class: number }) => (
                                        <MenuItem key={item.id} value={item.id}>Class {item.class}</MenuItem>
                                    ))
                                )
                            } */}
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
