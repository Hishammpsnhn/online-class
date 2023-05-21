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
    type: string;
    handleClose: () => void;
}
const ModalAdd = ({ type, open, handleClose }: Props) => {
    const [addClass, setAddClass] = useState<string>('');
    const [description, setDiscription] = useState<string>('');
    const [url, setUrl] = useState<string>('');


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'addClass') {
            setAddClass(value);
        } else if (name === 'description') {
            setDiscription(value);
        } else if (name === 'url') {
            setUrl(value);
        }
    };


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(addClass, description, url)
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
                    {type === 'class' && (
                        <TextField
                            type="number"
                            name="addClass"
                            label="Class"
                            value={addClass}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                    {
                        type === 'subject' && (
                            <TextField
                                type="text"
                                name="addClass"
                                label="Subject"
                                value={addClass}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                margin="normal"
                            />
                        )
                    }
                    {
                        type === 'vedio' && (
                            <>
                                <TextField
                                    type="text"
                                    name="addClass"
                                    label="Title"
                                    value={addClass}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                                <TextField
                                    type="text"
                                    name="url"
                                    label="URL"
                                    value={url}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </>
                        )
                    }
                    {type !== 'subject' ? (
                        <TextField
                            type="text"
                            name="description"
                            label="Description"
                            value={description}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                    ) : (
                        <TextField
                            type="text"
                            name="url"
                            label="URL"
                            value={url}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '5px' }}>
                        ADD CLASS
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalAdd;
