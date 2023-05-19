import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from '@mui/material';

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
    const [studentClass, setStudentClass] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setStudentClass(event.target.value);
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


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(email, password, name, studentClass)
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
                            value={studentClass}
                            label="Class"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Class 1</MenuItem>
                            <MenuItem value={2}>Class 2</MenuItem>
                            <MenuItem value={3}>Class 3</MenuItem>
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
