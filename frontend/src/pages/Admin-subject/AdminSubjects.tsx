import React from "react";
import Subjects from "../../components/Subjects/Subjects";
import { Container, Grid } from "@mui/material";
import AddButton from "../../components/AddButton/AddButton";
import ModalAdd from "../../components/Modal/ModalAdd";
import { useQuery } from "@apollo/client";
import { GET_Subjects } from "../../graphql/queries";
import { useNavigate, useParams } from "react-router-dom";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import SubjectSkeleton from "../../components/Skeleton/SubjectSkeleton";

const AdminSubjects = () => {
    const [open, setOpen] = React.useState(false);

    const { id } = useParams<{ id: string }>();

    const { loading, error, data } = useQuery(GET_Subjects, {
        variables: { id: id },
    });


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate()
    
    const handleClick = (id:string) => {
        navigate(`/admin/vedios/${id}`);
    }

    const AddSubject = () => {
        handleOpen()
    }
    const addSubjectHanlder = () => {

    }
    
    return (
        <Container>
            <AddButton onClick={AddSubject} />
            <ModalAdd type="subject" open={open} handleClose={handleClose} submit={addSubjectHanlder} />
            {error ? <AlertIndicate type="error" error={error} /> : (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        loading ? (
                            Array(6).fill(null).map((_, index) => (
                                <SubjectSkeleton key={index} />
                            ))
                        ) : (
                            data.subjects.map((item:{id:string,subject:string}) => (
                                <Subjects  key={item.id} id={item.id} name={item.subject} onClick={handleClick}  />
                            ))
                        )
                    }

                </Grid>



            )}

        </Container>
    );
};

export default AdminSubjects;
