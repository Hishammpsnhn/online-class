import React from "react";
import Subjects from "../../components/Subjects/Subjects";
import { Container, Grid } from "@mui/material";
import AddButton from "../../components/AddButton/AddButton";

const AdminSubjects = () => {
    return (
        <Container>
            <AddButton />
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
