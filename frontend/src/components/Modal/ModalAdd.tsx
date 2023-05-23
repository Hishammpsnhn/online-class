import { Box, Button,TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal } from '@mui/material';
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
    type: string;
    handleClose: () => void;
    submit: (formData: FormData) => void;
}
interface FormData {
    class: string;
    description: string;
    url: string;
    title: string;
    subject:string;
  }

const ModalAdd = ({ type, open, handleClose, submit }: Props) => {

    const initialState:FormData = { class: '', description: '', url: '',title:"",subject:"" }
    const [formData, setFormData] = useState(initialState)


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFormChange(event.target as HTMLInputElement,  setFormData);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submit(formData);
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
                            name="class"
                            label="Class"
                            value={formData.class}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                    {type === 'subject' && (
                        <TextField
                            type="text"
                            name="subject"
                            label="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                   
                    
                    {
                        type === 'vedio' && (
                            <>
                                <TextField
                                    type="text"
                                    name="title"
                                    label="Title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                                  
                                <TextField
                                    type="text"
                                    name="description"
                                    label="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                                  
                                <TextField
                                    type="text"
                                    name="url"
                                    label="URL"
                                    value={formData.url}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    margin="normal"
                                />
                            </>
                        )
                    }
                
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '5px' }}>
                        ADD CLASS
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalAdd;
