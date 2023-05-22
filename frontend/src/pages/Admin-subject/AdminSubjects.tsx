import React from "react";
import Subjects from "../../components/Subjects/Subjects";
import { Container, Grid } from "@mui/material";
import AddButton from "../../components/AddButton/AddButton";
import ModalAdd from "../../components/Modal/ModalAdd";
import { useQuery } from "@apollo/client";
import { GET_Subjects } from "../../queries/queries";
import { useParams } from "react-router-dom";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import SubjectSkeleton from "../../components/Skeleton/SubjectSkeleton";

const AdminSubjects = () => {
    const [open, setOpen] = React.useState(false);

    const { id } = useParams<{ id: string }>();
    const parsedId = Number(id);

    const { loading, error, data } = useQuery(GET_Subjects, {
        variables: { id: parsedId },
    });
    console.log(loading, error, data);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const AddSubject = () => {
        handleOpen()
    }
    return (
        <Container>
            <AddButton onClick={AddSubject} />
            <ModalAdd type="subject" open={open} handleClose={handleClose} />
            {error ? <AlertIndicate type="error" error={error} /> : (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        loading ? (
                            Array(6).fill(null).map((_, index) => (
                                <SubjectSkeleton key={index} />
                            ))
                        ) : (
                            data.subjects.map((item:{id:number,name:string,url:string}) => (
                                <Subjects key={item.id} id={item.id} name={item.name} url={item.url} />
                            ))
                        )
                    }

                </Grid>



            )}

        </Container>
    );
};

export default AdminSubjects;
