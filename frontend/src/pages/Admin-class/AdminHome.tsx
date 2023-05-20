import React from "react";
import Class from "../../components/Class/Class";
import AddButton from "../../components/AddButton/AddButton";
import { Container } from "@mui/material";
import ModalAdd from "../../components/Modal/ModalAdd";

const AdminHome = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addClass = ()=>{
        handleOpen();
    }

    return (
        <Container>
            <ModalAdd type='class' open={open} handleClose={handleClose}/>
            <AddButton onClick={addClass} />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
        </Container>
    );
};

export default AdminHome;
