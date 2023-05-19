import React from "react";
import Class from "../../components/Class/Class";
import AddButton from "../../components/AddButton/AddButton";
import { Container } from "@mui/material";

const AdminHome = () => {
    return (
        <Container>
            <AddButton />
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
