import React from "react";
import Class from "../../components/Class/Class";
import AddButton from "../../components/AddButton/AddButton";
import { Container } from "@mui/material";
import ModalAdd from "../../components/Modal/ModalAdd";
import { useQuery } from "@apollo/client";
import { GET_Classes } from "../../queries.js/queries";
import ClassSkeleton from "../../components/Skeleton/ClassSkeleton";
import AlertIndicate from "../../components/Alert/AlertIndicate";

const AdminHome = () => {
    const [open, setOpen] = React.useState(false);

    const { loading, error, data } = useQuery(GET_Classes);
    console.log(data, error, loading);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addClass = () => {
        handleOpen();
    }

    return (
        <Container>
            <ModalAdd type='class' open={open} handleClose={handleClose} />
            <AddButton onClick={addClass} />
            {error ? <AlertIndicate type="error" error={error} /> :
                loading ? <ClassSkeleton /> : (
                    data.classes.map(() => (
                        <Class />
                    ))
                )}

        </Container>
    );
};

export default AdminHome;
