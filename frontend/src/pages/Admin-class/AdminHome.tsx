import React, { useEffect, useState } from "react";
import Class from "../../components/Class/Class";
import AddButton from "../../components/AddButton/AddButton";
import { Container } from "@mui/material";
import ModalAdd from "../../components/Modal/ModalAdd";
import { useMutation, useQuery } from "@apollo/client";
import { GET_Classes } from "../../graphql/queries";
import ClassSkeleton from "../../components/Skeleton/ClassSkeleton";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import { client } from "../../utils/utils";
import { ADD_Class } from "../../graphql/mutaion";

interface ClassRoom {
    // Define the properties of your class room object here
    id: string;
    class: number;
}

const AdminHome = () => {
    const [open, setOpen] = React.useState(false);

    const { loading, error, data ,refetch} = useQuery(GET_Classes);
    const [addClassMutation] = useMutation(ADD_Class);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addClassBtn = () => {
        handleOpen();
    }

    const addClassHandler = async (formData: { class: string }) => {
        const classRoom = parseInt(formData.class)
        if (classRoom < 12 && classRoom > 0) {
            const isClassExist = data.classes.some((obj: { class: number }) => obj.class === classRoom);
            if (!isClassExist) {
                try {
                    await addClassMutation({
                        variables: {
                            class: classRoom,
                        },
                    });

                    refetch();
                    handleClose();

                } catch (error) {
                    console.log(error);
                    alert(error);
                }
            } else {
                alert("classRoom already exists")
            }

        } else {
            alert("Invalid classroom")
        }
    };



    return (
        <Container>
            <ModalAdd type='class' open={open} handleClose={handleClose} submit={addClassHandler} />
            <AddButton onClick={addClassBtn} />
            {error ? <AlertIndicate type="error" error={error} /> :
                loading ? (
                    Array(5).fill(null).map((_, index) => (
                        <ClassSkeleton key={index} />
                    ))
                ) : (
                    data.classes.map((item: ClassRoom) => (
                        <Class key={item.id} id={item.id} std={item.class} />
                    ))
                )
            }

        </Container>
    );
};

export default AdminHome;
