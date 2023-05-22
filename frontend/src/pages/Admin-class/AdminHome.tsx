import React from "react";
import Class from "../../components/Class/Class";
import AddButton from "../../components/AddButton/AddButton";
import { Container } from "@mui/material";
import ModalAdd from "../../components/Modal/ModalAdd";
import { useQuery } from "@apollo/client";
import { GET_Classes } from "../../queries/queries";
import ClassSkeleton from "../../components/Skeleton/ClassSkeleton";
import AlertIndicate from "../../components/Alert/AlertIndicate";

const AdminHome = () => {
    const [open, setOpen] = React.useState(false);

    const { loading, error, data } = useQuery(GET_Classes);

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
                loading ? (
                    Array(5).fill(null).map((_, index) => (
                        <ClassSkeleton key={index} />
                    ))
                ) : (
                    data.classes.map((item: { id: number, class: number }) => (
                        <Class key={item.id} id={item.id} std={item.class} />
                    ))
                )
            }

        </Container>
    );
};

export default AdminHome;
