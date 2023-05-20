import React from "react";
import Subjects from "../../components/Subjects/Subjects";
import { Container, Grid } from "@mui/material";
import AddButton from "../../components/AddButton/AddButton";
import ModalAdd from "../../components/Modal/ModalAdd";

const AdminSubjects = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const AddSubject = ()=>{
        handleOpen()
    }
    return (
        <Container>
            <AddButton onClick={AddSubject}/>
            <ModalAdd type="subject" open={open} handleClose={handleClose}/>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Subjects />
                <Subjects />
                <Subjects />
                <Subjects />
            </Grid>
        </Container>
    );
};

export default AdminSubjects;
